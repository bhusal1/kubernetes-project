const express = require('express');
const app = express();

app.get('/api/cart', (req, res) => {
    res.json({ message: 'Once again hello from CART Service again' })
})

app.listen(3001, () => console.log('listening on port 3001'));


