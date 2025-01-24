# NPM (Node Package Manager)

## Introduction
NPM is the default package manager for Node.js, providing a robust ecosystem for managing project dependencies, running scripts, and sharing code within the JavaScript community.

## Installation

### Basic Setup
1. Install Node.js from [official website](https://nodejs.org/)
2. NPM is included with Node.js installation
3. Verify installation:
```bash
node --version
npm --version
```

## Project Initialization

### Creating a New Project
```bash
# Initialize with prompts
npm init

# Initialize with defaults
npm init -y
```

### Package.json Configuration
```json
{
  "name": "project-name",
  "version": "1.0.0",
  "description": "Project description",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "test": "jest",
    "build": "webpack"
  },
  "dependencies": {
    "express": "^4.17.1"
  },
  "devDependencies": {
    "jest": "^27.0.0"
  }
}
```

## Dependency Management

### Installing Packages
```bash
# Install production dependency
npm install package-name

# Install development dependency
npm install --save-dev package-name

# Install specific version
npm install package-name@1.2.3

# Install globally
npm install -g package-name
```

### Updating Packages
```bash
# Check outdated packages
npm outdated

# Update packages
npm update

# Update specific package
npm update package-name
```

### Removing Packages
```bash
# Remove package
npm uninstall package-name

# Remove global package
npm uninstall -g package-name
```

## Scripts

### Running Scripts
```bash
# Run custom script
npm run script-name

# Run predefined script
npm start
npm test
```

### Common Script Patterns
```json
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "build": "webpack --mode production",
    "test": "jest --coverage",
    "lint": "eslint src/**/*.js"
  }
}
```

## Version Control

### Package Lock
```bash
# Generate package-lock.json
npm install

# Update package-lock.json
npm install --package-lock-only
```

### .npmrc Configuration
```ini
save-exact=true
package-lock=true
```

## Publishing Packages

### Package Preparation
1. Update package.json
2. Add README.md
3. Add LICENSE
4. Configure .npmignore

### Publishing Commands
```bash
# Login to npm
npm login

# Publish package
npm publish

# Update package version
npm version patch|minor|major
```

## Security

### Audit
```bash
# Run security audit
npm audit

# Fix security issues
npm audit fix

# Fix security issues forcefully
npm audit fix --force
```

### Authentication
```bash
# Add authentication token
npm token create

# List tokens
npm token list

# Remove token
npm token revoke <id>
```

## Best Practices

### Project Structure
1. Maintain clear directory structure
2. Use appropriate .gitignore
3. Document dependencies properly
4. Keep dependencies updated

### Version Control
1. Use semantic versioning
2. Lock dependency versions
3. Review package-lock.json
4. Use .npmrc for team settings

### Security
1. Regular security audits
2. Review package sources
3. Use trusted packages
4. Keep dependencies updated

## Additional Resources

### Documentation
- [NPM Documentation](https://docs.npmjs.com/)
- [Package.json Guide](https://docs.npmjs.com/cli/v7/configuring-npm/package-json)
- [NPM CLI Documentation](https://docs.npmjs.com/cli/v7/commands)

### Tools
- [NPM Trends](https://www.npmtrends.com/)
- [NPM Security Advisor](https://www.npmjs.com/advisories)
- [Dependency Checkers](https://www.npmjs.com/package/depcheck)
