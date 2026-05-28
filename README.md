# GitHub Profile Analyzer API

## 📌 Project Overview

GitHub Profile Analyzer API is a backend service built using Node.js, Express.js, and MySQL.
The application fetches public GitHub profile data using the GitHub Public API, analyzes useful profile insights, and stores them in a MySQL database.

This project demonstrates REST API development, third-party API integration, database management, and backend deployment.

---

# 🚀 Tech Stack

* Node.js
* Express.js
* MySQL
* GitHub Public API
* Axios
* dotenv
* CORS

---

# ✨ Features

* Fetch GitHub public profile data using username
* Store analyzed profile data in MySQL
* REST API for fetching all analyzed profiles
* REST API for fetching a single analyzed profile
* Duplicate profile handling using SQL update queries
* Error handling for invalid usernames and database failures
* Environment variable configuration
* Deployment-ready backend structure

---

# 📂 Project Structure

```bash
github-profile-analyzer/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── githubController.js
│
├── routes/
│   └── githubRoutes.js
│
├── services/
│   └── githubService.js
│
├── .env
├── .gitignore
├── schema.sql
├── package.json
├── server.js
└── README.md
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone <your-github-repository-link>
```

```bash
cd github-profile-analyzer
```

---

## 2️⃣ Install Dependencies

```bash
npm install
```

---

## 3️⃣ Configure Environment Variables

Create a `.env` file in the root directory.

```env
PORT=3000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=github_analyzer
DB_PORT=3306
```

---

## 4️⃣ Setup MySQL Database

Create database:

```sql
CREATE DATABASE github_analyzer;
```

Use database:

```sql
USE github_analyzer;
```

Create table:

```sql
CREATE TABLE profiles (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255) UNIQUE,
    name VARCHAR(255),
    bio TEXT,
    public_repos INT,
    followers INT,
    following INT,
    github_created_at DATETIME,
    profile_url TEXT,
    avatar_url TEXT,
    analyzed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

# ▶️ Run Project

## Development Mode

```bash
npm run dev
```

## Production Mode

```bash
npm start
```

---

# 🌐 API Endpoints

## Analyze GitHub Profile

### Request

```http
GET /api/github/analyze/:username
```

### Example

```http
GET /api/github/analyze/octocat
```

---

## Get All Stored Profiles

### Request

```http
GET /api/github/profiles
```

---

## Get Single Profile

### Request

```http
GET /api/github/profiles/:username
```

### Example

```http
GET /api/github/profiles/octocat
```

---

# 📦 Sample API Response

```json
{
  "message": "Profile analyzed successfully",
  "profile": {
    "username": "octocat",
    "name": "The Octocat",
    "public_repos": 8,
    "followers": 22777,
    "following": 9
  }
}
```

---

# 🧠 Useful Insights Stored

* Username
* Name
* Bio
* Public Repository Count
* Followers Count
* Following Count
* GitHub Account Creation Date
* Profile URL
* Avatar URL
* Analysis Timestamp

---

# 🔒 Environment Variables

| Variable    | Description    |
| ----------- | -------------- |
| PORT        | Server Port    |
| DB_HOST     | MySQL Host     |
| DB_USER     | MySQL Username |
| DB_PASSWORD | MySQL Password |
| DB_NAME     | Database Name  |
| DB_PORT     | MySQL Port     |

---

# 🛠️ Additional Features Added

* MVC folder structure
* Axios-based GitHub service layer
* SQL duplicate handling
* RESTful API architecture
* Error handling middleware
* Deployment-ready configuration
* Postman API testing support

---

# ☁️ Deployment

Backend deployed on:

* Render / Railway

---

# 📮 Postman Testing

You can test APIs using Postman.

Example URL:

```http
http://localhost:3000/api/github/analyze/octocat
```

---

# 📜 Database Schema

Database schema file included:

```bash
schema.sql
```

---

# 👨‍💻 Author

Prince Kumar

---

# 📄 License

This project is created for assignment and educational purposes.
