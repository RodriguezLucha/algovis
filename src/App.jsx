import React from 'react';
import styles from './App.module.scss';

class App extends React.Component {

  state = {
    boxes: ['blue', 'green']
  }

  swap(){
    this.setState({boxes: this.state.boxes.reverse()});
  }

  render(){
    return (
      <div className={styles.app}>
        {this.state.boxes.map(box => <div className={styles[box]} key={box}>{box}</div>)}
        <button className={styles.button} onClick={() => this.swap()}>Swap</button>
      </div>
    );
  }
}

export default App;
