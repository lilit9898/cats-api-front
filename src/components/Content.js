import React, { useContext } from 'react';
import { CatWrapper } from '../context/CatAppContext';
import styles from './Content.module.css';

function Content() {
  const { catImage } = useContext(CatWrapper);
  return (
    <div className={styles.catImageContainer}>
      <div>Cats World</div>

      {catImage?.map((img) => {
        return (
          <img
            key={img.id}
            src={img.url}
            alt='Kitten'
            className={styles.catImg}
          />
        );
      })}
    </div>
  );
}

export default Content;
