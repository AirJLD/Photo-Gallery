import React from 'react';
import ReactDOM from 'react-dom';

class MainHero extends React.Component {
  constructor(props){
    super(props)

  }

  render() {
    console.log(this.props.images.mainPicture.url, 'this is mainPicture on mainhero')
    return(
      <img src={this.props.images.mainPicture.url} alt={this.props.images.mainPicture.alt} className="mainHero"/>
    )
  }
}



module.exports = MainHero;