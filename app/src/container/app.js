import  React from 'react';
import { connect } from 'react-redux';
import { AddComment, DeleteComment } from '../action/index';
import Form from '../component/form';
import ShowComment from '../component/showcomment';
import './app.css';

let App = (props) => {

  const { comment, AddComment, DeleteComment } = props;



  return (
    <React.Fragment>
      <Form addComment={AddComment}/>
      <ShowComment comment={comment} deleteComment={DeleteComment}/>
    </React.Fragment>
  );
}


const mapStateToProps = (state) => {
  return {
    comment : state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    AddComment: (name, text) => dispatch(AddComment(name, text)),
    DeleteComment: (id) => dispatch(DeleteComment(id)),
  };
}

App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default App;