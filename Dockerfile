# Common base stage
# Use the official Node.js base image
FROM node:alpine as base
# Set the working directory
WORKDIR /app
# Copy package.json and package-lock.json (if available) to the working directory
COPY package*.json ./
# Install application dependencies
RUN npm ci
# Copy the application source code to the working directory
COPY . .

# Set copy specified env to working directory
ARG ENVIRONMENT=prod
COPY env/.env.${ENVIRONMENT} .env.local

# Development stage
FROM base as dev
ENV NODE_ENV=dev
# Build the Next.js application
RUN npm run build
# Expose the application port
EXPOSE 3000
# Start the application
CMD ["npm", "run", "dev"]

# Production stage
FROM base as prod
ENV NODE_ENV=prod
# Build the Next.js application
RUN npm run build
# Expose the application port
EXPOSE 3000
# Start the application
CMD ["npm", "run", "start"]