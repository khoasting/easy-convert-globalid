const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static('.'));

// CORS middleware for cross-origin requests
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Root route - serve the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// API endpoint to convert from global ID
app.get('/api/from-global-id/:globalId', (req, res) => {
    try {
        const { globalId } = req.params;
        const decoded = Buffer.from(globalId, 'base64').toString('utf-8');
        const colonIndex = decoded.indexOf(':');
        
        if (colonIndex === -1) {
            return res.status(400).json({ error: 'Invalid global ID format' });
        }
        
        const result = {
            type: decoded.substring(0, colonIndex),
            id: decoded.substring(colonIndex + 1)
        };
        
        res.json(result);
    } catch (error) {
        res.status(400).json({ error: 'Invalid base64 encoding' });
    }
});

// API endpoint to convert to global ID
app.get('/api/to-global-id/:type/:id', (req, res) => {
    try {
        const { type, id } = req.params;
        const globalId = Buffer.from(`${type}:${id}`).toString('base64');
        res.json({ globalId });
    } catch (error) {
        res.status(400).json({ error: 'Invalid input' });
    }
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
    console.log(`📱 Open http://localhost:${PORT} in your browser`);
    console.log(`🔗 API endpoints:`);
    console.log(`   GET /api/from-global-id/:globalId`);
    console.log(`   GET /api/to-global-id/:type/:id`);
    console.log(`   GET /health`);
});
