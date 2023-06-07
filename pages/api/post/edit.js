import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(요청,응답){
    if(요청.method == "POST"){
        console.log(요청.body)
        let article = {title : 요청.body.title,content: 요청.body.content}
        try {
           
            let db = (await connectDB).db("forum");
            let result = await db.collection('post').updateOne({_id :new ObjectId(요청.body._id)},{$set: article})
            응답.writeHead(302, { Location: '/list' });
            응답.end(); 
        } catch (error) {
            응답.status(500).json("에러가 발생했습니다.")
        }
    }
}