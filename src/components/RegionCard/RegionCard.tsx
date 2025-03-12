import React from 'react';
import styles from './RegionCard.module.scss';
import RegionCardHeader from './RegionCardHeader/RegionCardHeader';
import RegionCardProperties from './RegionCardProperties/RegionCardProperties';
import LabelCard from '../LabelCard/LabelCard';
import Button from '../Button/Button';
import { RegionData } from '../../types/types';

interface RegionCardProps {
    typeMarketplace?: boolean; // Is the region listed on a marketplace
    ownedRegion?: boolean; // Is the region owned by the user (determines whether to show 'purchase' or 'unlist')
    selected?: boolean;
    regionData: RegionData;
    task: string;
}

const RegionCard: React.FC<RegionCardProps> = ({task, typeMarketplace, ownedRegion, selected, regionData}) => {

    return (
        <div className={styles["regionCardWrapper"]} onClick={regionData.onClick} style={{backgroundColor: selected ? `var(--lightGray)` : 'white'}}>
            <RegionCardHeader 
                name={regionData.name} 
                regionStart={regionData.regionStart} 
                regionEnd={regionData.regionEnd} 
                coreIndex={regionData.coreIndex} 
                duration={regionData.duration} 
            />
            <RegionCardProperties 
                task={task}
                typeMarketplace={typeMarketplace} 
                coreOcupaccy={regionData.coreOcupaccy} 
                consumed={regionData.consumed} 
                currentUsage={regionData.currentUsage} 
            />
            { !typeMarketplace && regionData.chainLabel && regionData.chainColor ? 
                <div className={styles["regionCardWrapper-labels"]}>
                    <LabelCard label='Renewable' color='yellowDark' variant='primary' />
                    <LabelCard label={regionData.chainLabel} color={regionData.chainColor} variant='primary'  />
                </div>
                : 
                <Button onClick={!ownedRegion ? regionData.onUnlist : regionData.onPurchase} color='gray3'>{!ownedRegion ? 'Unlist' : 'Purchase'}</Button>
            }
        </div>
    );
  };

export default RegionCard;
