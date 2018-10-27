import React from 'react';
import ReactDOM from 'react-dom';

class SideBar2 extends React.Component {
  render() {
    console.log(this.props.images.mainPicture.url, 'this is mainPicture on sidebar1')
    return (
    <div className="hi">
      <img />
    </div>
    )
  }
}

export default SideBar2