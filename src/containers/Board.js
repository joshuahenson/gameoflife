import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// import { updateBoard } from '../actions/index';
// import { bindActionCreators } from 'redux';

export default class Board extends Component {
  determineClass(index, width, cell) {
    if (cell) {
      if (index % width === 0) {
        return 'clear alive';
      } //else not new row
      return 'alive';
    } // else !cell
    if (index % width === 0) {
      return 'clear dead';
    } //else not new row
    return 'dead';
  }
  render() {
    const tempWidth = 25;
    return (
      <div className="board">
        {
          this.props.board.map((cell, index) =>
            <div 
              key={index} 
              id={index} 
              className={ this.determineClass(index, tempWidth, cell) } 
            />
          )
        }
      </div>
    );
  }
}

Board.propTypes = {
  board: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    board: state.board
  };
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ updateBoard }, dispatch);
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Board);
export default connect(mapStateToProps)(Board);
