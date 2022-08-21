import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';

const CategoryPage = () => {
  const { category } = useParams();
  const [filter, setFilter] = useState(["category", "==", `${category}`])

  useEffect(() => {
    setFilter(["category", "==", `${category}`])
  }, [category]);


  return (
    <div className="pageContainer">
      <ItemListContainer title={category} filters={filter}/>
    </div>
  )
}

export default CategoryPage