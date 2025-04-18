import axios from "axios";
import jwt from "jsonwebtoken";
// import { OAuth2Client } from "google-auth-library";
import { verifyGoogleToken} from "../utils/googleClient.js";
import User from "../models/userModel.js";

/* GET Google Authentication API. */
export const googleAuth = async (req, res, next) => {
    const token  =  req.query.code;
    console.log("Token from Google: ", token);

    try {
      const userData = await verifyGoogleToken(token);
      res.status(200).json({ success: true, user: userData });
    } catch (err) {
        console.log(err);
      res.status(401).json({ success: false, message: err.message });
    }
};