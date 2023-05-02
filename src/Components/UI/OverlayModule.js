import React from 'react';
import Card from './Card';
import Button from './Button';
import './OverlayModule.css';

export const OverlayModule = (props) => {
  return (
    <>
      <div onClick={props.onConfirm} className='backdrop' />
      <Card className={'modal'}>
        <header className='header'>
          <h2>{props.title}</h2>
        </header>
        <div className='content'>
          <p>{props.message}</p>
        </div>
        <footer className='action'>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    </>
  );
};
