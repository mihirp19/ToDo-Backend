# Todo List Backend Documentation

## Overview

Node.js/Express backend with MongoDB integration, providing RESTful API endpoints for task management.

## Technology Stack

- Node.js with Express v4.21.2
- MongoDB v6.13.0
- Mongoose v8.10.0
- Additional utilities:
  - Body Parser v1.20.3
  - CORS v2.8.5
  - Dotenv v16.4.7
  - Nodemon v3.1.9

## Features

- RESTful API architecture
- MongoDB data persistence
- Secure environment configuration
- Cross-origin request support
- Development auto-reload

## Project Structure

backend/
├── config/
│ └── db.js
├── controllers/
│ └── taskController.js
├── models/
│ └── Task.js
├── routes/
│ └── taskRoutes.js
├── .env
├── package.json
└── server.js

## Installation

### Prerequisites

- Node.js (latest LTS version)
- MongoDB installation or Atlas account
- Git

### Setup Steps

1. Navigate to backend directory:
   bash
   cd todo-list-app/backend

2. Install dependencies:
   bash
   npm install

3. Create `.env` file:
   plaintext
   MONGO_URI=your_mongodb_connection_string
   PORT=5000

4. Start server:
   bash

# Development

node src/server.js

## API Documentation

### Endpoints

#### GET /api/tasks

- Description: Fetch all tasks (newest first)
- Response: Array of task objects
- Status codes:
  - 200: Success
  - 500: Server error

#### POST /api/tasks

- Description: Create new task
- Request body: `{ title: string, completed?: boolean }`
- Response: Created task object
- Status codes:
  - 201: Created
  - 400: Bad request
  - 500: Server error

#### PATCH /api/tasks/:id

- Description: Update task
- Request body: `{ title?: string, completed?: boolean }`
- Response: Updated task object
- Status codes:
  - 200: Success
  - 404: Not found
  - 400: Bad request
  - 500: Server error

#### DELETE /api/tasks/:id

- Description: Remove task
- Response: Success message
- Status codes:
  - 200: Success
  - 404: Not found
  - 500: Server error

## Development Guidelines

### Code Organization

- Use MVC architecture
- Implement proper error handling
- Follow RESTful conventions
- Use meaningful variable names
- Maintain proper file structure

### Database

- Use Mongoose schemas
- Implement proper validation
- Handle database errors

### Security

- Implement proper input validation
- Use environment variables
- Handle CORS properly

## Contributing

1. Fork repository
2. Create feature branch
3. Follow code style guidelines
4. Submit pull request
