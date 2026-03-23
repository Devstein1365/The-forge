# -------- BUILD STAGE --------
FROM node:20-slim@sha256:a82f40540f5959e0003fb7b3c0f80490def2927be8bdbee7e3e0ac65cce3be92 AS builder

WORKDIR /app
RUN apt-get update && apt-get install -y openssl && rm -rf /var/lib/apt/lists/*

# Copy package files
COPY package*.json ./
# Copy prisma file 
COPY prisma ./prisma
# Install dependencies 
RUN npm ci


# Copy package and build files
COPY tsconfig*.json ./
COPY nest-cli.json ./
COPY src ./src

RUN npx prisma generate
# Build application
RUN npm run build


# -------- PRODUCTION STAGE --------
FROM node:20-slim@sha256:a82f40540f5959e0003fb7b3c0f80490def2927be8bdbee7e3e0ac65cce3be92

WORKDIR /app
ENV NODE_ENV=production

RUN apt-get update && apt-get install -y openssl && rm -rf /var/lib/apt/lists/*

COPY package*.json ./
COPY prisma ./prisma
# Install dependencies 
RUN npm ci --omit=dev --ignore-scripts

# # copy compiled app
COPY --from=builder /app/dist ./dist

# copy prisma client generated in builder
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder /app/node_modules/@prisma ./node_modules/@prisma


USER node
EXPOSE 8000

CMD ["node", "dist/main.js"]