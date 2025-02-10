# Use Node.js LTS as base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies first (caching optimization)
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Build the React app
RUN npm run build

# Serve the app using a lightweight HTTP server
RUN npm install -g serve
CMD ["npm","start"]

# Expose port 3000
EXPOSE 3000
