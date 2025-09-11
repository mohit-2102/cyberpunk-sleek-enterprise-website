# 1. Use official Node.js image
FROM node:18-alpine

# 2. Set working directory inside the container
WORKDIR /app

# 3. Copy package.json and package-lock.json
COPY package*.json ./

# 4. Install dependencies
RUN npm install --legacy-peer-deps

# 5. Copy the rest of the project files
COPY . .

# 6. Accept NEXT_PUBLIC_API_BASE as a build arg
ARG NEXT_PUBLIC_API_BASE
ENV NEXT_PUBLIC_API_BASE=$NEXT_PUBLIC_API_BASE

# 7. Build Next.js app (SSR build, not static export)
RUN npm run build

# 8. Expose Next.js default port
EXPOSE 3000

# 9. Start the Next.js app in production
CMD ["npm", "run", "start"]
