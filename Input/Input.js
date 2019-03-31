import React, { Component } from 'react';

export default class Input extends Component {
    state = {
      value: '',
    }

    handleInputChange = (e) => {
      this.setState({
        value: e.target.value,
      });
    }

    render() {
      const { value } = this.state;
      return (
            <div>
                <input onChange={this.handleInputChange} value={value} />
            </div>
      );
    }
}
