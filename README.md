
# 🚀 Node.js Modules Exploration

This project demonstrates the usage of various built-in Node.js modules such as `crypto`, `uuid`, `fs`, `stream`, and `os`. It is designed to be used via the command line with specific operations.

---

## 📂 File Structure

```
├── index.js         // Main script
├── large.txt        // A large file (1MB or more) for stream and fs reading comparison
├── README.md        // This file
```

---

## 🛠️ How to Use

### Step 1: Install Dependencies

```bash
npm install uuid
```

### Step 2: Run the Script with Command Line Arguments

---

## 🧪 Available Operations

### 🔐 1. Encrypt a String

Encrypts the string `"Hello, Good Morning"` using AES-256-CBC algorithm.

```bash
node index.js encrypt
```

**Output:**

```
Encrypted string: <hex_encrypted_value>
```

---

### 🆔 2. Generate UUID (v4)

Generates a random UUID using the `uuid` package.

```bash
node index.js uuid
```

**Output:**

```
Generated UUID: 123e4567-e89b-12d3-a456-426614174000
```

---

### 📖 3. Read Large File using Streams

Reads `large.txt` using a stream and prints the time taken.

```bash
node index.js read-stream
```

**Output:**

```
Stream Read Time: 12.345ms
```

---

### 📚 4. Read Large File using fs.readFileSync

Reads the same file synchronously and prints the time taken.

```bash
node index.js read-fs
```

**Output:**

```
FS Read Time: 50.678ms
```

---

### 💻 5. System Information

Displays system details using Node.js `os` module.

```bash
node index.js os
```

**Sample Output:**

```
System Info:
OS Type: Linux
Platform: linux
CPU Architecture: x64
CPU Info: [ { model: 'Intel(R)...', speed: 2500, ... } ]
Free Memory: 4153753600 bytes
Total Memory: 8355123200 bytes
Home Directory: /home/user
Uptime: 123456 seconds
```

---

## 📝 Notes

- Make sure `large.txt` file exists and is at least 1MB in size.
- Modify the `encrypt` logic in `index.js` if you want to input custom strings, keys, or IVs.
- All features are executed via command-line arguments.

---

## 📦 Built-in Modules Used

- [`crypto`](https://nodejs.org/api/crypto.html)
- [`uuid`](https://www.npmjs.com/package/uuid)
- [`fs`](https://nodejs.org/api/fs.html)
- [`stream`](https://nodejs.org/api/stream.html)
- [`os`](https://nodejs.org/api/os.html)
- [`path`](https://nodejs.org/api/path.html)

---

## 👨‍💻 Author

Made with ❤️ by **Paritosh Barman**
