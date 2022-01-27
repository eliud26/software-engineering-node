import mongoose from "mongoose";
import User from '../models/User'
const TuitSchema = new mongoose.Schema({
    username: {type: String, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    profilePhoto: String,
    post: String,
    likes: Number,
    hashTag: String,
    bookMark: String,
    date: {type: Date, default: Date.now},
}, {collection: 'tuits'});
export default TuitSchema;