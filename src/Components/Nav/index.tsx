import React from 'react';
import styles from './style.module.scss';

export const Nav = () => {
  return (
        <>
            <div className={styles.main_nav}>
                <a href="" data-text="ГЛАВНАЯ" className={styles.nav}>ГЛАВНАЯ</a>
                <a href="" data-text="Перекусить" className={styles.nav}>Перекусить</a>
                <a href="" data-text="поспать" className={styles.nav}>поспать</a>
                <a href="" data-text="прогуляться" className={styles.nav}>прогуляться</a>
            </div>
        </>
  );
};
