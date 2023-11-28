import mongoose from "mongoose";

const postSchema = mongoose.Schema(
    {
        postedBy : {
            type: mongoose.Types.ObjectId,
            ref: "User",
            required: true
        },
        text: {
            type: String,
            maxLength: 500
        },
        img: {
            type: String,String
        },
        likes: {
            //array containing the user ids
            type: [mongoose.Schema.Types.ObjectId],
            ref: "User",
            require: true
        },
        replies: [
            {
                userId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "User",
                    require: true
                },
                text: {
                    type: String,
                    required: true
                },
                userProfilePic : {
                    type: String
                },
                username: {
                    typepe: String
                },
              

                }
            }
        ]
    }
)

const Post = mongoose.model("Post", postSchema);
export default Post;