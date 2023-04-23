const express = require("express"); // Importation du module express pour la création de route
const excusesController = require("./controllers/excusesControllers"); // Importation du contrôleur qui gère les excuses
const router = express.Router(); // Création du routeur express

router.get("/excuses", excusesController.getExcuses); // Création de la route GET "/excuses" qui permet de récupérer toutes les excuses
router.post("/excuses", excusesController.addExcuse); // Création de la route POST "/excuses" qui permet d'ajouter une nouvelle excuse

module.exports = router; // Exportation du routeur pour pouvoir l'utiliser dans l'application
