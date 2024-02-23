# Backend Node.js Express API Documentation

## Table of Contents
1.Introduction
2.Prerequisites
3.Getting Started
4.API Endpoints
5.Signup
6.Request and Response Examples
7.Error Handling
8.Technologies Used



## Introduction
This API is designed to provide a signup form for users with password hashing functionality. The passwords are securely hashed before being stored in the database.

## Prerequisites
Make sure you have the following installed:

1.Node.js
2.npm (Node Package Manager)
3.MongoDB

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/BinoB/sign_up_form_backend
   
2.Install dependencies:

cd signup_up_form_backend
npm install


3. Configure MongoDB:

  Create a .env file in the root directory.
  Add your MongoDB connection string:

    MONGO_URI=your_mongodb_connection_string
    
4.Start the server:

  npm run server
  
5. Server will be running at http://localhost:5000.

## API Endpoints
## Signup
Method: POST

Endpoint: /signup

Description: Register a new user with a hashed password.

## Request Body:

{
  "name": "John Doe",
  "mobileNumber": "1234567890",
  "email": "john.doe@example.com",
  "password": "securepassword",
  "address": "123 Main Street",
  "pincode": "54321",
  "city": "Anytown",
  "dob": "1990-01-01",
  "longitude": "12.345678",
  "latitude": "34.567890",
  "modeOfDelivery": "Home Delivery"
}

## Response

HTTP/1.1 201 OK
Content-Type: application/json

{
  "message": "User registered successfully"
}

## Error Handling

400 Bad Request:
 {
  "error": "Bad Request",
  "message": "Invalid request body"
}

500 Internal Server Error:

 {
  "error": "Internal Server Error",
  "message": "An unexpected error occurred"
}


## Technologies Used
Node.js
Express.js
MongoDB
bcrypt (for password hashing)
dotenv (for environment variable configuration)
