import express from "express";
import axios from "axios";
import { SpotifyPlaylist, YouTubePlaylist } from '../types/types';
import { AuthResponse } from "../types/types"; 


const router = express.Router();

// YouTube Login
router.get("/login", (req, res) => {
  const redirectUri = "http://localhost:4000/youtube/callback";
  const scopes = ["https://www.googleapis.com/auth/youtube.readonly"];

  const authUrl = `https://accounts.google.com/o/oauth2/auth?response_type=code&client_id=${
    process.env.YOUTUBE_CLIENT_ID
  }&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(
    scopes.join(" ")
  )}&access_type=offline`;

  res.redirect(authUrl);
});

// YouTube Callback
router.get("/callback", async (req, res) => {
  const code = req.query.code as string;

  try {
    const response = await axios.post(
      "https://oauth2.googleapis.com/token",
      {
        code,
        client_id: process.env.YOUTUBE_CLIENT_ID!,
        client_secret: process.env.YOUTUBE_CLIENT_SECRET!,
        redirect_uri: "http://localhost:4000/youtube/callback",
        grant_type: "authorization_code",
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    const { access_token, refresh_token } = response.data as AuthResponse;

    res.json({ access_token, refresh_token });
  } catch (err) {
    res.status(500).json({ error: "YouTube Authorization Failed", details: err });
  }
});

// YouTube Playlists
router.get("/playlists", async (req, res) => {
  const { token } = req.query;

  try {
    const response = await axios.get<{ items: YouTubePlaylist[] }>(
        "https://www.googleapis.com/youtube/v3/playlists",
      {
        headers: { Authorization: `Bearer ${token}` },
        params: { part: "snippet,contentDetails", mine: true },
      }
    );

    res.json(response.data.items);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch YouTube playlists", details: err });
  }
});

export default router;
