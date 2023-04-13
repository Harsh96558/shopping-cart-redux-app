import { useDispatch } from "react-redux";
import {FcDeleteDatabase} from "react-icons/fc"
import {remove} from "../redux/Slices/cartSlice"
import {toast} from "react-hot-toast"

const CartItem = ({ item, itemIndex }) => {
  const dispatch =useDispatch()
  const removeFromCart=()=>{
    dispatch(remove(item.id))
    toast.error("Item Removed")


  }
  
  return <div className="">
    <div className=" flex">
      <div className="h-[250px] w-[40%]   ">
        <img src={item.image} alt="" className=" h-full object-fit w-full " />
      </div>
      <div className="m-2 w-[60%] flex flex-col gap-5 pr-4 pl-4">
        <h1 className="text-center text-gray-700 font-semibold text-lg    mt-1">{item.title}</h1>
        <h1 className=" font-normal text-[10px]  text-center">{item.description.split(" ").slice(0, 30).join(" ") + "..."}</h1>
        <div className="flex items-center pr-4 pl-4 justify-between mt-4">
          <p className="text-green-600 font-semibold p-1">${item.price}</p>
          <div
          onClick={removeFromCart}>

          <FcDeleteDatabase className="text-2xl"/></div>
        </div>
      </div>
    </div>
    <div className="h-[1px] bg-black mt-5"></div>

  </div>;
};

export default CartItem;
