import mongoose from "mongoose";

const GaransiSchema = new mongoose.Schema (
    {
        productName : {
            type : String,
            trim : true,
            required : true
        },
        purchaseDate : {
            type : Date,
            required : true
        },
        expiryDate : {
            type : Date,
            trim : true,
            required : true
        }
    },
    {
        timestamps : true
    }
)

const garansiModel = new mongoose.model("garansi", GaransiSchema);
export default garansiModel;