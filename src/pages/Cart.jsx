import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";


const Cart = () => {
  const { cart } = useSelector((state) => state)
  console.log(cart)
  console.log('Priniting Cart Data')

  const [totalAmount, setTotalAmount] = useState(0)

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0))
  }, [cart])
  return <div className="max-w-6xl mx-auto p-2 ">
    {
      cart.length > 0 ? (
        <div className=" md:flex p-2">

          <div className=" md:w-[60%]  flex gap-5  flex-col ">
            {
              cart.map((item, index) => {
                return <CartItem key={item.id} item={item} itemIndex={index}></CartItem>
              })
            }

          </div>

          <div className=" md:w-[40%] h-screen   p-4  flex flex-col md:justify-between ">
            <div className="p-4 md:pt-8">
              <div className="text-green-600 text-md font-semibold uppercase ">Your Cart</div>
              <div className="text-green-600 text-5xl font-semibold">Summary</div>
              <p><span>Total Items: { cart.length}</span></p>
            </div>

            <div className="p-4 md:pb-32 ">
              <p>Total Amount:<span className="text-black font-bold">  ${Math.floor(totalAmount)}</span></p>
              <button className=" bg-green-600 py-2 px-8 rounded-full font-bold text-white w-[13rem]">Checkout Now</button>

            </div>

          </div>





        </div>
      ) :
        (
          <div className="flex flex-col h-screen items-center justify-center space-y-2">
            <h1 className="text-lg font-bold">Cart Empty</h1>
            <Link to="/">
              <button className=" bg-green-600 py-2 px-8 rounded-full font-bold text-white w-[13rem]">Shop Now</button>
            </Link>
          </div>
        )
    }

  </div>;
};

export default Cart;
