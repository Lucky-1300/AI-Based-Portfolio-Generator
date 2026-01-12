# Deployment Environment Configuration

## Overview
This directory contains all deployment and infrastructure configuration files for the AI-Based Portfolio Generator.

## Files

### `ci-cd.yml`
GitHub Actions CI/CD pipeline configuration that handles:
- **Linting**: Code quality checks for backend and frontend
- **Testing**: Unit and integration tests
- **Security**: Vulnerability scanning with Snyk
- **Building**: Docker image creation and registry push
- **Deployment**: Automated deployment to staging and production
- **Performance**: Lighthouse CI for performance testing
- **Notifications**: Slack integration for deployment status

### `docker/Dockerfile`
Multi-stage Docker build configuration featuring:
- **Backend Stage**: Node.js backend with production dependencies
- **Frontend Stage**: React app build with Vite
- **Production Stage**: Optimized final image with non-root user, health checks, and security labels

### `nginx/nginx.conf`
Nginx reverse proxy and web server configuration including:
- SSL/TLS setup with automatic redirect
- Rate limiting for API endpoints
- Gzip compression
- Security headers (CSP, X-Frame-Options, etc.)
- Caching strategies for static assets
- Upstream proxy to backend
- SPA fallback routing

### `docker-compose.yml`
Complete orchestration of all services:
- MongoDB database
- Node.js backend API
- React frontend
- Nginx reverse proxy
- Redis cache (optional)

### `.env.example`
Template for environment variables needed across the deployment

## Quick Start

### Prerequisites
- Docker and Docker Compose installed
- Node.js 18+ (for local development)
- Git repository with CI/CD setup

### Local Development with Docker

```bash
# Copy environment template
cp deployment/.env.example .env

# Edit .env with your configuration
nano .env

# Start all services
docker-compose -f deployment/docker-compose.yml up -d

# View logs
docker-compose -f deployment/docker-compose.yml logs -f

# Stop services
docker-compose -f deployment/docker-compose.yml down
```

### Access Points
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000/api
- **MongoDB**: localhost:27017
- **Redis**: localhost:6379 (if enabled)

## Environment Variables

### Backend (.env)
```
NODE_ENV=production
PORT=5000
MONGODB_URI=mongodb://admin:password@mongodb:27017/portfolio
JWT_SECRET=your-secret-key
OPENAI_API_KEY=your-api-key
CORS_ORIGIN=http://localhost:3000
LOG_LEVEL=info
```

### Frontend (.env.local)
```
VITE_API_URL=http://localhost:5000/api
VITE_APP_NAME=Portfolio Generator
```

### MongoDB
```
MONGO_ROOT_USER=admin
MONGO_ROOT_PASSWORD=password
MONGO_DB_NAME=portfolio
```

## Deployment Strategies

### Staging Deployment
- Triggered on pushes to `develop` branch
- Uses `deployment/docker-compose.yml`
- URL: https://staging.portfoliogenerator.com

### Production Deployment
- Triggered on pushes to `main` branch
- Requires manual approval via GitHub Environments
- Uses optimized Docker images
- URL: https://portfoliogenerator.com

## SSL/TLS Configuration

### Let's Encrypt Setup
```bash
# Generate certificates
docker run --rm -v $(pwd)/deployment/ssl:/etc/letsencrypt certbot/certbot \
  certonly --standalone -d your-domain.com

# Update nginx.conf with certificate paths
# Paths: /etc/letsencrypt/live/your-domain/fullchain.pem
#        /etc/letsencrypt/live/your-domain/privkey.pem

# Auto-renewal with certbot
docker run -d --rm \
  -v $(pwd)/deployment/ssl:/etc/letsencrypt \
  -v $(pwd)/deployment/nginx:/var/www/certbot \
  -p 80:80 \
  --name certbot-renew \
  certbot/certbot renew --webroot -w /var/www/certbot
```

## Database Backups

### MongoDB Backup
```bash
# Create backup
docker-compose exec mongodb mongodump \
  --uri="mongodb://admin:password@localhost:27017/portfolio" \
  --out=/data/db/backup

# Restore from backup
docker-compose exec mongodb mongorestore \
  --uri="mongodb://admin:password@localhost:27017/" \
  /data/db/backup
```

### Automated Backup Script
```bash
#!/bin/bash
DATE=$(date +%Y%m%d_%H%M%S)
docker-compose exec -T mongodb mongodump \
  --uri="mongodb://admin:password@mongodb:27017/portfolio" \
  --out=/data/db/backup_$DATE
```

## Monitoring & Logging

### View Logs
```bash
# All services
docker-compose logs -f

# Specific service
docker-compose logs -f backend
docker-compose logs -f nginx

# Last N lines
docker-compose logs --tail=100 backend
```

### Health Checks
All services include health checks:
```bash
# Manual health check
curl http://localhost:5000/health
curl http://localhost:3000
curl http://localhost/health  # via nginx
```

## Performance Optimization

### Database Optimization
- Indexing on frequently queried fields
- Connection pooling with MongoDB
- Query optimization with projections

### Caching Strategy
- Redis for session/cache data
- Nginx caching for static assets (1 year)
- Browser caching via cache headers

### Rate Limiting
- API endpoints: 10 req/s per IP
- General endpoints: 30 req/s per IP
- Burst capacity: 20 and 50 respectively

## Security Best Practices

### Implemented
- Non-root user in containers
- Network isolation with Docker networks
- Environment variable secrets management
- SSL/TLS encryption
- Security headers (CSP, X-Frame-Options, etc.)
- Rate limiting and request validation
- CORS configuration
- MongoDB authentication

### Additional Recommendations
- Regular security audits with Snyk
- Keep dependencies updated
- Monitor container logs for suspicious activity
- Use secrets management (HashiCorp Vault, AWS Secrets Manager)
- Implement DDoS protection (Cloudflare, AWS Shield)
- Regular database backups to secure storage

## Scaling

### Horizontal Scaling
```yaml
# docker-compose.yml
services:
  backend:
    deploy:
      replicas: 3
```

### Load Balancing
- Nginx configured for least connections
- Connection pooling for backend
- Database replica sets for MongoDB

## Troubleshooting

### Service Won't Start
```bash
# Check logs
docker-compose logs -f service_name

# Verify port availability
netstat -tulpn | grep LISTEN

# Restart service
docker-compose restart service_name
```

### Database Connection Issues
```bash
# Test MongoDB connection
docker-compose exec backend \
  mongosh "mongodb://admin:password@mongodb:27017/portfolio"

# Check network connectivity
docker-compose exec backend ping mongodb
```

### High Memory Usage
```bash
# Monitor resource usage
docker stats

# Adjust container limits in docker-compose.yml
# Add deploy section:
# deploy:
#   resources:
#     limits:
#       memory: 512M
#       cpus: '0.5'
```

## CI/CD Integration

### GitHub Secrets Required
- `STAGING_DEPLOY_KEY`: Private SSH key for staging server
- `STAGING_HOST`: Staging server hostname
- `STAGING_USER`: SSH user for staging
- `PROD_DEPLOY_KEY`: Private SSH key for production server
- `PROD_HOST`: Production server hostname
- `PROD_USER`: SSH user for production
- `SLACK_WEBHOOK`: Slack notification webhook
- `SNYK_TOKEN`: Snyk security scanning token

### Pipeline Flow
1. Code push to main/develop
2. Linting checks
3. Backend/Frontend tests
4. Security scanning
5. Docker build
6. Staging deployment (on develop)
7. Production deployment (on main)
8. Performance testing
9. Notifications

## Support & Documentation

- Full API documentation: `docs/api-documentation.md`
- User manual: `docs/user-manual.md`
- Evaluation rubric: `docs/evaluation-rubric.md`

For questions or issues, contact: devops@portfoliogenerator.com
