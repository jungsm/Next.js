import Link from "next/link"

export default function Home() {
  let name = '프로젝트'
  return (
    <div>
      <div className="navbar">
        <Link href="/">홈</Link>
        <Link href="/list">List</Link>
      </div>
      <div className="title">정선문</div>
      <h4 className="title-sub">next.js {name}</h4>
    </div>
  )
}
