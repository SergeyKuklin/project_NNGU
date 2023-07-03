import React from 'react';
import styles from './styles.module.scss';
import { MainButton } from '../../../Components/MainButton';

export const MainBar = () => {
  return (
        <>
            <div className={styles.container}>
                <div className={styles.block}>
                    <div className={styles.block_1}>
                    <div className={styles.main_button}>
                        <a href="" className={styles.btn}>
                            Бар
                        </a>
                    </div>
                    <p>Бар - отличное завершение вечера</p>
                    </div>
                    <div className={styles.block_2}>
                        <div></div>
                        <div></div>
                    </div>
                    <div className={styles.block_3}>
                        <div></div>
                        <div></div>
                    </div>
                    <div className={styles.block_4}>4</div>
                </div>
            </div>
        </>
  )
}
