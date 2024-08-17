import mongoose from "mongoose";

const nogaModel = mongoose.Schema({
    name: String,
    age: Number,
    id: Number,
 });

// important note -
//    if `{autoCreate: false}` and collectionName (3rd+4th params) are NOT mentioned,
//    will auto-create another collection (table) instead of using an existing table pre-created~!
const myCollection =
    mongoose.model("nogaPeople", nogaModel, "nogaPeople", {autoCreate: false});

export default myCollection;
