import mongoose from "mongoose";

// interface IUser extends mongoose.Document {
//   full_name: string;
//   email: string;
//   password: string;
// }

const UserSchema = new mongoose.Schema(
    {
        full_name: {
            type: String,
            required: true
        },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true }
    },
    { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;
