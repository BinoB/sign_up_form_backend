# Backend Node.js Express with MongoDB database

This is a simple backend Node.js Express application that provides a signup form for users. 

## Prerequisites

Make sure you have the following installed on your machine:

- Node.js
- npm (Node Package Manager)
- MongoDB

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/BinoB/sign_up_form_backend
   
Install dependencies:

cd signup_up_form_backend
npm install


## Configure MongoDB:

  Create a .env file in the root directory.
  Add your MongoDB connection string:

    MONGO_URI=your_mongodb_connection_string
    
## Start the server:

  npm run server
  
Server will be running at http://localhost:5000.

API Endpoints
POST /user/signup: Register a new user with a hashed password.


## Technologies Used
Node.js
Express.js
MongoDB
bcrypt (for password hashing)
dotenv (for environment variable configuration)
