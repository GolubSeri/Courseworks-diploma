# Stage 1: Build React App
FROM node:16-alpine as builder

WORKDIR '/app'

# Copy only the necessary files for installing dependencies
COPY front/package.json .
COPY front/yarn.lock .

# Install only production dependencies
RUN yarn install --production

# Copy the entire frontend code
COPY front .

# Build the production version of the React app
RUN yarn build

# Stage 2: Serve React App using Nginx
FROM nginx:alpine

# Copy the production build from the builder stage
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]