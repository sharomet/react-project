import mongoose from 'mongoose'

const Schema = mongoose.Schema;

export interface IUser extends mongoose.Document {
    name: String;
    email: String;
    role: String;
    password: String;
};

export const UserSchema = new Schema({
    name: {
        type: String,
        required: 'Enter a name'
    },
    email: {
        type: String
    },
    role: {
        type: String
    },
    password: {
        type: String
    }
});