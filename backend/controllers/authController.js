import userModel from "../models/userModel.js";
import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import JWT from "jsonwebtoken";

const registerController = async (req, res) => {
    try {
        const { name, email, password, mobile, address } = req.body;

        // check all fields are filled by user or not
        if (!name) {
            return res.send({ error: "Name is required!" });
        }
        if (!email) {
            return res.send({ error: "Email is required!" });
        }
        if (!password) {
            return res.send({ error: "Password is required!" });
        }
        if (!mobile) {
            return res.send({ error: "Mobile is required!" });
        }
        if (!address) {
            return res.send({ error: "Address is required!" });
        }

        // check whether user already exists in database or not
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(200).send({ success: false, error: "User already registered, Please login!" })
        }

        // convert plain password to hash password
        const hashedPassword = await hashPassword(password);

        // register user
        const user = await new userModel({ name, email, password: hashedPassword, mobile, address }).save()
        res.status(201).send({ success: true, message: "User Registered Successfully!", user })

    } catch (error) {
        res.status(500).send({ success: false, error: "Error in Registration", error: error });
    }
}

const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        // check all fields are filled by user or not
        if (!email) {
            return res.send({ error: "Email is required!" });
        }
        if (!password) {
            return res.send({ error: "Password is required!" });
        }

        // check whether user already exists in database or not
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(200).send({ success: true, message: "User not registered, Please register!" })
        }
        // compare password
        const match = await comparePassword(password, user.password);
        if (!match) {
            return res.status(200).send({ success: false, error: "Invalid credentials!" })
        }

        // token
        const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

        // login user
        res.status(200).send({ success: true, message: "User Logged in Successfully!", user: { name: user.name, email: user.email, mobile: user.mobile, address: user.address }, token })

    } catch (error) {
        res.status(500).send({ success: false, error: "Error in Login", error: error });
    }
}

export { registerController, loginController };