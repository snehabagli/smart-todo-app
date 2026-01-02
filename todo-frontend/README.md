# Smart To-Do App (Full-Stack MERN)

A full-stack **Smart To-Do Application** built using the **MERN stack** with **JWT authentication**, **MongoDB persistence**, and **secure protected APIs**.  
Users can **sign up, log in, create, update, delete, and manage tasks**, with data stored permanently in the database.

---

## Features

-  User Authentication (Signup & Login)
-  JWT-based secure authorization
-  Create, update, delete tasks
-  Mark tasks as completed
-  Tasks are user-specific
-  Data persists after refresh
-  Light / Dark mode UI
-  Cloud deployment

---

## Tech Stack

### Frontend
- React.js
- Axios
- CSS

### Backend
- Node.js
- Express.js
- MongoDB (Atlas)
- Mongoose
- JSON Web Token (JWT)
- bcryptjs

### Deployment
- Backend: Render
- Frontend: Vercel

---

##  Project Structure

 smart-todo-app/
│
├── smart-ToDo-API/ # Backend
│ ├── controllers/
│ ├── middleware/
│ ├── models/
│ ├── routes/
│ ├── config/
│ ├── server.js
│ └── .env
│
├── todo-frontend/ # Frontend
│ ├── src/
│ │ ├── App.js
│ │ ├── Auth.js
│ │ ├── App.css
│ │ └── index.js
│ └── package.json
│
└── README.md
 ---


## Environment Variables

Create a `.env` file in the **backend root folder**:
MONGO_URI=mongodb+srv://Sneha:2004Bagli@cluster0.5zrkvbi.mongodb.net/?appName=Cluster0
JWT_SECRET=supersecretkey123


---

##  Run Locally

### Start Backend
cd smart-ToDo-API
npm install
node server.js

Backend runs on:
http://localhost:5000/


---

### Start Frontend
cd todo-frontend
npm install
npm start


Frontend runs on:
http://localhost:3000/



---

## API Endpoints

### Authentication
| Method | Endpoint | Description |
|------|---------|------------|
| POST | /api/auth/register | Register user |
| POST | /api/auth/login | Login user |

### Tasks (Protected Routes)
| Method | Endpoint | Description |
|------|---------|------------|
| GET | /api/tasks | Get user tasks |
| POST | /api/tasks | Add new task |
| PUT | /api/tasks/:id | Toggle task completion |
| DELETE | /api/tasks/:id | Delete task |

---

## Live Demo

- **Frontend:** https://your-frontend-url.vercel.app  
- **Backend:** https://your-backend-url.onrender.com  

*(Replace with your deployed links)*

---

## How It Works

- User signs up → data stored in MongoDB
- User logs in → receives JWT token
- Token stored in browser localStorage
- Token sent in headers for protected routes
- Tasks are linked to the logged-in user only

---

## Security

- Passwords are hashed using **bcrypt**
- JWT used for secure authentication
- Protected routes using middleware
- User-specific data access only

---

## Future Enhancements

- Edit task title
- Due dates & reminders
- Drag-and-drop tasks
- Task priority levels
- Mobile responsive UI

---

##  Author

**Sneha Bagli**  
Engineering Student | Full-Stack Developer  

---

## License

This project is created for **learning and educational purposes**.

---


