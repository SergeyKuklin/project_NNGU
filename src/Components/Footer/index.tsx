import React from 'react';
import styles from './styles.module.scss';

export const Footer = () => {
  return (
        <>
            <div className={styles.container}>
                <div className={styles.block_1}>

                        <a href="">Главная</a>
                        <a href="">Перекусить</a>
                        <a href="">поспать</a>
                        <a href="">прогуляться</a>

                </div>
                <div className={styles.block_2}>

                        <a href="">Связаться с нами</a>
                        <a href="">Узнать больше</a>
                        <a href="">telegram</a>
                        <a href="">вконтакте</a>

                </div>
            </div>
        </>
  )
}
