import React from "react";
import App from "../App.js";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 280
    };
  }

  handleCharChange = event => {
    this.setState((state) => {
      return {count: this.state.count - 1} 
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
