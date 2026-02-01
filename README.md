# Digitize Your Business – Web Application

## Project Description
This project is a simple **full-stack web application** developed using **JavaScript**.  
It demonstrates **user authentication** and **CRUD operations** (Create, Read, Update, Delete) on items (tasks).

The application is developed as part of a technical assessment to showcase basic knowledge of:
- Frontend and backend development
- REST APIs
- Database integration
- Authentication
- Git and GitHub usage

The focus of the project is **working functionality**, clarity, and clean code.

---

## Tech Stack Used
- **Frontend**: HTML, CSS, Vanilla JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Token)

---

## Features Implemented
- User Sign Up
- User Login
- Create an item (Task)
- View list of items
- Edit an item
- Delete an item
- Backend API validation
- Database persistence

---

## Setup Steps (How to Run the Project)

### Prerequisites
Ensure the following are installed on your system:
- Node.js (LTS version)
- MongoDB Community Server
- Git
- A web browser (Chrome recommended)

---

### Step 1: Clone the Repository

Clone the public Github repository using:
``bash
git clone <your-github-repository-link>

### Step 2: Navigate to Project Directory

After cloning, move into the project folder:

cd digitize-business-app

### Step 3: Install Dependencies

Install all required backend dependencies by running:

npm install


This will install all packages listed in package.json.

### Step 4: Start MongoDB

MongoDB usually starts automatically after installation.

If MongoDB is not running:

Press Windows + R

Type services.msc

Find MongoDB Server

Click Start

### Step 5: Start Backend Server

Run the backend server using:

node backend/server.js


Expected output:

Database Connected
Server running on port 5000


### Keep this terminal open while using the application.

### Step 6: Run the Frontend

Open the frontend folder

Open index.html in any web browser (Chrome recommended)

The application will open with Login and Sign-Up options.

### How the Application Works (Approach)

The frontend is built using HTML, CSS, and JavaScript.

Users can sign up and log in using their email and password.

User input is sent to the backend using JavaScript fetch() API.

The backend is built using Node.js and Express.js.

Passwords are encrypted using bcrypt before storing in the database.

MongoDB is used to store user data and task data.

### After login, users can:

Create tasks

View tasks

Edit tasks

Delete tasks

All operations follow REST API principles.

API Endpoints
Authentication

POST /api/auth/signup – Register a new user

POST /api/auth/login – Login user

Tasks (CRUD Operations)

POST /api/tasks – Create a task

GET /api/tasks – View all tasks

PUT /api/tasks/:id – Edit a task

DELETE /api/tasks/:id – Delete a task

### Test Cases (To Verify Code and UI)
Authentication Test Cases
Test Case	Input	Expected Result
Sign Up with valid data	Email & Password	User Created
Sign Up with existing email	Same email	Error / Duplicate user
Login with valid credentials	Correct email & password	Login successful
Login with wrong password	Incorrect password	Error message

### CRUD Operation Test Cases
Operation	Action	Expected Result
Create Task	Add new task	Task added successfully
View Tasks	Refresh page	Tasks persist
Edit Task	Update task title	Task updated
Delete Task	Delete task	Task removed
UI Test Cases

Input fields accept valid text

Buttons respond correctly

Page redirects after successful login

No page crashes during normal usage


Conclusion

This project demonstrates a complete JavaScript-based web application with authentication and CRUD functionality.
It fulfills all requirements of the technical assessment with a focus on simplicity and correctness.

### Author

Name: Akash Kumar Gupta
Role: Software Developer
