const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

let fetch;

// Import node-fetch dynamically
import('node-fetch').then(module => {
    fetch = module.default;
});

app.use(cors());
app.use(express.json());

app.get('/api/websitecarbon', async (req, res) => {
    if (!fetch) {
        return res.status(500).json({ error: 'Server initialization in progress' });
    }
    const apiUrl = 'https://api.websitecarbon.com/site?url=';
    const siteEndpoint = req.query.url;
    const fullUrl = `${apiUrl}${siteEndpoint}`;

    try {
        const response = await fetch(fullUrl);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
