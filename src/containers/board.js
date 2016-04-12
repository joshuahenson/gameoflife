import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import BoardRow from '../components/board-row';
// import { action } from "../actions/index";
// import { bindActionCreators } from "redux";

export default class Board extends Component {
  render() {
    return (
      <div className="board">
        {
          this.props.board.map((row, index) =>
            <BoardRow key={index} row={row} />
          )
        }
      </div>
    );
  }
}

Board.propTypes = { board: PropTypes.array.isRequired }

function mapStateToProps(state) {
  return { board: state.board }
}
//
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ action }, dispatch)
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(Board)
export default connect(mapStateToProps, null)(Board)
