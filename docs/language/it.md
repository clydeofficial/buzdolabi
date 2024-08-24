# Buzdolabi

**Buzdolabi** è un potente modulo npm progettato per la gestione avanzata dei dati. Consente di archiviare, manipolare e persistere i dati in modo efficiente. Il modulo supporta operazioni come l'impostazione, l'ottenimento e l'eliminazione dei dati, il lavoro con strutture di dati complesse, e il salvataggio/caricamento dei dati da e verso file JSON o un database SQLite.

## Installazione

Installa il modulo tramite npm:

```bash
npm install buzdolabi
```

## Utilizzo

Ecco un esempio di come usare **Buzdolabi** nel tuo progetto:

### Importare il Modulo

```javascript
const ayran = require('buzdolabi');
```

### Impostare e Ottenere Dati

```javascript
// Impostare un valore
ayran.set('user.name', 'John Doe');

// Ottenere un valore
const userName = ayran.get('user.name');
console.log(userName); // Risultati: John Doe
```

### Salvare e Caricare Dati

#### Salvare su un File JSON

```javascript
// Salva l'archiviazione corrente in un file JSON
ayran.saveToFile('storage.json');

// Carica i dati da un file JSON
ayran.loadFromFile('storage.json');
```

#### Lavorare con SQLite

```javascript
// Connettersi a un database SQLite
ayran.connectSQLite('storage.db');

// Salvare i dati in un database SQLite
ayran.saveToSQLite('data_table');

// Caricare i dati da un database SQLite
ayran.loadFromSQLite('data_table');
```

### Lavorare con Array

#### Aggiungere e Ottenere Elementi

```javascript
// Aggiungi un elemento a un array
ayran.push('shoppingList', 'Mele');

// Ottieni l'array
const shoppingList = ayran.get('shoppingList');
console.log(shoppingList); // Risultati: ['Mele']
```

### Operazioni Avanzate

#### Mappatura sugli Array

```javascript
// Supponiamo di avere un array di numeri
ayran.set('numbers', [1, 2, 3, 4]);

// Usa la funzione map per raddoppiare i numeri
ayran.map('numbers', num => num * 2);

// Ottieni l'array aggiornato
const updatedNumbers = ayran.get('numbers');
console.log(updatedNumbers); // Risultati: [2, 4, 6, 8]
```

## Localizzazione

**Buzdolabi** supporta più lingue per i messaggi di errore. Puoi impostare la lingua come segue:

```javascript
ayran.setLanguage('es'); // Imposta su spagnolo
```

Lingue supportate:
- Inglese (`en`)
- Spagnolo (`es`)
- Francese (`fr`)
- Italiano (`it`)
- Portoghese (`pt`)
- Turco (`tr`)
- Tedesco (`de`)