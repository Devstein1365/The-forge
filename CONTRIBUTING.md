# Contributing to Netmarket

Thank you for your interest in contributing to Netmarket! This document provides comprehensive guidelines for contributing to the project.

## Getting Started

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/Devstein1365/The-forge.git
   cd backend or frontend
   ```
3. ```bash
   npm install
   ```
4. Create a new branch for your feature/fix:
   ```bash
   git checkout -b feat/user-authentication
   ```

## Branching Strategy

We follow the Git Flow branching strategy:

- `main` - Production-ready code (stable releases)
- `dev` - Main development branch (integration branch)
- `feat/*` - New features (e.g., `feat/payment-gateway`)
- `bugfix/*` - Bug fixes (e.g., `bugfix/login-error`)
- `hotfix/*` - Urgent production fixes (e.g., `hotfix/security-patch`)
- `release/*` - Release preparation (e.g., `release/v1.2.0`)

## Making Changes

1. Always branch from `dev`:
   ```bash
   git checkout dev
   git pull origin dev
   git checkout -b feat/your-feature
   ```
2. Keep commits atomic and focused on single changes
3. Follow the existing code style and formatting
4. Write descriptive commit messages
5. Update documentation for any new features or changes
6. Add tests for new functionality

## Pull Request Process

1. Update your branch with the latest changes:
   ```bash
   git checkout dev
   git pull origin dev
   git checkout your-branch
   git rebase dev
   ```
2. Ensure all tests pass:
   ```bash
   npm run test
   ```
3. Update relevant documentation
4. Create a PR against the `dev` branch with a clear description
5. Address review comments promptly

## Commit Message Format

```
type(scope): Brief description

[Optional] Detailed description explaining the changes,
motivations, and additional context.

[Optional] Breaking changes, issues closed, etc.
```

Types:

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or modifying tests
- `chore`: Maintenance tasks

Example:

```
feat(auth): implement JWT authentication

- Add JWT token generation
- Implement token validation middleware
- Update user routes to use authentication

Closes #123
```
