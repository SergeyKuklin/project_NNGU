import React from 'react';
import styles from './style.module.scss';

export const Nav = () => {
  return (
        <>
            <div className={styles.block}>
                <a href="" data-text="ГЛАВНАЯ">ГЛАВНАЯ</a>
                <a href="" data-text="ПИТАНИЕ">ПИТАНИЕ</a>
                <a href="" data-text="НОЧЛЕГ">НОЧЛЕГ</a>
                <a href="" data-text="РАЗВЛЕЧЕНИЕ">РАЗВЛЕЧЕНИЕ</a>
            </div>
        </>
  );
};
