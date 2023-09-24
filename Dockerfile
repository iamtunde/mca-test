# Use an official Node.js runtime as the base image
FROM node:16.15.1-alpine

# Set the working directory in the container
WORKDIR /src

# Copy package.json and package-lock.json (if applicable)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Expose the port your application will run on
EXPOSE 3000

# Define the command to run your application
CMD "npm run start:dev"