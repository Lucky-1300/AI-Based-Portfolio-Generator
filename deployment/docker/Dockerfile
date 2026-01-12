# Multi-stage Docker build for AI-Based Portfolio Generator

# Stage 1: Build backend
FROM node:18-alpine AS backend-builder

WORKDIR /app/backend

# Copy backend files
COPY backend/package*.json ./
RUN npm ci --only=production

COPY backend/ .

# Stage 2: Build frontend
FROM node:18-alpine AS frontend-builder

WORKDIR /app/frontend

# Copy frontend files
COPY frontend/package*.json ./
RUN npm ci

COPY frontend/ .

# Build the React app
RUN npm run build

# Stage 3: Production image
FROM node:18-alpine

# Set environment variables
ENV NODE_ENV=production
ENV PORT=5000

# Install dumb-init for proper signal handling
RUN apk add --no-cache dumb-init

# Create app directory
WORKDIR /app

# Create non-root user for security
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001

# Copy backend from builder
COPY --from=backend-builder --chown=nodejs:nodejs /app/backend ./backend

# Copy frontend build from builder
COPY --from=frontend-builder --chown=nodejs:nodejs /app/frontend/dist ./frontend/dist

# Copy nginx config (if using nginx)
COPY deployment/nginx/nginx.conf /etc/nginx/nginx.conf

# Install production dependencies for backend only
WORKDIR /app/backend
RUN npm ci --only=production

# Expose ports
EXPOSE 5000
EXPOSE 80
EXPOSE 443

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:5000/health', (r) => {if (r.statusCode !== 200) throw new Error(r.statusCode)})"

# Run as non-root user
USER nodejs

# Use dumb-init to handle signals properly
ENTRYPOINT ["/usr/local/bin/dumb-init", "--"]

# Start the application
CMD ["node", "server.js"]

# Security labels
LABEL security.scan="true"
LABEL maintainer="Portfolio Generator Team"
LABEL version="1.0.0"
