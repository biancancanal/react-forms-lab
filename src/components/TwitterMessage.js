import React from "react";
import App from "../App.js";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      remainingChars: this.maxChars
    };
  }

  handleCharChange = event => {
    this.setState((state) => {
      return {remainingChars: state.remainingChars - 1} 
    })
    console.log(event.target.value.length)
  }
  
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleCharChange} value={this.props.remainingChars} />
      </div>
    );
  }
}

export default TwitterMessage;
