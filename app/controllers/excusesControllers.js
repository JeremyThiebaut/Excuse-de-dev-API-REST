const fs = require("fs");
const path = require("path");

const excusesController = {
  // Route pour récupérer toutes les excuses dans le fichier JSON
  getExcuses: (req, res) => {
    // Chemin d'accès au fichier JSON
    const filePath = path.join(__dirname, "../..", "excuses.json");
    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) {
        console.log(err);
        // Erreur lors de la lecture du fichier
        return res.status(500).json({ message: "Failed to read file" });
      }
      const excuses = JSON.parse(data);
      // Envoi des excuses en format JSON
      res.status(200).json({ excuses });
    });
  },

  // Route pour ajouter une excuse dans le fichier JSON
  addExcuse: (req, res) => {

    const { http_code, tag, message } = req.body;
    const newExcuse = { http_code, tag, message };

    // Chemin d'accès au fichier JSON
    const filePath = path.join(__dirname, "../..", "excuses.json");
    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) {
        console.log(err);
        // Erreur lors de la lecture du fichier
        return res.status(500).json({ message: "Failed to read file" });
      }
      const excuses = JSON.parse(data);
      excuses.push(newExcuse);
      fs.writeFile(filePath, JSON.stringify(excuses), (err) => {
        if (err) {
          console.log(err);
          // Erreur lors de l'écriture dans le fichier
          return res.status(500).json({ message: "Failed to read file" });
        }
        // Envoi d'une réponse de succès avec la nouvelle excuse ajoutée
        res.status(201).json({ message: "Excuse added", excuse: newExcuse });
      });
    });
  },
};

module.exports = excusesController;
