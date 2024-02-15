import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            min: 3,
            max: 20,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            max: 50,
        },
        password: {
            type: String,
        },
        image: {
            type: String,
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
)

const categorySchema = mongoose.Schema({
        name: {            
            type: String,
            required: true,
        },
        slug: {            
            type: String,
            required: true,
            unique: true
        },
        image: {
            type: String
        },
        text: {
            type: String,
            required: true
        },
        sort: {
            type: Number
        }
    },
    { timestamps: true }
)

const productsSchema = mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    price: {
        type: Number
    },
    slug: {
        type: String, 
        required: true, 
        unique: true
    },
    description: {
        type: String, 
        required: true
    },
    discount: {
        type: Number
    },
    image: {
        type: String
    },
    images: [],
    itemName: {
        type: String, 
        required: true
    },
    hit: {
        type: Boolean
    },
    characteristics: [],
    category: {
        type: String, 
        required: true
    },
    categories: [{
        name: {type: String},
        slug: {type: String},
        itemName: {type: String},
    }]
    }, 
    {timestamps: true}
)

export const User = mongoose.models?.User || mongoose.model("User", userSchema)
export const Category = mongoose.models?.Category || mongoose.model("Category", categorySchema)
export const Products = mongoose.models?.Products || mongoose.model("Products", productsSchema)
