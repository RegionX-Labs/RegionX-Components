import './styles/global.scss';
import { Balance, Button, AddressInput, LabelCard, Select, Slider, RegionCard, AmountInput, TableComponent } from './index'
import './App.css'
import ArrowIcon from './assets/icons/Arrow.svg';
import Address from './assets/icons/Address.svg';
import BTC from './assets/icons/BTC.svg';
import ETH from './assets/icons/ETH.svg';
import KSM from './assets/icons/KSM.svg';
import React from 'react';
import { RegionCardData, SelectOption, TableData } from './types/types';

function App() {
  const selectOptions: SelectOption[] = [
    { value: 'option1', label: 'Option 1', icon: KSM },
    { value: 'option2', label: 'Option 2', icon: BTC },
    { value: 'option3', label: 'Option 3', icon: ETH }
  ];

  const testClickFunction = () => {
    console.log('this is click on button');
  }

  const regionCardData: RegionCardData =  {
    cardName: 'Card Name 1',
    startTime: 'Start in 1 hr',
    endTime: 'End in 9 hr',
    coreIndex: 'Core index: 234',
    coreHours: '4 hours',
    coreOcupaccy: 30,
    consumed: 24,
    currentUsage: 69,
    chainLabel: 'Coretime Chain',
    chainColor: 'purpleDark',
    onClick: testClickFunction,
  }

  const exampleTableData: Array<Record<string, TableData>> = [
    {
      ExstricID: {
        cellType:'link',
        data:'EX123456',
        link: 'https://polkadot.subscan.io/extrinsic/22377599-0',
      },
      Account: {
        cellType: 'address',
        data:'16ccn3xe5tAeR8kvzCRTcqHZjMJHvuF2pnLfTqyF1EmMusCU',
      },
      testrow1: {
        cellType: 'text',
        data: 'dsdsdss',
      },
      Core: {
        cellType: 'text',
        data: "72"
      },
      "Price(KSM)": {
        cellType: 'text',
        data: "0.342"
      },
      SalesType: {
        cellType: 'text',
        data: 'bulk'
      },
      Timestamp: {
        cellType: 'text',
        data: '5 days ago'
      }
    },
    {
      ExstricID: {
        cellType:'link',
        data:'EX54396',
        link: 'https://polkadot.subscan.io/extrinsic/22377599-0',
      },
      Account: {
        cellType: 'address',
        data:'16ccn3xe5tAeR8kvzCRTcqHZjMJHvuF2pnLfTqyF1EmMusCU',
        link: 'https://polkadot.subscan.io/extrinsic/22377599-0'
      },
      testrow1: {
        cellType: 'text',
        data: 'dsdsdss',
      },
      Core: {
        cellType: 'text',
        data: "32"
      },
      "Price(KSM)": {
        cellType: 'text',
        data: "1.5"
      },
      SalesType: {
        cellType: 'text',
        data: 'bulk'
      },
      Timestamp: {
        cellType: 'text',
        data: '1 day ago'
      }
    },
    {
      ExstricID: {
        cellType:'link',
        data:'EX123456',
        link: 'https://polkadot.subscan.io/extrinsic/22377599-0',
      },
      Account: {
        cellType: 'address',
        data:'16ccn3xe5tAeR8kvzCRTcqHZjMJHvuF2pnLfTqyF1EmMusCU',
      },
      testrow1: {
        cellType: 'text',
        data: 'dsdsdss',
      },
      Core: {
        cellType: 'text',
        data: "72"
      },
      "Price(KSM)": {
        cellType: 'text',
        data: "0.342"
      },
      SalesType: {
        cellType: 'text',
        data: 'bulk'
      },
      Timestamp: {
        cellType: 'text',
        data: '5 days ago'
      }
    },
  ];
  

  const handleSelectChange = (value: string) => {
    console.log('Selected:', value);
  };

  return (
    <div>
      <h1>RegionX components</h1>
      <LabelCard label='Active parachain' variant='transparent' pillStyle={true}/>
      <br />
      <LabelCard label='Active' variant='transparent' color='orangeDark' />
      <br />
      <LabelCard label='Parachain' variant='primary'color='pinkDark' pillStyle={true}/>
      <br />
      <br />
      <Button onClick={() => console.log('Arrow button clicked')} rightIcon={<img src={ArrowIcon} alt="Arrow" />}>
        Next
      </Button>
      <br />
      <br />
      <Button color="redDark">
        This is important
      </Button>
      <br />
      <br />
      <Button color="dark" rightIcon={<img src={ArrowIcon} alt="Arrow" />}>
        Back
      </Button>
      <br />
      <br />
    <AddressInput label="Recipient" placeholder="Recipient Address" leftIcon={<img src={Address} alt="Address" />}/>
      <br />
      <br />
    <AddressInput label="Recipient" placeholder="Recipient Address" error leftIcon={<img src={Address} alt="Address" />}/>
      <br />
      <br />
    <AddressInput label="Recipient" placeholder="Recipient Address" leftIcon={<img src={Address} alt="Adsress"/>}/>
      <br />
      <br />
    <Slider initialValue={50} min={0} max={100} step={1} disabled={true}/>
      <br />
      <br />
    <Slider initialValue={50} min={0} max={100} step={1}/>
    <br />
    <br />
    <TableComponent data={exampleTableData} />
    <br />
    <br />
    <AmountInput
      currencyOptions={selectOptions}
      onAmountChange={(amount) => console.log('Amount:', amount)}
      onCurrencyChange={(currency) => console.log('Currency:', currency)}
      placeholder='0'
      label='Amount input'
    />  
    <br />
    <br />
    <Select label="Select options" options={selectOptions} searchable={true} onChange={handleSelectChange}/>
    <br />
    <br />
    <Balance name="Rococo Coretime" value="243" icon={BTC} />
    <br />
    <br />
    <RegionCard typeMarketplace={true} ownedRegion={false} regionCardData={regionCardData}/>

    <br />
    <br />
    <RegionCard ownedRegion={false} regionCardData={regionCardData}/>

    </div>
  )
}

export default App
