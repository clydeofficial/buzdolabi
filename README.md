# Buzdolabi

**Buzdolabi** is a powerful npm module designed for advanced data management. It allows you to store, manipulate, and persist data efficiently. The module supports operations such as setting, getting, and deleting data, working with complex data structures, and saving/loading data to and from JSON files or an SQLite database.

## Installation

Install the module via npm:

```bash
npm install buzdolabi
```

## Usage

Here’s an example of how to use **Buzdolabi** in your project:

### Importing the Module

```javascript
const ayran = require('buzdolabi');
```

### Setting and Getting Data

```javascript
// Set a value
ayran.set('user.name', 'John Doe');

// Get a value
const userName = ayran.get('user.name');
console.log(userName); // Outputs: John Doe
```

### Saving and Loading Data

#### Saving to a JSON File

```javascript
// Save the current storage to a JSON file
ayran.saveToFile('storage.json');

// Load data from a JSON file
ayran.loadFromFile('storage.json');
```

#### Working with SQLite

```javascript
// Connect to an SQLite database
ayran.connectSQLite('storage.db');

// Save data to an SQLite database
ayran.saveToSQLite('data_table');

// Load data from an SQLite database
ayran.loadFromSQLite('data_table');
```

### Working with Arrays

#### Push and Get Elements

```javascript
// Push an item to an array
ayran.push('shoppingList', 'Apples');

// Get the array
const shoppingList = ayran.get('shoppingList');
console.log(shoppingList); // Outputs: ['Apples']
```

### Advanced Operations

#### Mapping over Arrays

```javascript
// Assume you have an array of numbers
ayran.set('numbers', [1, 2, 3, 4]);

// Use the map function to double the numbers
ayran.map('numbers', num => num * 2);

// Get the updated array
const updatedNumbers = ayran.get('numbers');
console.log(updatedNumbers); // Outputs: [2, 4, 6, 8]
```

## Localization

**Buzdolabi** supports multiple languages for error messages. You can set the language as follows:

```javascript
ayran.setLanguage('es'); // Set to Spanish
```

Supported languages:
- English (`en`)
- Spanish (`es`)
- French (`fr`)
- Italian (`it`)
- Portuguese (`pt`)
- Turkish (`tr`)
- German (`de`)