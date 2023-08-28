import mongoose,{Schema} from "mongoose";

const schema = new Schema({
    name : String,
    age : Number,
    email : String,
    empid : Number
});

const UserModel = mongoose.model("Assignment",schema);

export default UserModel;