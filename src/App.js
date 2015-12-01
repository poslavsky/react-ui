import React, { Component } from 'react';
import Button from './Button';

export default class App extends Component {
  render() {
    return (
			<div>
      <h3>При небольшом количестве кнопок</h3>
			<Button href='#'>Default</Button>
			<Button green>Color</Button>
			<Button large>Size</Button>
			<Button green large>Color Size</Button>
			</div>
    );
  }
}
