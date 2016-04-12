import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import BoardRow from '../components/board-row';
import { updateBoard } from "../actions/index";
import { bindActionCreators } from "redux";

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
            Update Board {/*prototyping*/}
          </button>
        </div>
      </div>
    );
  }
}

Board.propTypes = { board: PropTypes.array.isRequired }

function mapStateToProps(state) {
  return { board: state.board }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateBoard }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
