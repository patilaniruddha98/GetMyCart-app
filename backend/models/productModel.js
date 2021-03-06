import mongoose from "mongoose"
const productSchema = new mongoose.Schema({

            name:{type:String,required:true,unique:true},
            category:{type:String,required:true},
            image:{type:String,required:true},
            price:{type:Number,required:true},
            CountInStock:{type:Number,required:true},
            brand:{type:String,required:true},
            rating:{type:Number,required:true},
            numReviews:{type:Number,required:true},
            decsription:{type:String},

},
{timestamps:true}
)

const Product=mongoose.model("product",productSchema)
export default Product;



