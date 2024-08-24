# Buzdolabi

**Buzdolabi**, gelişmiş veri yönetimi için tasarlanmış güçlü bir npm modülüdür. Verilerinizi verimli bir şekilde saklamanızı, manipüle etmenizi ve kalıcı hale getirmenizi sağlar. Modül, verilerin ayarlanması, alınması ve silinmesi, karmaşık veri yapılarıyla çalışma, ve verilerin JSON dosyalarına veya bir SQLite veritabanına kaydedilip yüklenmesi gibi işlemleri destekler.

## Kurulum

Modülü npm aracılığıyla yükleyin:

```bash
npm install buzdolabi
```

## Kullanım

**Buzdolabi** modülünü projenizde nasıl kullanabileceğinize dair bir örnek:

### Modülün İçe Aktarılması

```javascript
const ayran = require('buzdolabi');
```

### Veri Ayarlama ve Alma

```javascript
// Bir değer ayarlayın
ayran.set('user.name', 'John Doe');

// Bir değer alın
const userName = ayran.get('user.name');
console.log(userName); // Çıktı: John Doe
```

### Verileri Kaydetme ve Yükleme

#### JSON Dosyasına Kaydetme

```javascript
// Mevcut verileri bir JSON dosyasına kaydedin
ayran.saveToFile('storage.json');

// Bir JSON dosyasından veri yükleyin
ayran.loadFromFile('storage.json');
```

#### SQLite ile Çalışma

```javascript
// Bir SQLite veritabanına bağlanın
ayran.connectSQLite('storage.db');

// Verileri bir SQLite veritabanına kaydedin
ayran.saveToSQLite('data_table');

// Verileri bir SQLite veritabanından yükleyin
ayran.loadFromSQLite('data_table');
```

### Dizilerle Çalışma

#### Elemanları Dizine Ekleme ve Alma

```javascript
// Bir öğeyi diziye ekleyin
ayran.push('shoppingList', 'Elma');

// Diziyi alın
const shoppingList = ayran.get('shoppingList');
console.log(shoppingList); // Çıktı: ['Elma']
```

### Gelişmiş İşlemler

#### Diziler Üzerinde Map İşlemi

```javascript
// Bir dizi sayı ayarlayın
ayran.set('numbers', [1, 2, 3, 4]);

// Map fonksiyonu ile sayıları iki katına çıkarın
ayran.map('numbers', num => num * 2);

// Güncellenmiş diziyi alın
const updatedNumbers = ayran.get('numbers');
console.log(updatedNumbers); // Çıktı: [2, 4, 6, 8]
```

## Yerelleştirme

**Buzdolabi**, hata mesajları için birden fazla dili destekler. Dili şu şekilde ayarlayabilirsiniz:

```javascript
ayran.setLanguage('es'); // İspanyolca olarak ayarlayın
```

Desteklenen diller:
- İngilizce (`en`)
- İspanyolca (`es`)
- Fransızca (`fr`)
- İtalyanca (`it`)
- Portekizce (`pt`)
- Türkçe (`tr`)
- Almanca (`de`)