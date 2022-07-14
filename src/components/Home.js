import React from 'react';
import Content from './Content';
import Sidebar from './Sidebar';
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.Container}>
      <Sidebar />
      <Content />
    </div>
  );
}

export default Home;
