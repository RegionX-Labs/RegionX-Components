import React from 'react';
import LabelCard from '../../LabelCard/LabelCard';
import styles from './RegionCardHeader.module.scss';
import Identicon from '@polkadot/react-identicon';
import { encodeAddress, blake2AsU8a } from '@polkadot/util-crypto';

interface RegionCardHeaderProps {
    name: string;   //Card Name
    regionStart: string;  //start date
    regionEnd: string;    //end date
    coreIndex: number;
    duration: string;
}

const RegionCardHeader: React.FC<RegionCardHeaderProps> = ({name, regionStart, regionEnd, coreIndex, duration}) => {
  const publicKey = blake2AsU8a(`${regionStart}-${regionEnd}-${coreIndex}`);
  const ss58Address = encodeAddress(publicKey, 42);
  
  return (
      <>
    <div className={styles["regionCardHeaderWrapper"]}>
      <Identicon value={ss58Address} size={80} />
      <div className={styles["regionCardHeaderWrapper-data"]}>
          <h5>{name}</h5>
          <p>{regionStart} | {regionEnd}</p>
      </div>
    </div>
    <div className={styles["regionCardHeaderWrapper-labels"]}>
      <LabelCard textColor='dark' variant='primary' color='gray5' label={`Core Index: ${coreIndex}`} />
      <LabelCard variant='primary' color='greenPrimary' label={duration} />
    </div>
    </>
  );
};

export default RegionCardHeader;
