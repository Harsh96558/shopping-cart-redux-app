import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product"

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const [loading, setLoading] =useState(false)
  const [item, setitems] =useState([])


  async function fetchProductData(){
    setLoading(true);

    try {

      const res=await fetch(API_URL)
      const data= await res.json()
      setitems(data)
      
    } catch (error) {
      console.log("Error in fetching Data")
      setitems([])
      
    }
    setLoading(false);
    
  }

  useEffect(()=>{
    fetchProductData()

  },[])

  return (
  <div>
    {
      loading ? (<Spinner/>):(
      item.length > 0 ?(<div className="grid md:grid-cols-3 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl p-2 mx-auto  space-x-5 space-y-10 min-h-[80vh]">
        {
          item.map ((item)=>(
        <Product key={item.id} item={item}/>
      ))
        }
      </div>):(<div className=" flex justify-center items-center"> <p>No Post Available</p> </div>)
      )
    }
  </div>
  )
};

export default Home;
