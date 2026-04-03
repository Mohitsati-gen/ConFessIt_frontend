# 🌐 ConFessIt – Frontend

A modern, responsive frontend for an anonymous confession platform where users can share thoughts freely without revealing their identity.

🔗 **Live Demo:** [con-fess-it-frontend-z94p.vercel.app](https://con-fess-it-frontend-z94p.vercel.app)  
🔗 **Backend Repo:** [ConFessIt-backend](https://github.com/Mohitsati-gen/ConFessIt-backend)

---

## 🚀 Features

- 🔐 Authentication (Login / Signup)
- 🔄 Persistent login using HTTP-only cookies
- 🧠 Protected routes — only logged-in users can access features
- ✍️ Submit anonymous confessions
- 📜 Explore confession feed with category filtering & pagination
- 🌌 Animated UI with star background (React Three Fiber)
- 🔔 Toast notifications for real-time feedback
- 📱 Fully responsive design

---

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| React.js | UI framework |
| React Router DOM | Client-side routing |
| Tailwind CSS | Styling |
| Axios | HTTP client |
| React Toastify | Toast notifications |
| React Three Fiber | 3D animated star background |

---

## 📁 Project Structure

```
src/
├── components/       # Reusable UI components
├── pages/            # Route-level page components
├── routes/           # Protected & public route wrappers
├── context/          # Auth context (global state)
├── services/         # Axios API call functions
├── App.jsx
└── main.jsx
```

---

## ⚙️ Setup Instructions

### 1. Clone the repo

```bash
git clone https://github.com/Mohitsati-gen/ConFessIt_frontend.git
cd ConFessIt_frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create `.env` file

```env
VITE_API_BASE_URL=http://localhost:8000/api
```

> Replace with your deployed backend URL in production.

### 4. Run the app

```bash
npm run dev
```

App will run on `http://localhost:5173`

---

## 🔐 Authentication Flow

- User logs in → backend sets **HTTP-only cookie** with access token
- Cookies are automatically sent with every Axios request (`withCredentials: true`)
- Auth state is managed globally using **React Context API**
- Protected routes check auth state before rendering

---

## 📸 Screens

- 🏠 Home Page
- 🔑 Login / Signup
- ✍️ Submit Confession
- 📜 Explore Feed (with filters)

---

## 🌍 Deployment

Deployed on **Vercel** — [Live Link](https://con-fess-it-frontend-z94p.vercel.app)

---

## ✨ Future Improvements

- [ ] Dark / Light theme toggle
- [ ] Real-time feed updates
- [ ] AI content moderation
- [ ] Like & comment system

---

## 👨‍💻 Author

**Mohit Sati**  
[GitHub](https://github.com/Mohitsati-gen) • [LinkedIn](https://www.linkedin.com/in/mohit-sati-061291313)
