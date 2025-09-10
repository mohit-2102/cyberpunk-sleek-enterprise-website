# 1. Use official Node.js image (small & stable)
FROM node:18-alpine

# 2. Set working directory inside the container
WORKDIR /app

# 3. Copy package.json and package-lock.json (if exists)
COPY package*.json ./

# 4. Install dependencies
RUN npm install --legacy-peer-deps

# 5. Copy the rest of the project files
COPY . .

# 6. Build Next.js app
RUN npm run build

# 7. Expose Next.js default port
EXPOSE 3000

# 8. Start the app
CMD ["npm", "run", "start", "--", "-p", "3000"]

