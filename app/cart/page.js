import Hi from './data'

export default function Cart() {
  let 장바구니 = ['Tomatoes', 'Pasta'];
  return (
    <div>
      <Hi></Hi>
      <h4 className="title">Cart</h4>
        <CartItem item={장바구니[0]} />
        <CartItem item={장바구니[1]} />
        <Button color="red"/>
        <Button color="blue"/>
    </div>
  )
} 
function CartItem(props) {
  return (
    <div className="cart-item">
      <p>{props.item}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  )
}

function Button(props) {
  return (
    <div>
      <button style={{backgroundColor: props.color}}>버튼</button>
    </div>
  )
}