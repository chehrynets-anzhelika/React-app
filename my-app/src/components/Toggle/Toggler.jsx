import React from 'react';
import styles from './toggler.scss';

const Toggle = ({ value, onChange }) => (
    <label className={"toggler-text"} htmlFor="toggler">
    Change view
      <input
        id="toggler"
        type="checkbox"
        onClick={onChange}
        checked={value}
        readOnly
      />
      <span className={styles.slider} />
      <span className={styles.wave} />
    </label>
  )
  
  export default Toggle;

