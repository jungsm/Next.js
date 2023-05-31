import Age from "./data"


export default function Cart() {
  let 장바구니 = ['Tomatoes', 'Pasta']
    return (
      <div>
        <h4 className="title">Cart</h4>
       <CartItem item={장바구니[0]} />
       <CartItem item={장바구니[1]} />
       <Banner content="현대카드" />
       <Banner content="롯데카드" />
       <Button color="blue" />
      </div>
    )
  } 

  function Banner(props) {
    return (
      <h4>{props.content}결제행사중</h4>
    )
  }
  function Button(props){
    return(
      <button className="red-button" style={{ background : props.color}}>버튼</button>
    )
  }

  function CartItem(props) {
    return (
        <div className="cart-item">
        <p>상품명{props.item}</p>
        <p>$40{props.item}</p>
        <p>1개</p>
      </div>
    )
  }