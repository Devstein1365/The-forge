## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Devstein1365/The-forge.git
cd backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file based on the `.env.example` file in the project directory:

```plaintext
PORT = <your port>
CORS_ORIGINS=http://localhost:3000,http://localhost:8000
APP_PREFIX=/api/v1
DATABASE_URL=<your db url>
REDIS_HOST=localhost
REDIS_PORT= 6379
```

### 4. Build, Start Database and redis using Docker

```bash
npm run docker:up-b
```

### 5. Start the Development Server

```bash
npm run start:dev
```
