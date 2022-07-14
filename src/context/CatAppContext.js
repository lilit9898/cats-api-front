import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

export const CatWrapper = createContext();

function CatAppContext({ children }) {
  const [categories, setCategories] = useState([]);
  const [catImage, setCatImage] = useState([]);

  useEffect(() => {
    axios.get('https://api.thecatapi.com/v1/categories').then((res) => {
      const categoryList = res.data;
      setCategories(categoryList);
    });
  }, []);

  useEffect(() => {
    axios.get('https://api.thecatapi.com/v1/images/search').then((res) => {
      const image = res.data;
      setCatImage(image);
    });
  }, []);

  const getCategoryImage = async (catId, page) => {
    const categoryImg = await axios.get(
      `https://api.thecatapi.com/v1/images/search?limit=10&page=${page}&category_ids=${catId}`
    );
    return categoryImg.data;
  };
  const value = { categories, catImage, getCategoryImage };
  return <CatWrapper.Provider value={value}>{children}</CatWrapper.Provider>;
}

export default CatAppContext;
