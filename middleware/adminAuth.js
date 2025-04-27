import jwt from "jsonwebtoken";

// Admin Auth
const adminAuth = async (req, res, next) => {
  try {
    const { token } = req.headers;

    if (!token) {
      res.json({ success: false, message: "Not Authorized Login Again!" });
    }
  } catch (error) {}
};
