import React from 'react';
import LabelCard from '../../LabelCard/LabelCard';
import styles from './RegionCardHeader.module.scss';
import Identicon from '@polkadot/react-identicon';
import { encodeAddress, blake2AsU8a } from '@polkadot/util-crypto';

interface RegionCardHeaderProps {
  rawId: string; 
  name: string;   //Card Name
  regionStart: string;  //start date
  regionEnd: string;    //end date
  coreIndex: number;
  duration: string;
}

const RegionCardHeader: React.FC<RegionCardHeaderProps> = ({rawId, name, regionStart, regionEnd, coreIndex, duration}) => { 
  return (
    <>
      <RegionMinimal rawId={rawId} name={name} regionStart={regionStart} regionEnd={regionEnd}/>
      <div className={styles["regionCardHeaderWrapper-labels"]}>
        <LabelCard textColor='dark' variant='primary' color='gray5' label={`Core Index: ${coreIndex}`} />
        <LabelCard variant='primary' color='greenPrimary' label={duration} />
      </div>
    </>
  );
};

interface RegionMinimalProps {
  rawId: string;
  name: string;   //Card Name
  regionStart: string;  //start date
  regionEnd: string;    //end date
}

const RegionMinimal = ({rawId, name, regionStart, regionEnd}: RegionMinimalProps) => {
  const publicKey = blake2AsU8a(`${rawId}`);
  const ss58Address = encodeAddress(publicKey, 42);

  return (
    <div className={styles["regionCardHeaderWrapper"]}>
    <Identicon value={ss58Address} size={80} />
    <div className={styles["regionCardHeaderWrapper-data"]}>
        <h5>{name}</h5>
        <p>{regionStart} | {regionEnd}</p>
    </div>
  </div>
  )
}

export { RegionMinimal };
export default RegionCardHeader;
