# Netflix Clone Web App

A feature-rich Netflix clone built using **React + Vite**, integrated with **Firebase Authentication**, and powered by **The Movie Database (TMDB)** API. This project offers a responsive UI, trailer playback, user login/signup, and modern web performance.

---

## 🌐 Live Demo

▶️ **[Visit the Live Site](https://cloneflix-rmd-app.netlify.app)**  
> Hosted with ❤️ on Netlify

---

## 📸 Screenshots

| Home Page | Login Page |
|-----------|------------|
| ![Home](/screenshots/home.png) | ![Login](/screenshots/login.png) |

| Movie List 1 | Movie List 2 |
|--------------|--------------|
| ![Movie 1](/screenshots/movies1.png) | ![Movie 2](/screenshots/movies2.png) |

| 🎬 Trailer Player |
|-------------------|
| ![Trailer](/screenshots/trailer.png) |


---

## ✨ Features

- ✅ Firebase Authentication (Signup, Login, Logout)
- 📽️ Movie trailers powered by TMDB
- 🔥 Firestore database (optional for user info)
- 🎨 Responsive UI with movie posters
- 🍿 Clean layout mimicking Netflix
- 📦 Environment variable support for API security
- 🚫 .env is excluded from version control

---


## 🛠️ Tech Stack

- **Frontend**: React + Vite
- **Styling**: CSS
- **Backend Services**: Firebase (Auth, Firestore)
- **APIs**: TMDB (The Movie Database)
- **Tools**: Axios, React Router, React Toastify
- **Hosting**: Netlify

---

## 📦 Installation & Local Development

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/netflix-clone.git
cd netflix-clone
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Create a .env File in the Root

```bash
# TMDB
VITE_API_KEY=your_tmdb_api_key

# Firebase
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### 4️⃣ Run the App

```bash
npm run dev
```

