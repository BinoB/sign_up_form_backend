import User from '../model/userModel.js'
import bcrypt from 'bcrypt';


// Create a new user
export const createSignUp = async (req, res) => {
    try {
      const {
        name,
        mobileNumber,
        email,
        password,
        address,
        pincode,
        city,
        dob,
        longitude,
        latitude,
        modeOfDelivery
      } = req.body;
  
      // Validate required fields
      if (!name || !mobileNumber || !email || !password || !address || !pincode|| !city) {
        return res.status(400).json({ message: "All fields are required" });
      }
  
      // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

      // Create a new user instance
      const newUser = new User({
        name,
        mobileNumber,
        email,
        password :hashedPassword,
        address,
        city,
        dob,
        longitude,
        latitude,
        modeOfDelivery,
      });
  
      // Save the new user to the database
      const savedUser = await newUser.save();
  
      // Respond with the saved user details
      res.status(201).json(savedUser);
    } catch (error) {
      // Handle specific validation errors
      if (error.name === "ValidationError") {
        const errors = Object.values(error.errors).map((err) => err.message);
        return res.status(400).json({ message: "Validation error", errors });
      }
  
      // Handle other errors
      res.status(500).json({ message: "Internal server error", error: error.message });
    }
  };
  


  // Get all users
export const getAll = async (req, res) => {
    try {
      // Find all users
      const users = await User.find();
  
      // Respond with the array of user details
      res.status(200).json(users);
    } catch (error) {
      // Handle specific Mongoose validation errors
      if (error.name === "ValidationError") {
        const errors = Object.values(error.errors).map((err) => err.message);
        return res.status(400).json({ message: "Validation error", errors });
      }
  
      // Handle other Mongoose-specific errors
      if (error.name === "CastError") {
        return res.status(400).json({ message: "Invalid data type for ID" });
      }
  
      // Handle other errors
      res.status(500).json({ message: "Internal server error", error: error.message });
    }
  };
  