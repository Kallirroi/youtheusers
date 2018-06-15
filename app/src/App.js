import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: ''
    }
  }
  componentDidMount() {
    let requestedFile = 'Apple_2018';
    this.getText(requestedFile)
      .then(res => this.setState({ contents: res.data}))
      .catch(err => console.log(err));
  }

  getText = async (requestedFile) => {
    const response = await fetch(`/getText/${requestedFile}`);
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };  

  render() {
    let words = this.state.contents.split(' ');
    return (
      <div className="main">
        {words.map((d,i) => <span className={ (d==='you' || d==='your' || d==='yours' || d==='Yours' || d==='Your' || d==='You') ? 'you' : 'notyou'} key={i}> {d} </span>)}
      </div>
    );
  }
}

export default App;