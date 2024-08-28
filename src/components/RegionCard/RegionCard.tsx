import React from 'react';
import './RegionCard.scss';
import RegionCardHeader from './RegionCardHeader/RegionCardHeader';
import RegionCardTasks from './RegionCardTasks/RegionCardTasks';
import LabelCard from '../LabelCard/LabelCard';
import Button from '../Button/Button';
import { RegionCardData } from '../../types/types';

interface RegionCardProps {
    typeMarketplace?: boolean;
    ownedRegion?: boolean;
    regionCardData: RegionCardData;
}

const RegionCard: React.FC<RegionCardProps> = ({typeMarketplace, ownedRegion, regionCardData}) => {

    return (
        <div className='regionCardWrapper'>
            <RegionCardHeader cardName={regionCardData.cardName} startTime={regionCardData.startTime} endTime={regionCardData.endTime} coreIndex={regionCardData.coreIndex} coreHours={regionCardData.coreHours} />
            <RegionCardTasks typeMarketplace={typeMarketplace} coreOcupaccy={regionCardData.coreOcupaccy} consumed={regionCardData.consumed} currentUsage={regionCardData.currentUsage} />
            { !typeMarketplace && regionCardData.chainLabel && regionCardData.chainColor ? 
            (<div className='regionCardWrapper-labels'>
            <LabelCard label='Renewable' color='yellowDark' variant='primary' />
            <LabelCard label={regionCardData.chainLabel} color={regionCardData.chainColor} variant='primary'  />
            </div>) : (
                <Button onClick={regionCardData.onClick} color='gray3'>{!ownedRegion ? 'Unlist' : 'Purchase'}</Button>
            )
            }
        </div>
    );
  };

export default RegionCard;
