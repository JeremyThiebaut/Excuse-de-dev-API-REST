const express = require("express");
const router = require("./app/router");
const cors = require("cors");

const PORT = process.env.PORT || 3001;

const app = express();

const corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));

// Utilisation du router pour les routes
app.use(router);

// Démarrage du serveur sur le port spécifié ou 3001 par défaut
app.listen(PORT, () => {
  console.log(`Listening on ${PORT} ...`);
});
