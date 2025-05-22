import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
app.use(cors()); // Permite requisições do frontend

const url = "https://economia.awesomeapi.com.br/last/USD-BRL,USD-EUR,USD-GBP,EUR-BRL,EUR-USD,EUR-GBP,GBP-BRL,GBP-USD,GBP-EUR,BRL-USD,BRL-EUR,BRL-GBP";

app.get('/api/cotacoes', async (req, res) => {
  try {
    const resposta = await axios.get(url);
    const dados = resposta.data;

    res.json({
      BRLUSD: dados.BRLUSD.bid,
      BRLEUR: dados.BRLEUR.bid,
      BRLGBP: dados.BRLGBP.bid,
      USDBRL: dados.USDBRL.bid,
      USDEUR: dados.USDEUR.bid,
      USDGBP: dados.USDGBP.bid,
      EURBRL: dados.EURBRL.bid,
      EURUSD: dados.EURUSD.bid,
      EURGBP: dados.EURGBP.bid,
      GBPBRL: dados.GBPBRL.bid,
      GBPUSD: dados.GBPUSD.bid,
      GBPEUR: dados.GBPEUR.bid
    });
  } catch (error) {
    res.status(500).json({ erro: "Erro ao buscar cotações." });
  }
});

app.listen(3000, () => {
  console.log("API rodando em http://localhost:3000");
});
