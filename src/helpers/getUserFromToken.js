import jwt from "jsonwebtoken";

// This function gets email from JWT token
export default function getUserFromToken(token) {
    try {
        const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
        console.log(decodedToken)
        return decodedToken.email;
    } catch (error) {
        throw new Error(error.message);
    }
}
