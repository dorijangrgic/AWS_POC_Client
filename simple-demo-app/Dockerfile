# Use the official Node.js base image
FROM node:alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available) to the working directory
COPY package*.json ./

# Install application dependencies
RUN npm ci --production

# Copy the application source code to the working directory
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]