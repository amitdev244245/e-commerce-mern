import JWT from "jsonwebtoken";
import userModel from "../models/userModel";

// Protected routes token based
const requireSignIn = async (req, res, next) => {
    try {
        const verifyToken = JWT.verify(req.headers.authorization, process.env.JWT_SECRET);
        res.user = verifyToken;
        next();
    } catch (error) {
        console.log(error);
    }
}

const isAdmin = async (req, res, next) => {
    try {
        const user = await userModel.findById(req.user._id);
        return (user.role !== 1) ? res.status(401).send({ success: false, message: "Unauthorized access!" }) : next();
    } catch (error) {
        console.log(error);
        res.status(401).send({ success: false, message: "Error in admin middleware!" })
    }
}

export { requireSignIn, isAdmin };