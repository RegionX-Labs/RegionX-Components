import React from 'react';
import Slider from '../../Slider/Slider';
import styles from './RegionCardTasks.module.scss';

interface RegionCardTasksProps {
    coreOcupaccy: number;
    consumed: number;
    currentUsage?: number;
    typeMarketplace?: boolean;
}

const RegionCardTasks: React.FC<RegionCardTasksProps> = ({coreOcupaccy, consumed, currentUsage, typeMarketplace = false}) => {

    return (
        <>
        <span className={styles["disancer"]}></span>
            <p className={styles["RegionCardTasks-headline"]}>Task: Unassinged</p>
            <div className={styles["RegionCardTasks-slider"]}>
                <Slider initialValue={coreOcupaccy} disabled />
                <p><b>{coreOcupaccy}%</b> Core ocupaccy</p>
            </div>
            <div className={styles["RegionCardTasks-slider"]}>
                <Slider initialValue={consumed} disabled />
                <p><b>{consumed}%</b> Consumed</p>
            </div>
            {!typeMarketplace ? ( 
            <div className={styles["RegionCardTasks-slider"]}>
                <Slider initialValue={currentUsage} disabled />
                <p><b>{currentUsage}%</b> Current usage</p>
            </div>)
            : null
            }
        <span className={styles["disancer"]}></span>
        </>
    );
  };

export default RegionCardTasks;
