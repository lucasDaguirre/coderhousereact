import { useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
const Home = () => {
  return (
    <div>
      <Hero/>
      <div className="pageContainer">
        <ItemListContainer title="Productos Destacados"/>
      </div>
    </div>
  )
}

export default Home