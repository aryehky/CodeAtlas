# JSON Web Tokens (JWT)

## Introduction
JWT is a compact, URL-safe means of representing claims between two parties.

## Structure
JWTs consist of three parts separated by dots (xxxxx.yyyyy.zzzzz):

### 1. Header (xxxxx)
Contains metadata about the token:
```javascript
{
  "alg": "HS256", // The algorithm used for signing
  "typ": "JWT"    // Type of token
}
```

### 2. Payload (yyyyy)
Contains the claims (data):
```javascript
{
  "sub": "1234567890", // Subject
  "name": "John Doe",  // Custom claim
  "iat": 1516239022,   // Issued at
  "exp": 1516242622    // Expiration time
}
```

### 3. Signature (zzzzz)
Verifies the token hasn't been tampered with:
```javascript
HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  secret
)
```

### Complete JWT Example
```javascript
// Creating a JWT
const jwt = require('jsonwebtoken');
const token = jwt.sign(
  { 
    userId: '123',
    role: 'admin',
    exp: Math.floor(Date.now() / 1000) + (60 * 60) // 1 hour
  },
  'secret_key'
);

// Result looks like:
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
// eyJ1c2VySWQiOiIxMjMiLCJyb2xlIjoiYWRtaW4iLCJleHAiOjE2MzQ1Njc4OTB9.
// _sLPAGLyGOmQQa2K9I7-GXlHqnKtW-C0xqoXrNpNyLS
```

## Common Claims
- `iss` (Issuer): Who issued the token
- `sub` (Subject): Who the token refers to
- `exp` (Expiration Time): When the token expires
- `iat` (Issued At): When the token was issued
- `aud` (Audience): Who the token is intended for

## Implementation

### Creating Tokens
```javascript
const jwt = require('jsonwebtoken');

function generateToken(user) {
  return jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: '24h' }
  );
}
```

### Verifying Tokens
```javascript
function verifyToken(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
}
```

## Best Practices
1. Use strong secrets
2. Set appropriate expiration
3. Minimize payload size
4. Use HTTPS only
5. Implement refresh token rotation 