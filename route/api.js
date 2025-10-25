import express from "express";
import * as authController from "../controllers/authController.js";
import * as garansiController from "../controllers/garansiController.js";
import { protect } from "../middleware/authMiddleware.js";

const api = express.Router();

api.get("/garansi", protect, garansiController.listGaransi);
api.post("/garansi", protect, garansiController.createNewGaransi);
api.put("/garansi/:id", protect, garansiController.updateGaransi);
api.delete("/garansi/:id", protect, garansiController.deleteGaransi);

api.post('/register', authController.register);
api.post('/login', authController.login);
api.get('/profile', protect, authController.getProfile);

export default api;
