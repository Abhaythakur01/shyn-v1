const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const helmet = require('helmet');

// Load environment variables from the .env file
dotenv.config();

// --- Middleware Imports ---
const { errorHandler } = require('./middleware/errorHandler');

// --- Route Imports ---
const authRoutes = require('./routes/authRoutes');
const artFormRoutes = require('./routes/artFormRoutes');
const blogRoutes = require('./routes/blogRoutes');
const portfolioRoutes = require('./routes/portfolioRoutes');
const eventRoutes = require('./routes/eventRoutes');

const app = express();

// --- Core Middleware ---

// Enable CORS (Cross-Origin Resource Sharing) for all routes
app.use(cors());

// Set various security HTTP headers
app.use(helmet());

// Body parser middleware to accept and parse JSON in request bodies
app.use(express.json());


// --- Route Middlewares ---

// All routes defined in authRoutes will be prefixed with /api/user
app.use('/api/user', authRoutes);
// All routes defined in artFormRoutes will be prefixed with /api/art-forms
app.use('/api/art-forms', artFormRoutes);
// All routes for blogs
app.use('/api/blogs', blogRoutes);
// All routes for the portfolio
app.use('/api/portfolio', portfolioRoutes);
// All routes for events
app.use('/api/events', eventRoutes);


// A simple test route to confirm the server is working
app.get('/', (req, res) => {
    res.send('🎉 SHYN Backend is running!');
});

// --- Centralized Error Handler ---
// This MUST be the last middleware to catch all errors from the routes above
app.use(errorHandler);


const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`🚀 Server is listening on port ${PORT}`);
});