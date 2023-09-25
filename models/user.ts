import mongoose, { Schema, model, models, Types } from "mongoose";

interface IUser {
    email: string;
    username: string;
    image?: string;
}

const userSchema = new Schema<IUser>({
    email:{
        type:String,
        lowercase:true,
        unique: true,
        required: true
    },
    username:{
        type:String,
        lowercase:true,
        required:true,

    },
    image:{
        type:String
    }
});

const User = models.User || model<IUser>('User', userSchema)

export default User