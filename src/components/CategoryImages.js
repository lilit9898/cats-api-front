import React, { useContext, useEffect, useState } from 'react';
import { CatWrapper } from '../context/CatAppContext';
import { useParams } from 'react-router-dom';
import Sidebar from './Sidebar';
import styles from './CategoryImage.module.css';

function CategoryImages() {
  const [categoryImage, setCategoryimage] = useState([]);
  const [page, setPage] = useState(1);
  const [changed, setChanged] = useState(true);
  const { catId } = useParams();
  const { getCategoryImage } = useContext(CatWrapper);

  useEffect(() => {
    getCategoryImage(catId, page).then((res) => {
      const imageList = res;
      changed
        ? setCategoryimage(imageList)
        : setCategoryimage((prevState) => [...prevState, ...imageList]);
    });
  }, [catId, page]);

  const loadMoreHandler = () => {
    setChanged(false);
    setPage(page + 1);
  };

  useEffect(() => {
    setChanged(true);
  }, [catId, page]);

  return (
    <div className={styles.catImagesPageContainer}>
      <Sidebar />
      <div className={styles.CatContentContainer}>
        <div className={styles.catImagecontainer}>
          {categoryImage?.map((item, index) => {
            return (
              <img
                key={index}
                src={item.url}
                alt='cat'
                className={styles.catImage}
              />
            );
          })}
        </div>
        <div className={styles.buttoncontainer}>
          <button className={styles.loadMoreButton} onClick={loadMoreHandler}>
            Load More
          </button>
        </div>
      </div>
    </div>
  );
}

export default CategoryImages;
