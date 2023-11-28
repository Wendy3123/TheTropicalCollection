import JWT from "json-web-token";
import User from "../models/userModel.js";

//checks for token to authorize user
//auth will show ('Bearer 2h23h44j4') , we split the string where the space is at and gets the item at index [1]
const authorize = async (req, res, next) => {
  console.log(req.headers);
  const auth = req.headers?.authorization;
  const token = auth?.split(" ")[1];
  try {
    if (token) {
      const decoded = await JWT.decode(process.env.JWT_SECRET, token);
      const user = await User.findById(decoded.value.id).populate({
        path: "cartItems.product",
        model: "Product",
      });
      req.user = user;
    }
    next();
  } catch (error) {
    console.log("auth error:", error);
  }
};

export default authorize;
