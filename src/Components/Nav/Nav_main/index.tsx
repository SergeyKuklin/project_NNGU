import React from 'react';
import styles from './style.module.scss';

export const NavMain = () => {
  return (
        <>
            <div className={styles.block}>
                <a href="" data-text="ГЛАВНАЯ" className={styles.nav}>ГЛАВНАЯ</a>
                <a href="" data-text="ПИТАНИЕ" className={styles.nav}>ПИТАНИЕ</a>
                <a href="" data-text="НОЧЛЕГ" className={styles.nav}>НОЧЛЕГ</a>
                <a href="" data-text="РАЗВЛЕЧЕНИЕ" className={styles.nav}>РАЗВЛЕЧЕНИЕ</a>
            </div>
        </>
  );
};
