import React from 'react';
import styles from './styles.module.scss';
import { ButtonCafe } from '../../../Components/ButtonCafe';

export const CafeOrange = () => {
  return (
        <>
            <div className={styles.container}>
                <div className={styles.block}>
                    <div className={styles.block_1}>
                        <h2>Три апельсина</h2>
                        <p>Традиционная китайская и паназиатская кухня в самом центре Нижнего Новгорода.</p>
                        <ButtonCafe />
                    </div>
                    <div className={styles.block_2}>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </>
  )
}
