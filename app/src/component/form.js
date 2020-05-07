import React from 'react';

class Form extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name : '',
      text : ''
    }
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
  }
  onChangeName(ev){
    this.setState({
      name: ev
    });
  }
  onChangeText(ev){
    this.setState({
      text : ev
    })
  }
  render(){
    return (
      <React.Fragment>
        <div className="form-comment">
          <form
            onSubmit={(ev) => {
              ev.preventDefault();
              this.props.addComment(this.state.name, this.state.text);
              this.state.name = "";
              this.state.text = "";
            }}
          >
            <input
              className="form-input"
              placeholder="Enter the name"
              onChange={(ev) => {
                this.onChangeName(ev.target.value);
              }}
              value={this.state.name}
            />
            <textarea
              className="form-text"
              placeholder="Enter the comment"
              onChange={(ev) => {
                this.onChangeText(ev.target.value);
              }}
              value={this.state.text}
            ></textarea>
            <button className="btn-ok" type="submit">
              OK
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
};
export default Form;
