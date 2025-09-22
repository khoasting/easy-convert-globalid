# GraphQL Relay Global ID Converter

A simple web application to convert between GraphQL Relay global IDs and regular type/ID pairs.

## Features

- Convert Global ID to Type and ID
- Convert Type and ID to Global ID
- Clean web interface
- REST API endpoints
- Error handling

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm start
```

3. Open http://localhost:3000 in your browser

## API Endpoints

- `GET /` - Main web interface
- `GET /api/from-global-id/:globalId` - Convert global ID to type and ID
- `GET /api/to-global-id/:type/:id` - Convert type and ID to global ID
- `GET /health` - Health check

## Example API Usage

```bash
# Convert global ID to type and ID
curl http://localhost:3000/api/from-global-id/VXNlcjoxMjM=

# Convert type and ID to global ID
curl http://localhost:3000/api/to-global-id/User/123
```

## Deployment

This app is ready for deployment on any Node.js hosting platform:

- **Heroku**: Just push to Heroku, it will auto-detect Node.js
- **Railway**: Connect your GitHub repo
- **Vercel**: Deploy as a Node.js function
- **DigitalOcean App Platform**: Deploy from GitHub
- **Any VPS**: Run `npm start` after `npm install`

The app uses `process.env.PORT` for port configuration, making it compatible with most hosting platforms.
