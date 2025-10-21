import express from "express";
import * as garansiController from "../controllers/garansiController.js";

const api = express.Router();

api.get("/garansi", garansiController.listGaransi);
api.post("/garansi", garansiController.createNewGaransi);
api.put("/garansi/:id", garansiController.updateGaransi);
api.delete("/garansi/:id", garansiController.deleteGaransi);

export default api;
