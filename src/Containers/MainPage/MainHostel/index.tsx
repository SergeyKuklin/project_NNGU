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
                    <div>
                        <p>&quot;Уютный и бюджетный хостел - идеальное место для приятного отдыха и знакомства с новыми путешественниками&quot;</p>
                    </div>
                    <div>
                        <p>&quot;Идеальный выбор для путешественников, ищущих центральное расположение и доступные цены.&quot;</p>
                    </div>
                </div>
                <div className={styles.block_4}>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
  );
};
