import React from 'react';
import styles from './App.module.scss';
const classNames = require('classnames');

class App extends React.Component {

  state = {
    boxes: ['blue', 'green'],
    toggled: true
  }

  swap(){
    this.setState({
      toggled: !this.state.toggled
    });
  }

  render(){
    return (
      <div className={styles.app}>
        {this.state.boxes.map(box => <div className={classNames(styles[box], this.state.toggled ? styles['toggled']: '')} key={box}>{box}</div>)}
        <button className={styles.button} onClick={() => this.swap()}>Swap</button>
      </div>
    );
  }
}

export default App;
