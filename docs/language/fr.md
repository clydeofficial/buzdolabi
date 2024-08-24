# Buzdolabi

**Buzdolabi** est un module npm puissant conçu pour la gestion avancée des données. Il permet de stocker, manipuler et persister des données de manière efficace. Le module prend en charge des opérations telles que la définition, la récupération et la suppression de données, le travail avec des structures de données complexes, et la sauvegarde/le chargement de données dans des fichiers JSON ou une base de données SQLite.

## Installation

Installez le module via npm :

```bash
npm install buzdolabi
```

## Utilisation

Voici un exemple de l'utilisation de **Buzdolabi** dans votre projet :

### Importation du Module

```javascript
const ayran = require('buzdolabi');
```

### Définir et Récupérer des Données

```javascript
// Définir une valeur
ayran.set('user.name', 'John Doe');

// Récupérer une valeur
const userName = ayran.get('user.name');
console.log(userName); // Résultats : John Doe
```

### Sauvegarde et Chargement de Données

#### Sauvegarder dans un Fichier JSON

```javascript
// Sauvegarder le stockage actuel dans un fichier JSON
ayran.saveToFile('storage.json');

// Charger des données à partir d'un fichier JSON
ayran.loadFromFile('storage.json');
```

#### Travailler avec SQLite

```javascript
// Connecter à une base de données SQLite
ayran.connectSQLite('storage.db');

// Sauvegarder des données dans une base de données SQLite
ayran.saveToSQLite('data_table');

// Charger des données à partir d'une base de données SQLite
ayran.loadFromSQLite('data_table');
```

### Travailler avec des Tableaux

#### Ajouter et Récupérer des Éléments

```javascript
// Ajouter un élément à un tableau
ayran.push('shoppingList', 'Pommes');

// Récupérer le tableau
const shoppingList = ayran.get('shoppingList');
console.log(shoppingList); // Résultats : ['Pommes']
```

### Opérations Avancées

#### Mappage sur des Tableaux

```javascript
// Supposons que vous ayez un tableau de nombres
ayran.set('numbers', [1, 2, 3, 4]);

// Utilisez la fonction map pour doubler les nombres
ayran.map('numbers', num => num * 2);

// Récupérer le tableau mis à jour
const updatedNumbers = ayran.get('numbers');
console.log(updatedNumbers); // Résultats : [2, 4, 6, 8]
```

## Localisation

**Buzdolabi** prend en charge plusieurs langues pour les messages d'erreur. Vous pouvez définir la langue comme suit :

```javascript
ayran.setLanguage('es'); // Définir en espagnol
```

Langues prises en charge :
- Anglais (`en`)
- Espagnol (`es`)
- Français (`fr`)
- Italien (`it`)
- Portugais (`pt`)
- Turc (`tr`)
- Allemand (`de`)