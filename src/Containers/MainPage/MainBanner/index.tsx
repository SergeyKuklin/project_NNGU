import React from 'react';
import styles from './styles.module.scss';
import { NavMain } from '../../../Components/Nav/Nav_main';

export const MainBanner = () => {
  return (
    <>
        <div className={styles.page}>
          <div className={styles.block}>
            <div className={styles.block_1}>
              <NavMain />
              <h2>Главная</h2>
            </div>
            <div className={styles.block_2}></div>
            <div className={styles.block_3}>
              <p>Нижний Новгород — столица Поволжья и пятый по численности мегаполис России, ведущий свою историю с XIII века. Великолепный старорусский город расположен на месте встречи рек Оки и Волги в центральной части Восточно-Европейской равнины, в 400 километрах на восток от Москвы.</p>
            </div>
            <div className={styles.block_4}>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
    </>
  );
};
