import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { updateBoard, togglePlay, clearBoard, newBoard } from '../actions/index';
import { bindActionCreators } from 'redux';

export default class Controls extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <button onClick={ () => this.props.togglePlay() }>
            Run/Pause
          </button>
          <button onClick={ () => this.props.clearBoard() }>
            Clear
          </button>
        </div>
        <div className="row">{/* prototyping */}
          <button onClick={ () => this.props.updateBoard() }>
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
  clearBoard: PropTypes.func,
  newBoard: PropTypes.func,
  updateBoard: PropTypes.func
};

function mapStateToProps(state) {
  return {
    paused: state.paused
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
