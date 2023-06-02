# daf-test
Test technique (node, express, mongo) pour le poste de développeur fullstack chez DAF Conseil.

Voir `./gistfile.js` pour les instructions du test

Le projet est séparé en deux dossiers : "front" et "back"

## dossier back

Serveur express en nodejs et typescript. Il expose une route /subscriptions accessible en GET. Toutes les autres requêtes seront gérées en redirection vers subscriptions. 

Le serveur se connecte à une base de données mongodb. Les variables de connecion (hostname, port) sont définies dans un dossier d'environnement à la racine du projet.

Pour démarrer le serveur node : 

```bash
# depuis la racine du projet
cd back
cp .env.example .env # adapter le contenu si besoin
npm install
npm run build
npm run start
```

Le serveur devrait confirmer la connexion à la base de données et donner l'url de la route pour la requête

## dossier front

Projet statique en single page avec Vite + typescript. Adapté depuis le template de démarrage de projet.

pour démarrer le serveur local de front : 

```bash
# depuis la racine du projet
cd front
cp .env.example .env # adapter le contenu si besoin pour correspondre au fichier env du serveur de back
npm install
npm run dev
```

Vite démarre le serveur local et fournit l'url de la page.

## données

Il y a un export mongodb pour importer facilement les données sur le mongo de la machine de test. Le fichier se trouve sous
`back/data/subscriptions.json` 

## documentations

Les documentations consultées : 

- typescript: https://www.typescriptlang.org/docs/handbook/intro.html
- mongodb: https://www.mongodb.com/docs/manual/
- mongoose: https://mongoosejs.com/docs/
- express: https://expressjs.com/
- vite: https://vitejs.dev/guide/
