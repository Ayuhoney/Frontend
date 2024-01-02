
import { products } from "./contest/data.js"
import Product from "./model/productSchema.js";

const DefaultData = async()=>{

     try {
         await Product.insertMany(products);
         console.log("data imported Successfully");

     } catch (error) {
         console.log(error.massage);
     }

}
export default DefaultData;