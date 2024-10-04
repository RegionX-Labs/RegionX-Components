import React from 'react';
import Slider from '../../Slider/Slider';
import styles from './RegionCardProperties.module.scss';

interface RegionCardPropertiesProps {
    task: string;
    coreOcupaccy: number;
    consumed: number;
    currentUsage?: number;
    typeMarketplace?: boolean;
}

const RegionCardProperties: React.FC<RegionCardPropertiesProps> = ({task, coreOcupaccy, consumed, currentUsage, typeMarketplace = false}) => {

    return (
        <>
        <span className={styles["disancer"]}></span>
            <p className={styles["RegionCardProperties-headline"]}>Task: {task}</p>
            <div className={styles["RegionCardProperties-slider"]}>
                <Slider initialValue={coreOcupaccy} disabled />
                <p><b>{coreOcupaccy}%</b> Core ocupaccy</p>
            </div>
            <div className={styles["RegionCardProperties-slider"]}>
                <Slider initialValue={consumed} disabled />
                <p><b>{consumed}%</b> Consumed</p>
            </div>
            {!typeMarketplace ? ( 
            <div className={styles["RegionCardProperties-slider"]}>
                <Slider initialValue={currentUsage} disabled />
                <p><b>{currentUsage}%</b> Current usage</p>
            </div>)
            : null
            }
        <span className={styles["disancer"]}></span>
        </>
    );
  };

export default RegionCardProperties;
