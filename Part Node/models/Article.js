const mongoose = require('mongoose')
const Schema = mongoose.Schema



// TartorAxtrar
const TartorAxtrar = new Schema({
    title:{type:String , required:true},
    name:{type:String , required:true},
    price:{type:String , required:true},
    avatar:String
})
const Article = mongoose.model('breakfast',TartorAxtrar)




// MainDishes
const MainDishes = new Schema({
    title:{type:String , required:true},
    name:{type:String , required:true},
    price:{type:String , required:true},
    avatar:String
})
const MainDish = mongoose.model('Main Dishes',MainDishes)




// JoisDrinks
const JoisDrinks = new Schema({
    title:{type:String , required:true},
    name:{type:String , required:true},
    price:{type:String , required:true},
    avatar:String
})
const JoisDrin = mongoose.model('Drinks',JoisDrinks)

// BacerDesserts
const BacerDesserts = new Schema({
    title:{type:String , required:true},
    name:{type:String , required:true},
    price:{type:String , required:true},
    avatar:String
})
const BacerDesse = mongoose.model('Desserts',BacerDesserts)

// BookTable
const BookTable = new Schema({
    data:{type:String , required:true},
    time:{type:String , required:true},
    name:{type:String , required:true},
    phone:{type:String , required:true},
    total:{type:String , required:true},
})
const BookT = mongoose.model('Tables',BookTable)


module.exports={
    Article,
    MainDish,
    JoisDrin,
    BacerDesse,
    BookT         
}