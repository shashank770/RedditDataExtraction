import React, { useState } from 'react';
import styles from './Pollslider.module.css'
function PollSlider() {
  const [pollValue, setPollValue] = useState(0);

  const handleSliderChange = (event) => {
    setPollValue(event.target.value);
  };

  return (
    <div className={styles.pollcontainer}>
    <div className={styles.pollslider}>
      <input
        type="range"
        min="0"
        max="10"
        step="1"
        value={pollValue}
        onChange={handleSliderChange}
        className={styles.pollinput}
        aria-label="Poll Scale"
      />
      </div>
      <div className={styles.pollvalues}>
        <span>0 (Rarely)</span>
        <span>{pollValue}</span>
        <span>10 (Always)</span>
      </div>
    </div>
  );
}

export default PollSlider;
