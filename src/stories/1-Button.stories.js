import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from 'react-mono';

export default {
  title: 'Button',
  component: Button,
};

export const normalButton = () => <div style={{ display: 'flex', justifyContent: "space-around" }}>
    <Button onClick={action('clicked')}>Default</Button>
    <Button onClick={action('clicked')} type="primary">Primary</Button>
    <Button onClick={action('clicked')} type="danger">danger</Button>
  </div>

export const smallButton = () => <div style={{ display: 'flex', justifyContent: "space-around" }}>
    <Button size="sm" onClick={action('clicked')}>Default</Button>
    <Button size="sm" onClick={action('clicked')} type="primary">Primary</Button>
    <Button size="sm" onClick={action('clicked')} type="danger">danger</Button>
  </div>
