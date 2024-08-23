const fs = require("fs");
const path = require("path");
const sqlite3 = require("sqlite3").verbose();

class Buzdolabi {
  constructor() {
    this._storage = {};
    this.setLanguage("en");
    this.db = null;
  }

  async getLatestVersion() {
    try {
      const response = await fetch(
        "https://registry.npmjs.org/buzdolabi/latest"
      );
      const data = await response.json();
      return data.version;
    } catch (err) {
      console.error(this._language.ERROR_FETCHING_VERSION);
    }
  }

  loadLanguage(lang) {
    const filePath = path.join(__dirname, "language", `${lang}.json`);
    if (fs.existsSync(filePath)) {
      return JSON.parse(fs.readFileSync(filePath, "utf-8"));
    } else {
      console.warn(
        `Language file for '${lang}' not found. Falling back to English.`
      );
      return this.loadLanguage("en");
    }
  }

  setLanguage(lang) {
    this._language = this.loadLanguage(lang);
  }

  set(path, value) {
    const keys = path.split(".");
    let current = this._storage;

    keys.forEach((key, index) => {
      if (index === keys.length - 1) {
        current[key] = value;
      } else {
        if (!current[key]) current[key] = {};
        current = current[key];
      }
    });
  }

  get(path) {
    const keys = path.split(".");
    let current = this._storage;

    for (let key of keys) {
      if (current[key] === undefined) return undefined;
      current = current[key];
    }

    return current;
  }

  fetch(path) {
    return this.get(path);
  }

  all() {
    return this._storage;
  }

  push(path, value) {
    let array = this.get(path);
    if (!Array.isArray(array)) {
      array = [];
      this.set(path, array);
    }
    array.push(value);
    return array;
  }

  unpush(path, value) {
    let array = this.get(path);
    if (Array.isArray(array)) {
      this.set(
        path,
        array.filter((item) => item !== value)
      );
      return this.get(path);
    }
    return [];
  }

  delByPriority(path, index) {
    let array = this.get(path);
    if (Array.isArray(array) && index >= 0 && index < array.length) {
      array.splice(index, 1);
      this.set(path, array);
      return array;
    }
    throw new Error(this._language.ERROR_INDEX_OUT_OF_BOUNDS);
  }

  setByPriority(path, value, index) {
    let array = this.get(path);
    if (Array.isArray(array) && index >= 0 && index < array.length) {
      array[index] = value;
      this.set(path, array);
      return array;
    }
    throw new Error(this._language.ERROR_INDEX_OUT_OF_BOUNDS);
  }

  has(path) {
    return this.get(path) !== undefined;
  }

  delete(path) {
    const keys = path.split(".");
    let current = this._storage;

    for (let i = 0; i < keys.length - 1; i++) {
      if (!current[keys[i]])
        throw new Error(this._language.ERROR_PATH_NOT_FOUND);
      current = current[keys[i]];
    }

    delete current[keys[keys.length - 1]];
    return this._language.SUCCESS_DELETE;
  }

  deleteAll() {
    this._storage = {};
    return this._language.SUCCESS_CLEAR;
  }

  clear() {
    this._storage = {};
  }

  keys() {
    return Object.keys(this._storage);
  }

  increment(path, amount = 1) {
    let value = this.get(path);
    if (typeof value === "number") {
      value += amount;
      this.set(path, value);
      return value;
    }
    throw new Error(this._language.ERROR_NOT_A_NUMBER);
  }

  decrement(path, amount = 1) {
    let value = this.get(path);
    if (typeof value === "number") {
      value -= amount;
      this.set(path, value);
      return value;
    }
    throw new Error(this._language.ERROR_NOT_A_NUMBER);
  }

  merge(path, obj) {
    let current = this.get(path);
    if (typeof current === "object" && !Array.isArray(current)) {
      this.set(path, { ...current, ...obj });
      return this.get(path);
    }
    throw new Error(this._language.ERROR_NOT_AN_OBJECT);
  }

  find(path, predicate) {
    let array = this.get(path);
    if (Array.isArray(array)) {
      return array.find(predicate);
    }
    throw new Error(this._language.ERROR_NOT_AN_ARRAY);
  }

  sort(path, comparator) {
    let array = this.get(path);
    if (Array.isArray(array)) {
      array.sort(comparator);
      this.set(path, array);
      return array;
    }
    throw new Error(this._language.ERROR_NOT_AN_ARRAY);
  }

  reverse(path) {
    let array = this.get(path);
    if (Array.isArray(array)) {
      array.reverse();
      this.set(path, array);
      return array;
    }
    throw new Error(this._language.ERROR_NOT_AN_ARRAY);
  }

  map(path, callback) {
    let array = this.get(path);
    if (Array.isArray(array)) {
      const result = array.map(callback);
      this.set(path, result);
      return result;
    }
    throw new Error(this._language.ERROR_NOT_AN_ARRAY);
  }

  filter(path, predicate) {
    let array = this.get(path);
    if (Array.isArray(array)) {
      const result = array.filter(predicate);
      this.set(path, result);
      return result;
    }
    throw new Error(this._language.ERROR_NOT_AN_ARRAY);
  }

  reduce(path, reducer, initialValue) {
    let array = this.get(path);
    if (Array.isArray(array)) {
      return array.reduce(reducer, initialValue);
    }
    throw new Error(this._language.ERROR_NOT_AN_ARRAY);
  }

  concat(path, otherArray) {
    let array = this.get(path);
    if (Array.isArray(array) && Array.isArray(otherArray)) {
      const result = array.concat(otherArray);
      this.set(path, result);
      return result;
    }
    throw new Error(this._language.ERROR_NOT_AN_ARRAY);
  }

  unique(path) {
    let array = this.get(path);
    if (Array.isArray(array)) {
      const result = [...new Set(array)];
      this.set(path, result);
      return result;
    }
    throw new Error(this._language.ERROR_NOT_AN_ARRAY);
  }

  exists(path, value) {
    let array = this.get(path);
    if (Array.isArray(array)) {
      return array.includes(value);
    }
    throw new Error(this._language.ERROR_NOT_AN_ARRAY);
  }

  mergeDeep(path, obj) {
    let current = this.get(path);
    if (typeof current === "object" && !Array.isArray(current)) {
      const mergeDeepRecursively = (target, source) => {
        Object.keys(source).forEach((key) => {
          if (source[key] instanceof Object && key in target) {
            Object.assign(
              source[key],
              mergeDeepRecursively(target[key], source[key])
            );
          }
        });
        Object.assign(target || {}, source);
        return target;
      };
      this.set(path, mergeDeepRecursively(current, obj));
      return this.get(path);
    }
    throw new Error(this._language.ERROR_NOT_AN_OBJECT);
  }

  rename(path, oldKey, newKey) {
    let obj = this.get(path);
    if (typeof obj === "object" && !Array.isArray(obj)) {
      if (obj.hasOwnProperty(oldKey)) {
        obj[newKey] = obj[oldKey];
        delete obj[oldKey];
        this.set(path, obj);
        return obj;
      }
      throw new Error(this._language.ERROR_KEY_NOT_FOUND);
    }
    throw new Error(this._language.ERROR_NOT_AN_OBJECT);
  }

  getKeys(path) {
    let obj = this.get(path);
    if (typeof obj === "object" && !Array.isArray(obj)) {
      return Object.keys(obj);
    }
    throw new Error(this._language.ERROR_NOT_AN_OBJECT);
  }

  getValues(path) {
    let obj = this.get(path);
    if (typeof obj === "object" && !Array.isArray(obj)) {
      return Object.values(obj);
    }
    throw new Error(this._language.ERROR_NOT_AN_OBJECT);
  }

  flatten(path) {
    const flattenObject = (obj, prefix = "") => {
      let items = {};
      for (const [key, value] of Object.entries(obj)) {
        const newKey = prefix ? `${prefix}.${key}` : key;
        if (value && typeof value === "object" && !Array.isArray(value)) {
          Object.assign(items, flattenObject(value, newKey));
        } else {
          items[newKey] = value;
        }
      }
      return items;
    };
    return flattenObject(this.get(path));
  }

  unflatten(path, obj) {
    const unflattenObject = (items) => {
      let result = {};
      for (const [key, value] of Object.entries(items)) {
        key.split(".").reduce((acc, part, index, array) => {
          if (index === array.length - 1) {
            acc[part] = value;
          } else {
            acc[part] = acc[part] || {};
          }
          return acc[part];
        }, result);
      }
      return result;
    };

    let flattened = this.flatten(path);
    let newObj = unflattenObject(obj);
    this.set(path, newObj);
    return this.get(path);
  }

  clone(path) {
    let value = this.get(path);
    if (value !== undefined) {
      return JSON.parse(JSON.stringify(value));
    }
    throw new Error(this._language.ERROR_PATH_NOT_FOUND);
  }

  deepClone(path) {
    let value = this.get(path);
    if (value !== undefined) {
      return this.deepCloneRecursive(value);
    }
    throw new Error(this._language.ERROR_PATH_NOT_FOUND);
  }

  deepCloneRecursive(value) {
    if (value !== null && typeof value === "object") {
      if (Array.isArray(value)) {
        return value.map((item) => this.deepCloneRecursive(item));
      } else {
        return Object.keys(value).reduce((acc, key) => {
          acc[key] = this.deepCloneRecursive(value[key]);
          return acc;
        }, {});
      }
    } else {
      return value;
    }
  }

  toJSON() {
    return JSON.stringify(this._storage, null, 2);
  }

  fromJSON(jsonString) {
    this._storage = JSON.parse(jsonString);
  }

  clearByPath(path) {
    const keys = path.split(".");
    let current = this._storage;

    for (let i = 0; i < keys.length - 1; i++) {
      if (!current[keys[i]])
        throw new Error(this._language.ERROR_PATH_NOT_FOUND);
      current = current[keys[i]];
    }

    delete current[keys[keys.length - 1]];
  }

  isEmpty(path) {
    const value = this.get(path);
    return (
      value === undefined ||
      (typeof value === "object" && Object.keys(value).length === 0)
    );
  }

  copy(path, destinationPath) {
    const value = this.get(path);
    if (value !== undefined) {
      this.set(destinationPath, JSON.parse(JSON.stringify(value)));
    } else {
      throw new Error(this._language.ERROR_PATH_NOT_FOUND);
    }
  }

  length(path) {
    const value = this.get(path);
    if (Array.isArray(value)) {
      return value.length;
    }
    if (typeof value === "object" && !Array.isArray(value)) {
      return Object.keys(value).length;
    }
    throw new Error(this._language.ERROR_NOT_AN_ARRAY_OR_OBJECT);
  }

  getPath(path) {
    const value = this.get(path);
    if (value !== undefined) {
      return path;
    }
    throw new Error(this._language.ERROR_PATH_NOT_FOUND);
  }

  connectSQLite(dbPath) {
    this.db = new sqlite3.Database(dbPath, (err) => {
      if (err) {
        console.error(this._language.ERROR_SQLITE_CONNECTION, err.message);
      } else {
        console.log(this._language.SUCCESS_SQLITE_CONNECTION);
      }
    });
  }

  async saveToSQLite(tableName) {
    if (!this.db) {
      throw new Error(this._language.ERROR_SQLITE_NOT_CONNECTED);
    }

    const createTableSQL = `CREATE TABLE IF NOT EXISTS ${tableName} (path TEXT PRIMARY KEY, value TEXT)`;
    await new Promise((resolve, reject) => {
      this.db.run(createTableSQL, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });

    const insertSQL = `INSERT OR REPLACE INTO ${tableName} (path, value) VALUES (?, ?)`;
    const data = Object.entries(this._storage);
    for (const [path, value] of data) {
      await new Promise((resolve, reject) => {
        this.db.run(insertSQL, [path, JSON.stringify(value)], (err) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
      });
    }
  }

  async loadFromSQLite(tableName) {
    if (!this.db) {
      throw new Error(this._language.ERROR_SQLITE_NOT_CONNECTED);
    }

    const selectSQL = `SELECT path, value FROM ${tableName}`;
    this._storage = {};

    await new Promise((resolve, reject) => {
      this.db.all(selectSQL, (err, rows) => {
        if (err) {
          reject(err);
        } else {
          rows.forEach((row) => {
            this.set(row.path, JSON.parse(row.value));
          });
          resolve();
        }
      });
    });
  }

  saveToFile(filePath) {
    fs.writeFileSync(filePath, JSON.stringify(this._storage, null, 2));
  }

  loadFromFile(filePath) {
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, "utf-8");
      this._storage = JSON.parse(data);
    } else {
      throw new Error(this._language.ERROR_FILE_NOT_FOUND);
    }
  }
}

module.exports = new Buzdolabi();