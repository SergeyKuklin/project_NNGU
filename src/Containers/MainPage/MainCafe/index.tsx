import React from 'react';
import styles from './styles.module.scss';

export const MainCafe = () => {
  return (
        <>
        <div className={styles.container}>
            <div className={styles.block}>
                <div className={styles.block_1}>
                    <div className={styles.main_button}>
                        <a href="" className={styles.btn}>
                            Рестораны и кафе
                        </a>
                    </div>
                    <p>Множество заведений, которые сильно различаются по внешнему виду и предложениям, включая большое разнообразие кухонь и видов обслуживания.</p>
                </div>
                <div className={styles.block_2}>
                    <div></div>
                    <div></div>
                </div>
                <div className={styles.block_3}>
                    <div></div>
                    <div></div>
                </div>
                <div className={styles.block_4}>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
        </>
  );
};
