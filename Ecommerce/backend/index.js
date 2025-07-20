import express from "express";
import cors from "cors";
import { connection } from "./db/dbconnection.js";

// Routes
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.route.js";
import cartRoutes from "./routes/cart.route.js";

const app = express();

app.use(cors());
app.use(express.json());

connection

// Middlewares
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/cart", cartRoutes);
app.get("/", (req, res) => {
  res.send("🚀 Welcome to the E-commerce API");
});

app.listen(5000, () => console.log(` Server running`));
