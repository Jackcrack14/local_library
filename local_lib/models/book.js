const mongoose = require('mongoose')

const Schema = mongoose.Schema

const BookSchema = new Schema({
    title: {type:String },
    author:{type:Schema.Types.ObjectId,ref:"Author"},
    summary:{type:String},
    isbn:{type:String},
    genre:[{type:Schema.Types.ObjectId}]


})

BookSchema.virtual("url").get(function (){
    return `/catalog/book/${this._id}`
})


module.exports = mongoose.model("Book",BookSchema)