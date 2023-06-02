export default function Login(){
    return (
        <div className="p-20">
        <h4>회원가입</h4>
        <form action="/api/post/login" method="POST" >
            <input name="id" placeholder="아이디" />
            <input name="password" placeholder="비밀번호" />
        <button type="submit">버튼</button>
        </form>
        </div>
    )
}