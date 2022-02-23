import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    creator: String,
    message: String,
    name: String,
    title: String,
    
    createdAt: {
        type: Date,
        default: new Date(),
    },
    comments: {
        type: [String],
        defualt: [],
    },
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;