import {
  create,
  getAll,
  getOne,
  deleteUser,
  login,
  register,
  update,
  logout
} from "../controllers/userController.js";
import express from "express";
import auth from "../middlewares/auth.js";
const route = express.Router();

route.post("/create", create);
route.get("/getall",getAll);
route.get("/getone/:id", getOne);
route.put("/update/:id",update);
route.delete("/delete/:id", deleteUser);

route.post("/register", register);
route.post("/login", login);
route.post("/logout", auth, logout);

export default route;
