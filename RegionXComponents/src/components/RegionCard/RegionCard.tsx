import React from 'react';
import './RegionCard.scss';
import RegionCardHeader from './RegionCardHeader/RegionCardHeader';
import RegionCardTasks from './RegionCardTasks/RegionCardTasks';
import LabelCard from '../LabelCard/LabelCard';

interface RegionCardProps {
}

const RegionCard: React.FC<RegionCardProps> = ({}) => {

    return (
        <div className='regionCardWrapper'>
            <RegionCardHeader cardName='Card Name 1' startTime='Start in 1 hr' endTime='End in 9 hr' coreIndex='Core index: 234' coreHours='4 hours' />
            <RegionCardTasks coreOcupaccy={30} consumed={24} currentUsage={69} />
            <div className='regionCardWrapper-labels'>
            <LabelCard label='Renewable' color='yellowDark' variant='primary' />
            <LabelCard label='Coretime Chain' color='purpleDark' variant='primary'  />
            </div>
        </div>
    );
  };

export default RegionCard;
