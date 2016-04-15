import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  updateBoard, togglePlay, clearBoard, newBoard, setSize, setSpeed, pausePlay
} from '../actions/index';

export default class Controls extends Component {
  // functions are not keeping up with reducers
  componentDidMount() {
    console.log(this.props.paused);
    this.toggleInterval();
    console.log(this.props.paused);
  }
  componentWillUnmount() {
    this.pausePlay();
  }
  setSpeed(speed) {
    this.pausePlay();
    this.props.setSpeed(speed);
    this.toggleInterval();
  }
  toggleInterval() {
    console.log('toggle1', this.props.paused);
    if (!this.props.paused) {
      this.interval = setInterval(() => this.props.updateBoard(this.props.size), this.props.speed);
    } else {
      clearInterval(this.interval);
      console.log('toggle2', this.props.paused);
    }
    this.props.togglePlay();
  }
  pausePlay() {
    this.props.pausePlay();
    clearInterval(this.interval);
  }
  clearBoard() {
    this.pausePlay();
    this.props.clearBoard();
  }
  newBoard(size) {
    this.pausePlay();
    this.props.setSize(size);
    this.props.newBoard(size);
  }
  render() {
    return (
      <div>
        <div className="row">
          <button onClick={ () => this.toggleInterval() }>
            Run/Pause
          </button>
          <button onClick={ () => this.clearBoard() }>
            Clear
          </button>
        </div>
        <div className="row">
          <button onClick={ () => this.newBoard(30) }>
            Small
          </button>
          <button onClick={ () => this.newBoard(60) }>
            Medium
          </button>
          <button onClick={ () => this.newBoard(90) }>
            Large
          </button>
        </div>
        <div className="row">
          <button onClick={ () => this.setSpeed(1000) }>
            Slow
          </button>
          <button onClick={ () => this.setSpeed(600) }>
            Medium
          </button>
          <button onClick={ () => this.setSpeed(200) }>
            Fast
          </button>
        </div>
      </div>
    );
  }
}

Controls.propTypes = {
  togglePlay: PropTypes.func,
  paused: PropTypes.bool.isRequired,
  pausePlay: PropTypes.func,
  clearBoard: PropTypes.func,
  newBoard: PropTypes.func,
  updateBoard: PropTypes.func,
  size: PropTypes.number,
  setSize: PropTypes.func,
  setSpeed: PropTypes.func,
  speed: PropTypes.number
};

function mapStateToProps(state) {
  return {
    paused: state.paused,
    size: state.size,
    speed: state.speed
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    togglePlay,
    clearBoard,
    newBoard,
    updateBoard,
    setSize,
    setSpeed,
    pausePlay
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
