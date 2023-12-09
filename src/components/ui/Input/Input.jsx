import React from 'react';
import styles from './Input.module.scss';

export const Input = ({ style, error_text, ...props }) => {
    return (
        <div className={styles.input_block}>
            <div
                style={style}
                className={`${styles.input_wrapper} ${
                    error_text ? styles.input_wrapper_error : ''
                }`}
            >
                <input className={styles.input} {...props} />
            </div>
            <p className={styles.input_error}>{error_text}</p>
        </div>
    );
};
