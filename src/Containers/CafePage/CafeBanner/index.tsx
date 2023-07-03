import React from 'react';
import styles from './styles.module.scss';
import { Nav } from '../../../Components/Nav';

export const CafeBanner = () => {
  return (
        <>
            <div className={styles.container}>
                <div className={styles.menu}>
                    <Nav />
                </div>
                <div className={styles.content}>
                    <div className={styles.container_2}>
                        <div>
                            <div className={styles.block_1}>
                                <div></div>
                                <div></div>
                            </div>
                            <div className={styles.block_2}>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                        <div className={styles.text}>перекусить</div>
                        <div className={styles.flip_block}>
                            <div className={styles.block_1}>
                                <div></div>
                                <div></div>
                            </div>
                            <div className={styles.block_2}>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
  )
}
