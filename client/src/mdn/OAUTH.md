# OAuth 2.0

## Introduction
OAuth 2.0 is an authorization framework that enables applications to obtain limited access to user accounts on an HTTP service.

## Key Concepts

### Roles
- Resource Owner: The user
- Client: The application
- Resource Server: The API
- Authorization Server: Issues tokens

### Grant Types
```javascript
// Authorization Code Flow
app.get('/auth', (req, res) => {
  const authUrl = `${authServer}/oauth2/authorize?
    response_type=code&
    client_id=${clientId}&
    redirect_uri=${redirectUri}&
    scope=read`;
  res.redirect(authUrl);
});
```

### Common Flows
1. Authorization Code Flow
2. Implicit Flow
3. Client Credentials
4. Resource Owner Password

## Implementation

### Authorization Code Flow
```javascript
// Exchange code for token
async function getToken(code) {
  const response = await fetch(`${authServer}/oauth2/token`, {
    method: 'POST',
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code,
      redirect_uri: redirectUri,
      client_id: clientId,
      client_secret: clientSecret
    })
  });
  return response.json();
}
```

## Best Practices
1. Always use HTTPS
2. Validate all redirects
3. Keep client secrets secure
4. Use state parameter to prevent CSRF
5. Implement PKCE for mobile apps 