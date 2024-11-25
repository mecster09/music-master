// app/page.tsx
'use client'; 

import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaSpotify, FaYoutube } from 'react-icons/fa';

const Home: React.FC = () => {
  const [spotifyToken, setSpotifyToken] = useState<string | null>(null);
  const [youtubeToken, setYoutubeToken] = useState<string | null>(null);
  const [spotifyPlaylists, setSpotifyPlaylists] = useState<any[]>([]);
  const [youtubePlaylists, setYoutubePlaylists] = useState<any[]>([]);

  const handleSpotifyLogin = () => {
    window.location.href = "http://localhost:4000/spotify/login";
  };

  const handleYouTubeLogin = () => {
    window.location.href = "http://localhost:4000/youtube/login";
  };

  const fetchSpotifyPlaylists = async (token: string) => {
    try {
      const response = await axios.get("http://localhost:4000/spotify/playlists", {
        params: { token },
      });
      setSpotifyPlaylists(response.data);
    } catch (err) {
      console.error("Failed to fetch Spotify playlists", err);
    }
  };

  const fetchYouTubePlaylists = async (token: string) => {
    try {
      const response = await axios.get("http://localhost:4000/youtube/playlists", {
        params: { token },
      });
      setYoutubePlaylists(response.data);
    } catch (err) {
      console.error("Failed to fetch YouTube playlists", err);
    }
  };

  useEffect(() => {
    if (spotifyToken) fetchSpotifyPlaylists(spotifyToken);
    if (youtubeToken) fetchYouTubePlaylists(youtubeToken);
  }, [spotifyToken, youtubeToken]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="p-8 bg-white rounded-2xl shadow-2xl text-center w-full max-w-md">
        <h1 className="text-3xl font-semibold text-gray-800 mb-8">Sync Playlists</h1>
        <div className="flex flex-col space-y-6 mb-8">
          {/* Spotify Login Button */}
          <button
            className="flex items-center justify-center space-x-4 px-8 py-4 w-full bg-green-600 text-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            onClick={handleSpotifyLogin}
          >
            <FaSpotify size={28} />
            <span className="text-lg font-medium">Login with Spotify</span>
          </button>

          {/* YouTube Music Login Button */}
          <button
            className="flex items-center justify-center space-x-4 px-8 py-4 w-full bg-red-600 text-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            onClick={handleYouTubeLogin}
          >
            <FaYoutube size={28} />
            <span className="text-lg font-medium">Login with YouTube Music</span>
          </button>
        </div>

        {/* Playlist Display Section */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-4">Your Playlists</h2>
          <div className="flex flex-col sm:flex-row justify-between space-y-6 sm:space-y-0 sm:space-x-8">
            {/* Spotify Playlists */}
            <div className="w-full sm:w-1/2">
              <h3 className="font-semibold text-lg mb-2">Spotify</h3>
              <ul className="list-disc pl-4 space-y-2">
                {spotifyPlaylists.map((playlist) => (
                  <li key={playlist.id} className="text-gray-700">{playlist.name}</li>
                ))}
              </ul>
            </div>

            {/* YouTube Playlists */}
            <div className="w-full sm:w-1/2">
              <h3 className="font-semibold text-lg mb-2">YouTube Music</h3>
              <ul className="list-disc pl-4 space-y-2">
                {youtubePlaylists.map((playlist) => (
                  <li key={playlist.id} className="text-gray-700">{playlist.snippet.title}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
