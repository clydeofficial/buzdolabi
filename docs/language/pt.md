# Buzdolabi

**Buzdolabi** é um poderoso módulo npm projetado para gerenciamento avançado de dados. Ele permite armazenar, manipular e persistir dados de maneira eficiente. O módulo suporta operações como definir, obter e excluir dados, trabalhar com estruturas de dados complexas e salvar/carregar dados para e de arquivos JSON ou um banco de dados SQLite.

## Instalação

Instale o módulo via npm:

```bash
npm install buzdolabi
```

## Uso

Aqui está um exemplo de como usar **Buzdolabi** no seu projeto:

### Importando o Módulo

```javascript
const ayran = require('buzdolabi');
```

### Definindo e Obtendo Dados

```javascript
// Defina um valor
ayran.set('user.name', 'John Doe');

// Obtenha um valor
const userName = ayran.get('user.name');
console.log(userName); // Resultados: John Doe
```

### Salvando e Carregando Dados

#### Salvando em um Arquivo JSON

```javascript
// Salve o armazenamento atual em um arquivo JSON
ayran.saveToFile('storage.json');

// Carregue dados de um arquivo JSON
ayran.loadFromFile('storage.json');
```

#### Trabalhando com SQLite

```javascript
// Conecte-se a um banco de dados SQLite
ayran.connectSQLite('storage.db');

// Salve dados em um banco de dados SQLite
ayran.saveToSQLite('data_table');

// Carregue dados de um banco de dados SQLite
ayran.loadFromSQLite('data_table');
```

### Trabalhando com Arrays

#### Adicionar e Obter Elementos

```javascript
// Adicione um item a um array
ayran.push('shoppingList', 'Maçãs');

// Obtenha o array
const shoppingList = ayran.get('shoppingList');
console.log(shoppingList); // Resultados: ['Maçãs']
```

### Operações Avançadas

#### Mapeamento sobre Arrays

```javascript
// Suponha que você tenha um array de números
ayran.set('numbers', [1, 2, 3, 4]);

// Use a função map para dobrar os números
ayran.map('numbers', num => num * 2);

// Obtenha o array atualizado
const updatedNumbers = ayran.get('numbers');
console.log(updatedNumbers); // Resultados: [2, 4, 6, 8]
```

## Localização

**Buzdolabi** suporta vários idiomas para mensagens de erro. Você pode definir o idioma da seguinte maneira:

```javascript
ayran.setLanguage('es'); // Defina para espanhol
```

Idiomas suportados:
- Inglês (`en`)
- Espanhol (`es`)
- Francês (`fr`)
- Italiano (`it`)
- Português (`pt`)
- Turco (`tr`)
- Alemão (`de`)