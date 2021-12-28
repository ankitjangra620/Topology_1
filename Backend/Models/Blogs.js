
var mongoose=require("mongoose");
var BlogSchema=new mongoose.Schema({
      Author:{
		id:{
			type:mongoose.Schema.Types.ObjectId,
			ref:"User"
		},
		username:String,
            avatar:Buffer
	},
      Discuss:[
	      {
	            type:mongoose.Schema.Types.ObjectId,
	            ref:"Discuss"
            }
	],
      Title:{
            type:String,
            required:true
      },
      Description:{
            type:String,
            required:true
      },
      Likes:{
            type:number,
            default:0
      },
      Date: {
        type: Date, 
        default: Date.now
    }
})
module.exports=mongoose.model("Blogs",BlogSchema)