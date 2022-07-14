import React, { useContext } from 'react';
import { CatWrapper } from '../context/CatAppContext';
import styles from './Sidebar.module.css';
import { Link } from 'react-router-dom';

function Sidebar() {
  const { categories } = useContext(CatWrapper);

  return (
    <div className={styles.categoryContainer}>
      {categories?.map((e) => {
        return (
          <Link key={e.id} to={`/${e.id}`}>
            <div key={e.id} className={styles.categoryItem}>
              {e.name}
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Sidebar;
