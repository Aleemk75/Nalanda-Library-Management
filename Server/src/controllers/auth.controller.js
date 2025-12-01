import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { jwtConfig } from '../configs/jwt.js';
import User from '../models/user.model.js';
import { encryptToken } from "../utils/encrypt.decrypt.jwt.js"


//Generate Token 

export const register = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: 'Name, email, and password are required'
            });
        }

        const isUserExists = await User.findOne({ email });
        
        if (isUserExists) {
          return res.status(400).json({
                success: false,
                message: 'User already exists'
            })
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create user
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            role: role || 'Member'
        });

        const token = jwt.sign(
            { id: user._id, role: user.role },
            jwtConfig.secret,
            { expiresIn: jwtConfig.expiresIn });

        const encryptedToken = encryptToken(token);
        console.log(encryptedToken);

        res.status(201).json({
            success: true,
            message: 'User registered successfully',
            data: {
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    role: user.role
                },
                token: encryptedToken
            }
        });


    } catch (error) {
        console.log('Error in register controller:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        });
    }
}


 export const login = async (req, res) => {
try {
     const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: 'Email and password are required'
            });
        }
        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'Invalid credentials'
            });
        }

        // Check if user is active
        if (!user.isActive) {
            return res.status(401).json({
                success: false,
                message: 'Account is deactivated. Please contact admin.'
            });
        }

        // Verify password
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(401).json({
                success: false,
                message: 'Invalid credentials'
            });
        }

        // Generate token
        const token = jwt.sign(
            { id: user._id, role: user.role },
            jwtConfig.secret,
            { expiresIn: jwtConfig.expiresIn }
        );

        // Encrypt token
        const encryptedToken = encryptToken(token);

        res.status(200).json({
            success: true,
            message: 'Login successful',
            data: {
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    role: user.role
                },
                token: encryptedToken
            }
        });
} catch (error) {
    console.log('Error in login controller:',error);
     res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        });
}
 }