// Code ClickityClick Component Here
import React from 'react';

class ClickityClick extends React.Component {
  constructor() {
    super();

    // Define the initial state:
    this.state = {
        hasBeenClicked: false,
        currentTheme: 'blue',
    };
  }

  handleClick = () => {
    // Update our state here...
    this.setState({
        hasBeenClicked: true
    },() => console.log(this.state.hasBeenClicked)
    )
  };

  render() {
    return (
      <div>
        <p>{this.state.hasBeenClicked ? 'I REALLY love Jessica' : 'Click to find out'}!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}

export default ClickityClick;

// // src/index.js
// import React from 'react';
// import ReactDOM from 'react-dom';

// import ClickityClick from './components/ClickityClick';

// ReactDOM.render(<ClickityClick />, document.getElementById('root'));