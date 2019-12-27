import React from 'react';
import styles from './App.module.scss';
import './App.css';

const classNames = require('classnames');

class App extends React.Component {

  state = {
    boxpos: ['pos1', 'pos2'],
    toggled: true
  }

  swap(){
    this.setState({
      toggled: !this.state.toggled,
      boxpos: this.state.boxpos.reverse(),
    });
  }

  render(){
    return (
      <div>
        <button className={styles.button} onClick={() => this.swap()}>Swap</button>
        <div className="box-container">
          <div className={classNames('box1', this.state.boxpos[0])}>Box 1</div>
          <div className={classNames('box2', this.state.boxpos[1])}>Box 2</div>
        </div>
      </div>
    );
  }
}

export default App;
