import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from './components/Gallery.jsx';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pictures: [],
      mainPicture: []
    }
  }

  grabPhotos() {
    fetch('/listings')
      .then(res => {
        console.log(res, 'this is the response on clientside')
        return res.json();
      })
      .then(result => {
        console.log(result, 'this is the final result on clientside')
        this.setState({
          pictures: result[0].urls,
          mainPicture: result[0].urls[0]
        })
      })
  }

  componentWillMount() {
    this.grabPhotos();
  }

  render() {
    return (
      <Gallery props={this.state}/>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));