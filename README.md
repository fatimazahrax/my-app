# La Maison Jungle 🌿

**La Maison Jungle** est une application web e-commerce développée avec React, permettant de découvrir et d'acheter des plantes d'intérieur (plantes classiques, succulentes, aromatiques...).

## Fonctionnalités

- Affichage d'un catalogue de plantes avec photo, prix et indicateurs de besoins (lumière, eau)
- Filtrage des plantes par catégorie
- Ajout au panier et gestion des quantités
- Sauvegarde automatique du panier dans le navigateur (localStorage)

## Stack technique

- React 18 (Create React App)
- CSS

## Installation

```bash
npm install
```

## Lancement

```bash
npm start
```

L'application est accessible sur http://localhost:3000.

## Build de production

```bash
npm run build
```

## Structure du projet

```
src/
├── components/   # Composants React (App, Banner, Cart, ShoppingList, PlantItem, Categories, Footer, CareScale)
├── datas/         # Données des plantes (plantList.js)
├── assets/        # Images et icônes
└── styles/        # Fichiers CSS
```
