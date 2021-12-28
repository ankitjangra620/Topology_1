var mongoose=require("mongoose")
var DiscussSchema=new mongoose.Schema({
	text:String,
	author:{
		id:{
			type:mongoose.Schema.Types.ObjectId,
			ref:"User"
		},
		username:String,
            avatar:Buffer
	}
})
module.exports=mongoose.model("Comment",CommentSchema)