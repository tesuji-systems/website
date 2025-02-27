# Use the official Node.js image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies with --legacy-peer-deps to resolve conflicts
RUN npm install --legacy-peer-deps

# Copy the rest of the application code
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the port your app runs on (default is 3000 for Next.js)
EXPOSE 3000

# Command to run your application
CMD ["npm", "start"]
