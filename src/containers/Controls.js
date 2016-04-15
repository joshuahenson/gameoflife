import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { updateBoard, togglePlay, clearBoard, newBoard } from '../actions/index';
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
        <div className="row">{/* prototyping */}
          <button onClick={ () => this.props.updateBoard(this.props.size) }>
            Update Board
          </button>
          <button onClick={ () => this.props.newBoard(35) }>
            Test Size
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
  size: PropTypes.number
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
    updateBoard
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
