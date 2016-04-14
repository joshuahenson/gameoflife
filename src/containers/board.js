import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import BoardRow from '../components/board-row';
import { updateBoard, newBoard } from '../actions/index';
import { bindActionCreators } from 'redux';

// I'm not sure if I want eslint to worry about stateless functions yet
/* eslint react/prefer-stateless-function: 0*/
export default class Board extends Component {
  render() {
    return (
      <div>
        <div className="board">
          {
            this.props.board.map((row, index) =>
              <BoardRow key={index} row={row} />
            )
          }
        </div>
        <div className="row">
          <button onClick={ () => this.props.updateBoard() }>
            Update Board {/* prototyping */}
          </button>
          <button onClick={ () => this.props.newBoard(35) }>
            Test Size {/* prototyping */}
          </button>
        </div>
      </div>
    );
  }
}

Board.propTypes = {
  board: PropTypes.array.isRequired,
  updateBoard: PropTypes.func,
  newBoard: PropTypes.func
};

function mapStateToProps(state) {
  return { board: state.board };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateBoard, newBoard }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
