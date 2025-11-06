# 🖼️ Virtual Art Gallery

An immersive **Virtual Art Gallery** built with **React.js**, **TailwindCSS**, **Node.js**, and **MongoDB**.  
This project allows users to explore and interact with artworks in a dynamic, virtual environment — offering zoom, navigation, and interaction features for a rich art experience.

---

## 🎨 Project Overview

This web-based application showcases an interactive art gallery where users can browse through various art themes, view artworks by category or artist, and engage with them using intuitive controls.

### 🎯 Objectives

- 🖼️ Create a **virtual art gallery** with 3D-like navigation.  
- ⚙️ Use **React.js** for the front-end UI and **Node.js + MongoDB** for backend management.  
- 💅 Apply **TailwindCSS** for a responsive, visually engaging design.  
- 🎮 Implement **interactive features** (zoom, like/dislike, navigation).  

---

## 🧩 Tech Stack

| Layer | Technology Used |
|-------|------------------|
| Frontend | React.js, TailwindCSS |
| Backend | Node.js, Express.js |
| Database | MongoDB |
| Styling | TailwindCSS Animations & Transitions |
| Package Manager | npm |

---

## 🖌️ Project Features

- 🎭 **Theme Selection** — Choose from multiple gallery themes:  
  `Modern Art`, `Classical Painting`, `Photography`, `Digital Illustrations`, `Abstract`, `Surrealism`  

- 🧑‍🎨 **Category & Artist Filters** — Browse artworks by category or artist name.  

- 🔍 **Interactive Artwork View** — Click any artwork to:  
  - 🔎 Zoom In / Zoom Out  
  - ⬅️ Previous Artwork / ➡️ Next Artwork  
  - ❤️ Like / 💔 Dislike  
  - 🚪 Exit Image View  

- 🎵 **Optional Background Music** — Enhance immersion with soft background music (if enabled).  

- 📱 **Responsive Design** — Works smoothly on desktop, tablet, and mobile.  

---

## 📂 Project Structure

```
virtual-art-gallery/
│
├── backend/
│   ├── server.js
│   ├── routes/
│   ├── models/
│   └── controllers/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/virtual-art-gallery.git
cd virtual-art-gallery
```

### 2️⃣ Backend Setup
```bash
cd backend
npm install
npm start
```
> Backend runs on default port `5000` (or as configured in `.env`).

### 3️⃣ Frontend Setup
```bash
cd ../frontend
npm install
npm run dev
```
> Frontend runs on default port `5173` (Vite).

---

## 🕹️ How to Explore the Gallery

1. **Start both frontend and backend servers**  
   - Backend: `npm start`  
   - Frontend: `npm run dev`  

2. **Select a theme** — Choose one among:
   - Modern Art 🎨  
   - Classical Painting 🏛️  
   - Photography 📸  
   - Digital Illustrations 💻  
   - Abstract 🌀  
   - Surrealism 🌌  

3. **Filter artworks** by **category** or **artist**.  

4. **Click on any artwork** to interact:  
   - 🔍 **Zoom In / Out** to view details  
   - ⬅️ **Prev / Next** to browse artworks  
   - ❤️ **Like / 💔 Dislike** an artwork  
   - 🚪 **Exit** to return to gallery view  

5. **Enjoy smooth transitions** and animations powered by TailwindCSS and JavaScript.

---

## 🧠 Functionality Logic

- Each artwork is stored in MongoDB with details such as:  
  ```json
  {
    "title": "Starry Night",
    "artist": "Vincent van Gogh",
    "category": "Post-Impressionism",
    "theme": "Classical Painting",
    "likes": 1200,
    "dislikes": 45,
    "imageURL": "/images/starry-night.jpg"
  }
  ```

- JavaScript and React state manage artwork transitions and interactivity.  
- Smooth animations and zoom effects handled via CSS transitions.  
- Artwork reactions (like/dislike) are stored in the database for persistence.  

---

## 🧰 Example Commands

| Command | Description |
|----------|-------------|
| `npm start` | Start the backend server |
| `npm run dev` | Start the frontend server |
| `npm install` | Install dependencies for either frontend or backend |
| `npm run build` | Build the frontend for production |

---

## 🧑‍💻 Author

**👋 [Your Name]**  
Full Stack Developer | React.js | Node.js | MongoDB  

- 🌐 GitHub: https://github.com/SIBSANKARMANNA
- 💼 LinkedIn: https://www.linkedin.com/in/sibsankarmanna/

---



---

## 🏁 Future Improvements

- 🖼️ Add 3D-like navigation (Three.js or WebGL integration)  
- 🧭 Enable virtual walkthrough mode  
- 💬 Add comment/review section for each artwork  
- 🕶️ Support for VR (Virtual Reality) exploration  

---

### 🖼️ Immerse yourself in art — experience creativity virtually! 🎨
