import React from 'react';
import LabelCard from '../../LabelCard/LabelCard';
import styles from './RegionCardHeader.module.scss';
import Identicon from '@polkadot/react-identicon';


interface RegionCardHeaderProps {
    cardName: string;   //Card Name
    startTime: string;  //start time value and time
    endTime: string;    //end time value and time
    coreIndex: string;
    coreHours: string;
}

const RegionCardHeader: React.FC<RegionCardHeaderProps> = ({cardName, startTime, endTime, coreIndex, coreHours}) => {

    return (
        <>
      <div className={styles["regionCardHeaderWrapper"]}>
        <Identicon value='16ccn3xe5tAeR8kvzCRTcqHZjMJHvuF2pnLfTqyF1EmMusCU' size={80} />
        <div className={styles["regionCardHeaderWrapper-data"]}>
            <h5>{cardName}</h5>
            <p>{startTime} | {endTime}</p>
        </div>
      </div>
      <div className={styles["regionCardHeaderWrapper-labels"]}>
        <LabelCard textColor='dark' variant='primary' color='gray5' label={coreIndex} />
        <LabelCard variant='primary' color='greenPrimary' label={coreHours} />
      </div>
      </>
    );
  };

export default RegionCardHeader;
