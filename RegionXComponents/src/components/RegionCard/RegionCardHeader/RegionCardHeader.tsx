import React from 'react';
import LabelCard from '../../LabelCard/LabelCard';
import './RegionCardHeader.scss';
import Identicon from '@polkadot/react-identicon';


interface RegionCardHeaderProps {
    cardImage: string; //Car image URL
    cardName: string;   //Card Name
    startTime: string;  //start time value and time
    endTime: string;    //end time value and time
    coreIndex: string;
    coreHours: string;
}

const RegionCardHeader: React.FC<RegionCardHeaderProps> = ({cardImage, cardName, startTime, endTime, coreIndex, coreHours}) => {

    return (
        <>
      <div className='regionCardHeaderWrapper'>
        <Identicon value='16ccn3xe5tAeR8kvzCRTcqHZjMJHvuF2pnLfTqyF1EmMusCU' size={80} />
        <div className='regionCardHeaderWrapper-data'>
            <h5>{cardName}</h5>
            <p>{startTime} | {endTime}</p>
        </div>
      </div>
      <div className='regionCardHeaderWrapper-labels'>
        <LabelCard variant='primary' color='dark5' label={coreIndex} />
        <LabelCard variant='primary' color='greenDark' label={coreHours} />
      </div>
      </>
    );
  };

export default RegionCardHeader;
