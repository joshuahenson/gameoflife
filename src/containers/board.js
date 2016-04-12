import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { action } from '../actions/index';
// import { bindActionCreators } from 'redux';

export default class Board extends Component {
  render() {
    return (
      <div>
        {this.props.board.map((row, index) => {
          return(<div key={index}>{row}</div>);
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    board: state.board
  }
}
//
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ action }, dispatch)
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(Board)
export default connect(mapStateToProps, null)(Board)
