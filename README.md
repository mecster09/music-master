# task-list

# Spotify and YouTube Music Playlist Sync

## Project Purpose
This web application allows users to sync their playlists between **Spotify** and **YouTube Music**. It enables users to log in to both platforms, select playlists to sync, and transfer them between Spotify and YouTube Music while keeping the playlist names intact.

## Project Summary
This application is divided into two parts: the **frontend** (built with Next.js and React) and the **backend** (built with Node.js and Express). The frontend allows users to interact with the application through a simple, mobile-friendly interface where they can log in to Spotify and YouTube Music. The backend handles authentication, token management, and API communication with Spotify and YouTube Music to sync playlists between both services.

## File Structure

my-full-stack-app/ 
├── backend/ # Node.js/Express backend 
│ ├── routes/ # API route handlers for Spotify and YouTube Music 
│ ├── server.ts # Entry point for the Express server ├── frontend/ # Next.js frontend 
│ ├── pages/ # Next.js pages and components 
│ ├── public/ # Static assets 
│ ├── styles/ # Tailwind CSS configuration and styles 
│ ├── .next/ # Build output for Next.js (generated during build) 
├── .env # Environment variables (Spotify API credentials) 
├── package.json # Project dependencies and scripts 
├── next.config.js # Next.js configuration 
├── tsconfig.json # TypeScript configuration 
└── docker-compose.yml # Docker configuration (optional)

## Implementation

### **Frontend**
The frontend is built with **Next.js**, using **React** and **Tailwind CSS** for styling. It includes:
- **Spotify Login Button**: Redirects the user to the Spotify OAuth page.
- **YouTube Music Login Button**: Redirects the user to the YouTube Music OAuth page.
- **Playlist Display**: After login, it shows playlists from both platforms.
- **Sync Playlists**: Allows users to sync playlists between Spotify and YouTube Music.

### **Backend**
The backend is built with **Node.js** and **Express**, and it:
- Handles OAuth2 authentication for Spotify and YouTube Music.
- Fetches playlists from both services.
- Handles playlist syncing across both platforms.

### **How the Sync Process Works**
1. The user logs into both platforms using OAuth.
2. The backend fetches playlists from both Spotify and YouTube Music using the authenticated tokens.
3. The user selects playlists to sync, and the backend synchronizes the playlists across platforms.

## How to Run the App

1. **Clone the repository**:
   ```
   git clone https://github.com/mecster09/task-list.git
   cd task-list```

### **Backend Setup (Node.js/Express)**

1. **Install Backend Dependencies**:   
    ```
    cd backend
    npm install

2. **Set Up Environment Variables**: 
SPOTIFY_CLIENT_ID=your_spotify_client_id
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
SPOTIFY_REDIRECT_URI=http://localhost:4000/spotify/callback

YOUTUBE_CLIENT_ID=your_youtube_client_id
YOUTUBE_CLIENT_SECRET=your_youtube_client_secret
YOUTUBE_REDIRECT_URI=http://localhost:4000/youtube/callback

3. **Run the Backend**: 
    ```
    npm run dev

### **BacFrontendkend Setup (Next.js)**

1. **Install Frontend Dependencies**:   
    ```
    cd frontend
    npm install

2. **Run the Backend**: 
    ```
    npm run dev