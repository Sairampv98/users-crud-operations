import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization"); // Expecting 'Bearer TOKEN_STRING'

    if (!token) {
      return res.status(401).json({ msg: "No token, authorization denied" });
    }

    const tokenPart = token.split(" ")[1]; // Extract the token part
    const verified = jwt.verify(tokenPart, process.env.JWT_SECRET);
    console.log(`Here is ur ${tokenPart}`);
    const user = await User.findById(verified.id);

    if (!user || user.token !== tokenPart) {
      return res.status(401).json({ msg: tokenPart });
    }

    req.user = verified; // Attach decoded user data to request
    next();
  } catch (err) {
    return res.status(401).json({ msg: err.message });
  }
};

export default auth;
