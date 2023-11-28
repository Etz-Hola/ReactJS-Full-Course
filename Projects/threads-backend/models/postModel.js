import mongoose from "mongoose";

const postSchema = mongoose.Schema(
    {
        postedBy : {
            type: 
        }
    }
)

const Post = mongoose.model("Post", postSchema);
export default Post;