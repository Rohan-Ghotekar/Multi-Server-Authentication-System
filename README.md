# Multi-Server-Authentication-System
A distributed authentication system built using Apache Tomcat and Node.js (Express) with MySQL integration, demonstrating multi-server REST API communication

# Multi-Server Authentication System

## 📌 Project Overview

The Multi-Server Authentication System is a distributed web application that demonstrates authentication using two independent servers.

The frontend is deployed on Apache Tomcat (Java environment), while the authentication service runs separately on a Node.js + Express server. Both servers communicate via REST APIs to handle user registration and login.

This project showcases multi-server architecture, RESTful communication, and database integration using MySQL(aiven cloud platform).

---

## 🏗 System Architecture

Client Browser  
        ↓  
Apache Tomcat Server (Port 8080)  
        ↓ REST API Call (Fetch)  
Node.js + Express Authentication Server (Port 1234)  
        ↓  
MySQL Database  

---

## ⚙ Technologies Used

- Java
- Apache Tomcat
- Node.js
- Express.js
- MySQL(aiven cloud)
- HTML5
- CSS3
- JavaScript
- Fetch API
- dotenv (Environment Variable Management)

---

## 🔐 Features

- User Registration
- User Login
- Authentication via REST API
- Multi-server communication
- MySQL database integration(aiven cloud)
- LocalStorage-based session handling
- Clean UI with responsive design

---

## 📂 Project Structure

project-root/
│
├── java-app/ # Tomcat Frontend Application
│ ├── login.html
│ ├── register.html
│ ├── welcome.html
│ └── web.xml
|   ── assets
      --css
        -profile.css
        -style.css
      --js
        -server.js
        -welcome.js
│
├── webservice/ # Node.js Authentication API
│ ├── routes/
│ ├── controller/
│ ├── service/
│ ├── dao/
│ ├── util/db.js
│ ├── app.js
│ └── .env
│
├── database/
│ └── schema.sql
│
├── README.md
└── .gitignore


---

## 🗄 Database Setup

### 1️⃣ Create Database

CREATE TABLE users (
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL
);

🚀 How To Run The Project
Step 1: Clone Repository
git clone https://github.com/yourusername/multi-server-authentication-system.git
cd multi-server-authentication-system

Step 2: Run Node.js Authentication Server

Navigate to webservice folder:

cd webservice
npm install


Create .env file:

PORT=1234
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=authdb


Start the server:

nodemon start


The authentication API will run on:

http://localhost:1234

Step 3: Deploy Frontend on Tomcat

Import Java project into IDE (Eclipse/IntelliJ)

Deploy the project on Apache Tomcat

Start Tomcat server

Tomcat runs on:

http://localhost:8080


Access the application through:

http://localhost:8080/webapplication/
