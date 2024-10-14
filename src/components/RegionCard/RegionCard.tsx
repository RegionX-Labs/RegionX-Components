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
    salePrice?: string;
    pricePerTimeslice?: string;
}

const RegionCard: React.FC<RegionCardProps> = ({task, typeMarketplace, ownedRegion, selected, regionData, salePrice, pricePerTimeslice}) => {

    return (
        <div className={styles["regionCardWrapper"]} style={{backgroundColor: selected ? `var(--lightGray)` : 'white'}}>
            <RegionCardHeader 
                rawId={regionData.rawId}
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
            {typeMarketplace &&
                <div className={styles["priceWrapper"]}>
                    <h4>Price: {salePrice}</h4>
                    <h4>Per timeslice: {pricePerTimeslice}</h4>
                </div>
            }
            { !typeMarketplace && regionData.chainLabel && regionData.chainColor ? 
                <div className={styles["regionCardWrapper-labels"]}>
                    <LabelCard label='Renewable' color='yellowDark' variant='primary' />
                    <LabelCard label={regionData.chainLabel} color={regionData.chainColor} variant='primary'  />
                </div>
                : 
                <Button fullWidth onClick={regionData.onClick} color='greenPrimary'>{ownedRegion ? 'Unlist' : 'Purchase'}</Button>
            }
        </div>
    );
  };

export default RegionCard;
