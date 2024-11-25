
# task-list
### **`Project.md`**

This file will include **Tech Stack**, **Features & Approach** of the project.

```markdown
# Spotify and YouTube Music Playlist Sync

## Tech Stack

- **Frontend**:
  - **Next.js**: React framework for building the frontend application.
  - **React**: JavaScript library for building user interfaces.
  - **Tailwind CSS**: Utility-first CSS framework for designing the UI.
  - **React Icons**: Set of customizable icons for the app’s UI.

- **Backend**:
  - **Node.js**: JavaScript runtime used for the backend server.
  - **Express**: Web framework for building REST APIs with Node.js.
  - **Axios**: HTTP client for making requests to Spotify and YouTube Music APIs.
  - **Spotify API**: For authenticating and interacting with Spotify's platform.
  - **YouTube Music API**: For authenticating and interacting with YouTube Music's platform.

- **Authentication**:
  - **OAuth 2.0**: Used for authentication with both Spotify and YouTube Music.

- **Other Tools**:
  - **dotenv**: For managing environment variables.
  - **TypeScript**: Provides static type checking for JavaScript.
  
## Features & Approach

- **Frontend Features**:
  - **User Authentication**: Users can log in to their **Spotify** and **YouTube Music** accounts via OAuth.
  - **Playlist Display**: Displays playlists from both Spotify and YouTube Music after login.
  - **Playlist Sync**: Users can select playlists to sync between the two platforms, keeping playlist names intact.

- **Backend Features**:
  - **Authentication Flow**: Handles OAuth authentication for both Spotify and YouTube Music.
  - **API Integration**: Fetches playlists from Spotify and YouTube Music via their respective APIs.
  - **Sync Playlists**: Transfers playlists from one platform to another while ensuring consistency in playlist names.

### Approach

- **OAuth Authentication**: The app uses OAuth2 for secure login. After logging in, the backend stores the **access tokens** and **refresh tokens** for accessing the user's playlists.
  
- **Frontend Development**: A minimal, iOS-like interface is created using **Tailwind CSS** for responsiveness and styling.
  
- **Backend API**: The backend is responsible for handling all the data fetching and syncing, communicating with Spotify and YouTube Music APIs.

- **State Management**: The frontend uses **React’s useState** and **useEffect** hooks to manage the state of the authentication process and playlists.

---

## License

This project is licensed under the MIT License.
