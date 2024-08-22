import { useState } from 'react'
import './styles/global.scss';
import { Balance, Button, Input, LabelCard, Select, Slider } from './index'
import './App.css'
import ArrowIcon from './assets/icons/Arrow.svg';
import Address from './assets/icons/Address.svg';
import BTC from './assets/icons/BTC.svg';
import ETH from './assets/icons/ETH.svg';
import BRD from './assets/icons/BRD.svg';

import React from 'react';

function App() {
  // const [count, setCount] = useState(0)
  const selectOptions = [
    { value: 'option1', label: 'Option 1',},
    { value: 'option2', label: 'Option 2', icon: BTC },
    { value: 'option3', label: 'Option 3', icon: ETH }
  ];

  const handleSelectChange = (value: string) => {
    console.log('Selected:', value);
  };

  return (
    <>
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
    <Input label="Recipient" placeholder="Recipient Address" leftIcon={<img src={Address} alt="Arrow" />}/>
      <br />
      <br />
    <Input label="Recipient" placeholder="Recipient Address" error leftIcon={<img src={Address} alt="Arrow" />}/>
      <br />
      <br />
    <Slider initialValue={50} min={0} max={100} step={1} />
    <br />
    <br />
    <Select label="Select options" options={selectOptions} searchable={true} onChange={handleSelectChange} />
    <br />
    <br />
    <Balance name="Rococo Coretime" value="243" icon={BTC} />
  
    </>
  )
}

export default App
