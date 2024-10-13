# Project Title

MERN Todo App

# Description

A full-stack Todo application built with the MERN stack (MongoDB, Express, React, Node.js). The app allows users to add, update, and delete tasks. It is deployed on Render for both frontend and backend.

# Live Demo

https://todo-mern-client-lkgq.onrender.com/

# Features

- Add, update, and delete tasks
- Responsive design
- Real-time updates without page reloads
- Data persistence using MongoDB
- Stylish CSS implementation using gradients

# Tech Stack

- Frontend: React (Create React App), Tailwind CSS, SCSS, BEM Methodology
- Backend: Node.js, Express.js
- Database: MongoDB
- Deployment: Render (Frontend and Backend)
- Version Control: Git, GitHub

# Setup Instructions

1. Clone the repository:

```
git clone https://github.com/hayapy88/todo-mern
```

2. Navigate to the project directory and install dependencies for both the frontend and backend:

```
cd client
npm install
cd ../server
npm install
```

3. Create a .env file in the server root directory with the following environment variables:
   MONGO_URI=MongoDB-connection-string  
   PORT=4000(or-any-port-you-prefer)

4. Start the frontend and backend:

```
cd client
npm start
cd ../server
npm run dev
```

Frontend: Open http://localhost:3000 in your browser to view the frontend.  
Backend: The backend will be running on http://localhost:4000 (or whichever port you set).

# API's

GET /api/v1/todo - Fetch all todos  
POST /api/v1/todo - Create a new todo  
PUT /api/v1/todo/:id - Updates a todo by ID  
DELETE /api/v1/todo/:id - Delete a todo by ID

# Future Improvements

- User authentication
- Adding due dates for tasks
- Adding prioritizing tasks

# Contact Information

Email: hayatoyokoi.work@gmail.com  
LinkedIn: https://www.linkedin.com/in/hayatoyokoi/
