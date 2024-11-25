// types.ts

export interface SpotifyPlaylist {
  id: string;
  name: string;
}

export interface YouTubePlaylist {
  id: string;
  snippet: {
    title: string;
  };
}

export interface AuthResponse {
  access_token: string;
  refresh_token: string;
  expires_in: number;
}