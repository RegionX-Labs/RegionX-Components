// src/components/Slider/Slider.tsx
import React, { useState } from 'react';
import './Slider.scss';

interface SliderProps {
  min?: number;
  max?: number;
  step?: number;
  initialValue?: number;
}

const Slider: React.FC<SliderProps> = ({ min = 0, max = 100, step = 1, initialValue = 50 }) => {
  const [value, setValue] = useState(initialValue);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
  };

  return (
    <div className="sliderWrapper">
      <div className="sliderWrapper-tooltip" style={{ left: `calc(${value}% + 5px)` }}>
        {value}
      </div>

      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        className="rangeInput"
        onChange={handleSliderChange}
      />

      <div className="sliderWrapper-track">
        <div
          className="sliderWrapper-filled"
          style={{ width: `${(value / max) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Slider;
