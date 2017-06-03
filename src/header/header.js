import React, { Component } from 'react';
import logo from './wwf-logo.png';
import video from './baleine.mp4';
import './header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
          <img src={logo} className="Header-logo" alt="logo" />
          <video src={video} className="Header-video" type="video/mp4" controls="autoplay">
          </video>

      </div>
    );
  }
}

export default Header;
