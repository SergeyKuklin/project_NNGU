import React from 'react';
import styles from './styles.module.scss';
import { MainButton } from '../../../Components/MainButton';

export const MainHostel = () => {
  return (
        <div className={styles.container}>
            <div className={styles.block}>
                <div className={styles.block_1}>
                    <MainButton />
                    <p>Хостел — бюджетная мини-гостиница, которая в первую очередь рассчитана на молодёжь. Главное отличие от остальных форматов: вам принадлежит только койко-место. Кухня, зона отдыха, ванная и туалеты — всё общее. Это самый экономный вариант для тех, кто не задерживается долго в одном месте.</p>
                </div>
                <div className={styles.block_2}></div>
                <div className={styles.block_3}>
                    <div></div>
                    <div>
                        <p>Хостел один из самых лучших вариантов для путешействий</p>
                    </div>
                    <div>
                        <p>Каждый вариант уникален и подчиняется своим правилам</p>
                    </div>
                    <div></div>
                </div>
                <div className={styles.block_4}>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
  );
};
