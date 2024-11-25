import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import spotifyRoutes from './routes/spotify';
import youtubeRoutes from './routes/youtube';

dotenv.config(); // Load environment variables from .env

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/spotify', spotifyRoutes);
app.use('/youtube', youtubeRoutes);

// Routes
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
