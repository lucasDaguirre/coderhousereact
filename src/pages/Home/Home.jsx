import { useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
const Home = () => {  
  return (
    <>
      <Hero/>
      <div className="pageContainer">
        <ItemListContainer title="Productos Destacados" filters={[]}/>
      </div>
    </>
  )
}

export default Home