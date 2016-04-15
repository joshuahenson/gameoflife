import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { updateBoard, togglePlay, clearBoard, newBoard, setSize } from '../actions/index';
import { bindActionCreators } from 'redux';

export default class Controls extends Component {
  componentDidMount() {
    this.toggleInterval();
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  toggleInterval() {
    this.props.togglePlay();
    if (!this.props.paused) {
      this.interval = setInterval(() => this.props.updateBoard(this.props.size), 1000);
    } else {
      clearInterval(this.interval);
    }
  }
  clearBoard() {
    clearInterval(this.interval);
    this.props.clearBoard();
  }
  newBoard(size) {
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
      </div>
    );
  }
}

Controls.propTypes = {
  togglePlay: PropTypes.func,
  paused: PropTypes.bool.isRequired,
  clearBoard: PropTypes.func,
  newBoard: PropTypes.func,
  updateBoard: PropTypes.func,
  size: PropTypes.number,
  setSize: PropTypes.func
};

function mapStateToProps(state) {
  return {
    paused: state.paused,
    size: state.size
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    togglePlay,
    clearBoard,
    newBoard,
    updateBoard,
    setSize
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
