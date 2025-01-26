# Git

## Introduction
Git is a distributed version control system designed to handle projects of any size with speed and efficiency. It enables tracking changes in source code during software development and facilitates collaboration among developers.

## Installation and Setup

### Basic Installation
1. Download Git from the [official website](https://git-scm.com/)
2. Install following platform-specific instructions

### Initial Configuration
```bash
# Set user information
git config --global user.name "Your Name"
git config --global user.email "you@example.com"

# Check configuration
git config --list
```

## Core Concepts

### Repository Management

#### Creating Repositories
```bash
# Initialize a new repository
git init

# Clone an existing repository
git clone https://github.com/username/repository.git
```

#### Remote Operations
```bash
# Add remote repository
git remote add origin https://github.com/username/repository.git

# View remote repositories
git remote -v

# Change remote URL
git remote set-url origin https://github.com/username/new-repository.git
```

### Basic Operations

#### Staging Changes
```bash
# Add specific files
git add filename.txt

# Add all changes
git add .

# Add changes interactively
git add -p
```

#### Committing Changes
```bash
# Commit with message
git commit -m "Descriptive commit message"

# Amend previous commit
git commit --amend
```

### Branch Management

#### Working with Branches
```bash
# Create new branch
git branch feature-branch

# Switch to branch
git checkout feature-branch

# Create and switch in one command
git checkout -b feature-branch

# List branches
git branch --list
```

#### Merging
```bash
# Merge branch into current branch
git merge feature-branch

# Abort merge in case of conflicts
git merge --abort
```

### History and Differences

#### Viewing History
```bash
# View commit history
git log

# View compact history
git log --oneline

# View history with graph
git log --graph --oneline --decorate
```

#### Checking Differences
```bash
# View unstaged changes
git diff

# View staged changes
git diff --staged

# Compare branches
git diff branch1..branch2
```

## Advanced Features

### Stashing
```bash
# Save changes temporarily
git stash save "work in progress"

# List stashes
git stash list

# Apply stashed changes
git stash apply stash@{0}
```

### Rebasing
```bash
# Rebase current branch
git rebase master

# Interactive rebase
git rebase -i HEAD~3
```

### Tags
```bash
# Create annotated tag
git tag -a v1.0 -m "Version 1.0"

# List tags
git tag --list

# Push tags to remote
git push origin --tags
```

## Best Practices

### Commit Messages
1. Use clear, descriptive messages
2. Start with a verb in imperative mood
3. Keep first line under 50 characters
4. Add detailed description if needed

### Workflow
1. Pull latest changes before starting work
2. Create feature branches for new work
3. Commit frequently with meaningful messages
4. Keep branches up to date with main branch

### Repository Management
1. Use .gitignore for project-specific files
2. Maintain clean commit history
3. Regular backups of repositories
4. Document branch strategy

## Additional Resources

### Documentation
- [Official Git Documentation](https://git-scm.com/doc)
- [Pro Git Book](https://git-scm.com/book/en/v2)
- [Git Reference](https://git-scm.com/docs)

### Tools and Interfaces
- [GitHub Desktop](https://desktop.github.com/)
- [GitKraken](https://www.gitkraken.com/)
- [Sourcetree](https://www.sourcetreeapp.com/)
