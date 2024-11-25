import express from "express";
import axios from "axios";
import { SpotifyPlaylist, YouTubePlaylist } from '../types/types';
import { AuthResponse } from "../types/types"; 


const router = express.Router();

// Spotify Login
router.get("/login", (req, res) => {
  const redirectUri = "http://localhost:4000/spotify/callback";
  const scopes = "playlist-read-private playlist-read-collaborative";

  const authUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${
    process.env.SPOTIFY_CLIENT_ID
  }&scope=${encodeURIComponent(scopes)}&redirect_uri=${encodeURIComponent(redirectUri)}`;

  res.redirect(authUrl);
});

// Spotify Callback
router.get("/callback", async (req, res) => {
  const code = req.query.code as string;

  try {
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      new URLSearchParams({
        grant_type: "authorization_code",
        code,
        redirect_uri: "http://localhost:4000/spotify/callback",
        client_id: process.env.SPOTIFY_CLIENT_ID!,
        client_secret: process.env.SPOTIFY_CLIENT_SECRET!,
      }),
      {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      }
    );

    const { access_token, refresh_token } = response.data as AuthResponse;

    res.json({ access_token, refresh_token });
  } catch (err) {
    res.status(500).json({ error: "Spotify Authorization Failed", details: err });
  }
});

// Spotify Playlists
router.get("/playlists", async (req, res) => {
  const { token } = req.query;

  try {
    const response = await axios.get<{ items: SpotifyPlaylist[] }>("https://api.spotify.com/v1/me/playlists", {
      headers: { Authorization: `Bearer ${token}` },
    });

    res.json(response.data.items);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch Spotify playlists", details: err });
  }
});

export default router;
