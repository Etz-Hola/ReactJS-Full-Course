const mongoose = require ("mongoose");

const userSchema = mongoose.Schema(
    {
        name: {
            type: 'string',
            required: true
        },
        username: {
            type: 'string',
            required: true,
            unique: true
        },
        email: {
            type: 'string',
            required: true,
            unique: true,
        },
        password: {
            type: 'string',
            minLenght: 6,
            required: true
        },
        profilePic: {
            type: "String",
            default: "",
        },
        followers: {
            type: [String],
            default: []
        },
        bio: {
            type: 'String',
            default: "",
        },
        isFrozen: {
            type: 'Boolean',
            default: false,
        },
    },
    {timestamps: true}
)

const User = mongoose.model("User", userSchema);

module.export = User;