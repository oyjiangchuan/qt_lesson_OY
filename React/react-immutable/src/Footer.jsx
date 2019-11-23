import React from 'react';
import BaseComponent from './BaseComponent'

class Footer extends BaseComponent {
  render() {
    console.log(window.c ++)
    return (
      <div>
        {this.props.value.get('e')}
      </div>
    )
  }
}
 
export default Footer;