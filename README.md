# 🧭 User Access Management System

A full-stack system for managing software access within an organization. It features user authentication, role-based access control, software registration, and access request approval workflows.

---

## 🔧 Tech Stack

| Layer       | Technology                   |
|-------------|------------------------------|
| Frontend    | React, React Router, Axios, Material UI |
| Backend     | Node.js, Express.js          |
| Database    | PostgreSQL                   |
| ORM         | TypeORM                      |
| Auth        | JWT + Bcrypt                 |

---

## 🧩 Features

### 👤 User Roles
- **Employee**: Sign up, login, and request access to software.
- **Manager**: View and approve/reject pending access requests.
- **Admin**: Create software listings and view all requests.

### ✅ Functionality

- User Registration & Login (JWT)
- Secure Password Handling (bcrypt)
- Role-based Routing & Permissions
- Software Listing and Access Levels
- Access Request Creation & Review
- RESTful API Architecture

---

## 📁 Project Structure

```
user-access-management/
├── backend/
│   ├── controllers/
│   ├── entities/
│   ├── middlewares/
│   ├── routes/
│   ├── .env
│   └── index.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.js
│   │   └── index.js
├── README.md
```

---

## ⚙️ Setup Instructions

### 🗃️ PostgreSQL Setup

1. Create a PostgreSQL database named `user_management`
2. Update backend `.env` with your DB credentials:

```env
PORT=5000
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=your_postgres_user
DB_PASSWORD=your_postgres_password
DB_NAME=user_management
JWT_SECRET=your_secret_key
```

---

### 🚀 Backend Setup

```bash
cd backend
npm install
node index.js
```

The server will run on `http://localhost:5000`

---

### 🌐 Frontend Setup

```bash
cd frontend
npm install
npm start
```

The React app will open at `http://localhost:3000`

---

## 🔌 API Endpoints

### Auth
- `POST /api/auth/signup` – User Registration
- `POST /api/auth/login` – Login, returns JWT token and role

### Software (Admin only)
- `POST /api/software` – Add new software
- `GET /api/software` – List all software

### Access Requests
- `POST /api/requests` – Employee request access
- `GET /api/requests/pending` – Manager view pending
- `PATCH /api/requests/:id` – Approve/Reject request

---

## 🔒 Auth Flow

- Token is stored in `localStorage`
- Axios sends `Authorization: Bearer <token>`
- Middleware validates token and checks role

---

## 🧪 Testing Roles

You can manually assign roles in the database using SQL:
```sql
UPDATE users SET role = 'Manager' WHERE username = 'johndoe';
UPDATE users SET role = 'Admin' WHERE username = 'adminuser';
```

---

## 🎨 UI Example

- Responsive layout using Material UI
- Navbar dynamically renders links based on role
- Error handling for login, forms, etc.

---

## 🧠 Future Improvements

- Password reset support
- Admin dashboard with full audit logs
- Search & filtering in pending requests
- Pagination for large datasets

---

## 👨‍💻 Author

Created by [Your Name] — B.Tech CSE Final Year  
Feel free to fork and modify for your own projects!

---
