"use client"
import { useShopingCartContext } from "./ShopingCartContext"

interface IaddToCardProps{
  id: number
}
function AddToCart({id}:IaddToCardProps) {

const {handleIncreaseProductQty,handleDecreaseProductQty,productQty,handleRemoveProductQty}= useShopingCartContext();

  return (
   <div className="w-40">
     <div className="flex space-x-8 mt-3 mb-2">
    <button onClick={()=>handleIncreaseProductQty(id)} className="bg-[#ff8f9c] rounded px-4 text-white text-xl py-1 active:scale-95 transition duration-150 shadow cursor-pointer">
      +
    </button>

    <span className="text-lg">{productQty(id)}</span>

    <button onClick={()=>handleDecreaseProductQty(id)} className="bg-[#ff8f9c] rounded px-4 text-white text-xl py-1 active:scale-95 transition duration-150 shadow cursor-pointer">
      -
    </button>
  </div>
  <button onClick={()=>handleRemoveProductQty(id)} className="bg-red-500 rounded px-4 text-white text-xl py-1 active:scale-95 transition duration-150 shadow cursor-pointer w-full">Remove</button>
   </div>
  )
}

export default AddToCart 
