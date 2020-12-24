import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    
    name: {type: String, },
    email: {type: String, required: true, unique:true, dropDups: true },
    password: {type: String, required:true},
 // isAdmin: {type: Boolean,   default: false}
},
{
    timestamps: true,
}
)
 
  
const User = mongoose.model("User", userSchema);

export default User;   