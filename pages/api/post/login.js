import { connectDB } from "@/util/database";

export default async function handler(요청,응답){
    if(요청.method == "POST"){
        
        if(요청.body.id == ''){
            응답.status(500).json("아이디를 입력해주세요")
        }
        try {           
             const db = (await connectDB).db("forum");
             const collection = db.collection("member");
             const existingUser = await collection.findOne({ id: 요청.body.id });
             if (existingUser) {
               return 응답.status(400).json("이미 존재하는 사용자입니다.");
             }  


             let user = await db.collection('member').insertOne(요청.body);
             응답.redirect(302,'/list')
        } catch (error) {
            응답.status(200).json("에러가 발생했습니다.")
        }
    }
}