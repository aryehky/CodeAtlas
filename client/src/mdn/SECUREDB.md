# Secure Database Practices

## Introduction
Implementing secure database practices is crucial for protecting sensitive data and preventing unauthorized access.

## Key Concepts

### Data Encryption
```javascript
// Encrypting sensitive data
const crypto = require('crypto');

function encryptData(text, key) {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);
  const encrypted = cipher.update(text, 'utf8', 'hex');
  return encrypted + cipher.final('hex');
}
```

## Best Practices

### Input Validation
```javascript
// Parameterized queries
const sql = 'SELECT * FROM users WHERE id = ?';
connection.query(sql, [userId], function(err, results) {
  // Handle results
});
```

### Access Control
1. Principle of Least Privilege
2. Role-Based Access Control
3. Row-Level Security

### Data Protection
1. Encryption at Rest
2. Encryption in Transit
3. Secure Backup Procedures

## Common Vulnerabilities

### SQL Injection Prevention
```javascript
// Bad practice
const query = `SELECT * FROM users WHERE username = '${username}'`;

// Good practice
const query = 'SELECT * FROM users WHERE username = ?';
db.query(query, [username]);
```

### Security Checklist
1. Regular Security Audits
2. Strong Authentication
3. Data Sanitization
4. Logging and Monitoring
5. Backup and Recovery Plans 