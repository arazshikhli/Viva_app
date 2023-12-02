const {Schema,model,Types}=require('mongoose');


const TodoSchema=new Schema({
    title:{type:String,
        required:true,
        },
    completed:{type:Boolean,default:false},
    user:{type:Types.ObjectId,ref:'User'}
})

module.exports=model('Todo',TodoSchema)