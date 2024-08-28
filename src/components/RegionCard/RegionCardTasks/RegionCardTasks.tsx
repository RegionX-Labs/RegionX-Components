import React from 'react';
import Slider from '../../Slider/Slider';
import './RegionCardTasks.scss';

interface RegionCardTasksProps {
    coreOcupaccy: number;
    consumed: number;
    currentUsage?: number;
    typeMarketplace?: boolean;
}

const RegionCardTasks: React.FC<RegionCardTasksProps> = ({coreOcupaccy, consumed, currentUsage, typeMarketplace = false}) => {

    return (
        <>
        <span className='disancer'></span>
            <p className='RegionCardTasks-headline'>Task: Unassinged</p>
            <div className='RegionCardTasks-slider'>
                <Slider initialValue={coreOcupaccy} disabled />
                <p><b>{coreOcupaccy}%</b> Core ocupaccy</p>
            </div>
            <div className='RegionCardTasks-slider'>
                <Slider initialValue={consumed} disabled />
                <p><b>{consumed}%</b> Consumed</p>
            </div>
            {!typeMarketplace ? ( 
            <div className='RegionCardTasks-slider'>
                <Slider initialValue={currentUsage} disabled />
                <p><b>{currentUsage}%</b> Current usage</p>
            </div>)
            : null
            }
        <span className='disancer'></span>
        </>
    );
  };

export default RegionCardTasks;
