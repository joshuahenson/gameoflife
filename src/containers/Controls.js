import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  updateBoard, play, clearBoard, newBoard, setSize, setSpeed, pause
} from '../actions/index';

export default class Controls extends Component {
  // functions are not keeping up with reducers
  componentDidMount() {
    // console.log(this.props.playing);
    this.play();
    // console.log(this.props.playing);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  setSpeed(speed) {
    if (this.props.playing) {
      this.pause();
      this.props.setSpeed(speed);
      this.play(speed);
    }
    this.props.setSpeed(speed);
  }
  pause() {
    this.props.pause();
    clearInterval(this.interval);
  }
  play(speed) {
    this.props.play();
    this.interval = setInterval(() => this.props.updateBoard(this.props.size), speed || this.props.speed);
  }
  clearBoard() {
    this.pause();
    this.props.clearBoard();
  }
  newBoard(size) {
    this.pause();
    this.props.setSize(size);
    this.props.newBoard(size);
  }
  render() {
    return (
      <div>
        <div className="row">
          <button onClick={ () => this.play() }>
            Play
          </button>
          <button onClick={ () => this.pause() }>
            Pause
          </button>
          <button onClick={ () => this.clearBoard() }>
            Clear
          </button>
        </div>
        <div className="row">
          <button onClick={ () => this.newBoard(30) }>
            30x30
          </button>
          <button onClick={ () => this.newBoard(60) }>
            60x60
          </button>
          <button onClick={ () => this.newBoard(90) }>
            90x90
          </button>
        </div>
        <div className="row">
          <button onClick={ () => this.setSpeed(1000) }>
            Slow
          </button>
          <button onClick={ () => this.setSpeed(500) }>
            Medium
          </button>
          <button onClick={ () => this.setSpeed(50) }>
            Fast
          </button>
        </div>
      </div>
    );
  }
}

Controls.propTypes = {
  play: PropTypes.func,
  playing: PropTypes.bool.isRequired,
  pause: PropTypes.func,
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
    playing: state.playing,
    size: state.size,
    speed: state.speed
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    play,
    clearBoard,
    newBoard,
    updateBoard,
    setSize,
    setSpeed,
    pause
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
