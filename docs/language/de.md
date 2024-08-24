# Buzdolabi

**Buzdolabi** ist ein leistungsstarkes npm-Modul, das für fortschrittliches Datenmanagement entwickelt wurde. Es ermöglicht das effiziente Speichern, Manipulieren und Persistieren von Daten. Das Modul unterstützt Operationen wie das Setzen, Abrufen und Löschen von Daten, das Arbeiten mit komplexen Datenstrukturen und das Speichern/Laden von Daten in und aus JSON-Dateien oder einer SQLite-Datenbank.

## Installation

Installieren Sie das Modul über npm:

```bash
npm install buzdolabi
```

## Verwendung

Hier ist ein Beispiel dafür, wie Sie **Buzdolabi** in Ihrem Projekt verwenden können:

### Importieren des Moduls

```javascript
const ayran = require('buzdolabi');
```

### Setzen und Abrufen von Daten

```javascript
// Einen Wert setzen
ayran.set('user.name', 'John Doe');

// Einen Wert abrufen
const userName = ayran.get('user.name');
console.log(userName); // Ausgabe: John Doe
```

### Speichern und Laden von Daten

#### Speichern in einer JSON-Datei

```javascript
// Speichern Sie den aktuellen Speicher in einer JSON-Datei
ayran.saveToFile('storage.json');

// Laden Sie Daten aus einer JSON-Datei
ayran.loadFromFile('storage.json');
```

#### Arbeiten mit SQLite

```javascript
// Verbinden Sie sich mit einer SQLite-Datenbank
ayran.connectSQLite('storage.db');

// Speichern Sie Daten in einer SQLite-Datenbank
ayran.saveToSQLite('data_table');

// Laden Sie Daten aus einer SQLite-Datenbank
ayran.loadFromSQLite('data_table');
```

### Arbeiten mit Arrays

#### Hinzufügen und Abrufen von Elementen

```javascript
// Ein Element zu einem Array hinzufügen
ayran.push('shoppingList', 'Äpfel');

// Das Array abrufen
const shoppingList = ayran.get('shoppingList');
console.log(shoppingList); // Ausgabe: ['Äpfel']
```

### Erweiterte Operationen

#### Mapping über Arrays

```javascript
// Nehmen wir an, Sie haben ein Array von Zahlen
ayran.set('numbers', [1, 2, 3, 4]);

// Verwenden Sie die map-Funktion, um die Zahlen zu verdoppeln
ayran.map('numbers', num => num * 2);

// Das aktualisierte Array abrufen
const updatedNumbers = ayran.get('numbers');
console.log(updatedNumbers); // Ausgabe: [2, 4, 6, 8]
```

## Lokalisierung

**Buzdolabi** unterstützt mehrere Sprachen für Fehlermeldungen. Sie können die Sprache wie folgt einstellen:

```javascript
ayran.setLanguage('es'); // Auf Spanisch einstellen
```

Unterstützte Sprachen:
- Englisch (`en`)
- Spanisch (`es`)
- Französisch (`fr`)
- Italienisch (`it`)
- Portugiesisch (`pt`)
- Türkisch (`tr`)
- Deutsch (`de`)