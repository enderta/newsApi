const express = require('express');


const app = express();
const port = process.env.PORT || 3002; 

app.get('/news', async (req, res) => {
    try {
        const response = await fetch('https://newsapi.org/v2/top-headlines?category=technology&language=en&apiKey=895b50e9e60744729f4308b9e8ff9aae');
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'An error occurred' });
    }
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});