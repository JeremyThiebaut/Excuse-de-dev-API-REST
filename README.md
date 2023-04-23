### Serveur Node / Express - API REST

## Introduction

Ce projet est un serveur Node.js utilisant le framework Express pour créer une API REST qui permet de gérer une liste d'excuses stockées dans un fichier JSON.

## Installation

1. Clonez le dépôt Git sur votre ordinateur.
2. Accédez au dossier racine de l'application dans votre terminal.
3. Exécutez la commande suivante pour installer les dépendances :

```bash
npm install
```

## Utilisation

1. Dans votre terminal, accédez au dossier racine de l'application.
2. Exécutez la commande suivante pour lancer le serveur :

```bash
npm run dev
```

## Fonctionnalités

Le serveur expose deux routes :

1. `GET /excuses` : retourne toutes les excuses stockées dans le fichier JSON.
2. `POST /excuses` : permet d'ajouter une nouvelle excuse dans le fichier JSON.

Les données envoyées ou retournées sont au format JSON.

## Structure du projet

Le projet est structuré en plusieurs fichiers :

1. `index.js` : fichier principal qui crée le serveur Express, définit les routes et lance le serveur.
2. `excuses.json` : fichier qui contient la liste des excuses sous forme d'un tableau d'objets JSON.
3. `app/router.js` : fichier qui définit les routes exposées par le serveur.
4. `app/controllers/excusesControllers.js` : fichier qui contient la logique de gestion des excuses.

## Conclusion

Ce projet est une démonstration de la création d'une API REST avec Node.js et Express. Il permet de comprendre comment créer des routes, gérer les requêtes HTTP et accéder à des fichiers pour stocker des données.
