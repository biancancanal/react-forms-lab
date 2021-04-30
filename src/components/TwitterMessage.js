import React from "react";


class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleCharChange = event => {
    this.setState({
      message: event.target.value
    })
    console.log(event.target.value.length)
  }
  
  render() {
    let charNumber = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleCharChange} value={this.state.message}></input>
        {charNumber}
      </div>
    );
  }
}

export default TwitterMessage;
