const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
 title: {type:String,required: true},
 description: String,
 image: {
    type:String,
    default:"https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    set: (v)=> v===""? "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60":v},
 price:Number,
 location: String,
 country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;