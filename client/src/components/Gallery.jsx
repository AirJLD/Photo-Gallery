import React from 'react';
import ReactDOM from 'react-dom';
import MainHero from './MainHero.jsx';
import SideBar1 from './SideBar1.jsx';
import SideBar2 from './SideBar2.jsx';
import MediaQuery from 'react-responsive';

const Gallery = (props) => (
      <div>
        <MediaQuery query="(min-device-width: 700px)">
          <MainHero images={props.props} />
        </MediaQuery>
      </div>


      // <MediaQuery minDeviceWidth={1824}>
      //   <MainHero images={this.props.props} />
      //   <SideBar1 images={this.props.props} />
      //   <SideBar2 images={this.props.props} />
      // </MediaQuery>
)

export default Gallery;