# API Documentation

## Overview

The AI-Based Portfolio Generator API provides endpoints for creating, managing, and exporting professional portfolios with AI-powered content enhancement. The backend is built with Node.js and Express.

**Base URL:** `http://localhost:5000/api`

## Authentication

All protected routes require JWT authentication. Include the token in the Authorization header:

```
Authorization: Bearer <your_jwt_token>
```

## Rate Limiting

API endpoints are rate-limited to prevent abuse:
- Standard endpoints: 100 requests per 15 minutes
- AI enhancement endpoints: 30 requests per 15 minutes

## Portfolio Routes

### Get All Portfolios
```
GET /portfolios
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "_id": "portfolio_id",
      "userId": "user_id",
      "title": "John Doe's Portfolio",
      "personalInfo": {},
      "sections": [],
      "theme": "modern",
      "createdAt": "2026-01-12T00:00:00Z",
      "updatedAt": "2026-01-12T00:00:00Z"
    }
  ]
}
```

### Get Portfolio by ID
```
GET /portfolios/:id
```

**Response:** Returns a single portfolio object

### Create Portfolio
```
POST /portfolios
Content-Type: application/json

{
  "title": "My Portfolio",
  "personalInfo": {
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+1234567890",
    "bio": "Full Stack Developer"
  },
  "theme": "modern"
}
```

**Response:** Returns the created portfolio with `_id`

### Update Portfolio
```
PUT /portfolios/:id
Content-Type: application/json

{
  "title": "Updated Portfolio",
  "personalInfo": {},
  "theme": "minimal"
}
```

**Response:** Returns updated portfolio object

### Delete Portfolio
```
DELETE /portfolios/:id
```

**Response:**
```json
{
  "success": true,
  "message": "Portfolio deleted successfully"
}
```

## AI Enhancement Routes

### Enhance Experience Section
```
POST /ai/enhance/experience
Content-Type: application/json

{
  "company": "Tech Corp",
  "position": "Senior Developer",
  "description": "Worked on web projects",
  "duration": "2 years"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "enhancedDescription": "Led development of scalable web applications, improving performance by 40%...",
    "keywords": ["leadership", "scalability", "performance"],
    "tone": "professional"
  }
}
```

### Enhance Skills Section
```
POST /ai/enhance/skills
Content-Type: application/json

{
  "skills": ["JavaScript", "React", "Node.js"],
  "experience_level": "intermediate"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "enhancedSkills": [
      {
        "name": "JavaScript",
        "proficiency": "Expert",
        "category": "Language"
      }
    ]
  }
}
```

### Generate Portfolio Summary
```
POST /ai/generate/summary
Content-Type: application/json

{
  "fullName": "John Doe",
  "skills": ["JavaScript", "React", "Python"],
  "experience": "5 years in web development",
  "tone": "professional"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "summary": "Full Stack Developer with 5+ years of experience...",
    "alternatives": ["Alternative summary 1", "Alternative summary 2"]
  }
}
```

### Optimize Prompt
```
POST /ai/optimize-prompt
Content-Type: application/json

{
  "prompt": "Make my resume better",
  "context": "Full Stack Developer"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "optimizedPrompt": "Enhance my professional summary highlighting full-stack development expertise...",
    "confidenceScore": 0.92
  }
}
```

## Export Routes

### Export to PDF
```
POST /export/pdf
Content-Type: application/json

{
  "portfolioId": "portfolio_id",
  "template": "modern",
  "fileName": "John_Doe_Portfolio"
}
```

**Response:** Returns PDF file stream

### Export to HTML
```
POST /export/html
Content-Type: application/json

{
  "portfolioId": "portfolio_id",
  "template": "modern"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "htmlContent": "<html>...</html>",
    "downloadUrl": "http://localhost:5000/exports/portfolio.html"
  }
}
```

### Export to React Component
```
POST /export/react
Content-Type: application/json

{
  "portfolioId": "portfolio_id",
  "template": "advanced"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "componentCode": "export default function Portfolio() { ... }",
    "downloadUrl": "http://localhost:5000/exports/portfolio.jsx"
  }
}
```

## Error Handling

All errors follow this format:

```json
{
  "success": false,
  "error": {
    "message": "Descriptive error message",
    "code": "ERROR_CODE",
    "status": 400
  }
}
```

### Common Status Codes

- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `429` - Too Many Requests
- `500` - Internal Server Error

## Data Models

### Portfolio Schema
```
{
  _id: ObjectId
  userId: String (FK)
  title: String
  personalInfo: {
    name: String
    email: String
    phone: String
    bio: String
    photo: String (URL)
    location: String
  }
  sections: [{
    type: String (experience, skills, projects, education)
    content: Mixed
    order: Number
  }]
  theme: String (modern, minimal, classic)
  customCSS: String
  createdAt: Date
  updatedAt: Date
  isPublic: Boolean
  publishedUrl: String
}
```

## Webhooks

### Portfolio Updated
**Event:** `portfolio.updated`

```json
{
  "event": "portfolio.updated",
  "timestamp": "2026-01-12T00:00:00Z",
  "data": {
    "portfolioId": "id",
    "changes": ["title", "theme"]
  }
}
```

## Rate Limit Headers

Responses include rate limit information:

```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1234567890
```

## Example Requests

### cURL
```bash
curl -X GET http://localhost:5000/api/portfolios \
  -H "Authorization: Bearer your_token"
```

### JavaScript/Fetch
```javascript
const response = await fetch('http://localhost:5000/api/portfolios', {
  headers: {
    'Authorization': 'Bearer your_token'
  }
});
const data = await response.json();
```

### Python/Requests
```python
import requests

headers = {'Authorization': 'Bearer your_token'}
response = requests.get('http://localhost:5000/api/portfolios', headers=headers)
data = response.json()
```

## Support

For API support, contact: support@portfoliogenerator.com

<!-- 
lucky  ray-->