# Buzdolabi

**Buzdolabi** es un poderoso módulo npm diseñado para la gestión avanzada de datos. Permite almacenar, manipular y persistir datos de manera eficiente. El módulo admite operaciones como establecer, obtener y eliminar datos, trabajar con estructuras de datos complejas, y guardar/cargar datos desde y hacia archivos JSON o una base de datos SQLite.

## Instalación

Instale el módulo a través de npm:

```bash
npm install buzdolabi
```

## Uso

Aquí hay un ejemplo de cómo usar **Buzdolabi** en su proyecto:

### Importar el Módulo

```javascript
const ayran = require('buzdolabi');
```

### Establecer y Obtener Datos

```javascript
// Establecer un valor
ayran.set('user.name', 'John Doe');

// Obtener un valor
const userName = ayran.get('user.name');
console.log(userName); // Resultados: John Doe
```

### Guardar y Cargar Datos

#### Guardar en un Archivo JSON

```javascript
// Guardar el almacenamiento actual en un archivo JSON
ayran.saveToFile('storage.json');

// Cargar datos desde un archivo JSON
ayran.loadFromFile('storage.json');
```

#### Trabajar con SQLite

```javascript
// Conectar a una base de datos SQLite
ayran.connectSQLite('storage.db');

// Guardar datos en una base de datos SQLite
ayran.saveToSQLite('data_table');

// Cargar datos desde una base de datos SQLite
ayran.loadFromSQLite('data_table');
```

### Trabajar con Arrays

#### Añadir y Obtener Elementos

```javascript
// Añadir un elemento a un array
ayran.push('shoppingList', 'Manzanas');

// Obtener el array
const shoppingList = ayran.get('shoppingList');
console.log(shoppingList); // Resultados: ['Manzanas']
```

### Operaciones Avanzadas

#### Mapear sobre Arrays

```javascript
// Asuma que tiene un array de números
ayran.set('numbers', [1, 2, 3, 4]);

// Utilice la función map para duplicar los números
ayran.map('numbers', num => num * 2);

// Obtener el array actualizado
const updatedNumbers = ayran.get('numbers');
console.log(updatedNumbers); // Resultados: [2, 4, 6, 8]
```

## Localización

**Buzdolabi** admite múltiples idiomas para los mensajes de error. Puede establecer el idioma de la siguiente manera:

```javascript
ayran.setLanguage('es'); // Establecer en español
```

Idiomas admitidos:
- Inglés (`en`)
- Español (`es`)
- Francés (`fr`)
- Italiano (`it`)
- Portugués (`pt`)
- Turco (`tr`)
- Alemán (`de`)