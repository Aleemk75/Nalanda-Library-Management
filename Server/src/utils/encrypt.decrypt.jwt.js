import CryptoJS from 'crypto-js';
import { jwtConfig } from '../configs/jwt.js';

//without encript 
// JWT is NOT encrypted by default, only signed.
// Anybody can decode the payload
// They can see: userId, role, exp, etc.

// Encrypt JWT token
export const encryptToken = (token) => {
    try {
        const encrypted = CryptoJS.AES.encrypt(token, jwtConfig.encryptionKey).toString();
        return encrypted;
    } catch (error) {
        throw new Error('Token encryption failed');
    }
};

// Decrypt JWT token
export const decryptToken = (encryptedToken) => {
    try {
        const decrypted = CryptoJS.AES.decrypt(encryptedToken, jwtConfig.encryptionKey);
        const token = decrypted.toString(CryptoJS.enc.Utf8);
        if (!token) {
            throw new Error('Invalid encrypted token');
        }
        return token;
    } catch (error) {
        throw new Error('Token decryption failed');
    }
};