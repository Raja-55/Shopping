import React, { useState } from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewCollections from '../Components/NewCollections/NewCollections'
import NewsLetter from '../Components/NewsLetter/NewsLetter'

const Shop = () => {
  // Hardcode the data for Popular items
  const [popular, setPopular] = useState([
    { id: 1, name: 'Popular Item 1', price: 100, imageUrl: 'url_to_image_1' },
    { id: 2, name: 'Popular Item 2', price: 150, imageUrl: 'url_to_image_2' },
    { id: 3, name: 'Popular Item 3', price: 200, imageUrl: 'url_to_image_3' },
    // Add more items as needed
  ]);

  // Hardcode the data for New Collections
  const [newcollection, setNewCollection] = useState([
    { id: 1, name: 'New Collection 1', price: 200, imageUrl: 'url_to_image_1' },
    { id: 2, name: 'New Collection 2', price: 250, imageUrl: 'url_to_image_2' },
    { id: 3, name: 'New Collection 3', price: 300, imageUrl: 'url_to_image_3' },
    // Add more items as needed
  ]);

  return (
    <div>
      <Hero />
      <Popular data={popular} />
      <Offers />
      <NewCollections data={newcollection} />
      <NewsLetter />
    </div>
  );
};

export default Shop;

