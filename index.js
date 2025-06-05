const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/api/pxp', async (req, res) => {
  try {
    const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=pointpay');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Fout bij ophalen van gegevens:', error);
    res.status(500).json({ error: 'Kan gegevens niet ophalen' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Proxyserver draait op poort ${PORT}`);
});