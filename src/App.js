import React, { Component } from 'react'

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: true
    };
  }


  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  }
  DecrementItem = () => {
    this.setState({ clicks: this.state.clicks - 1 });
  }
  ToggleClick = () => {
    this.setState({ show: !this.state.show });
  }

  render() {
    const { clicks, show, view } = this.state

    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
        <div>
          <h1
            style={{
              color: 'white',
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}>Counter</h1>
          <button onClick={this.IncrementItem}>Add + 1</button>
          <button onClick={this.DecrementItem}>Sub - 1</button>
          <h1 style={{
            color: 'white',
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>{show ? clicks : view}</h1>
          <footer
            style={{
              color: 'white',
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}>by @rjsanx</footer>
        </div>



      </div>

    )
  }
}
