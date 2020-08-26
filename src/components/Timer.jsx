import React, {Component} from 'react';
import './Timer.css';

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
    };
  }

  tic() {
    this.setState({
      seconds: this.state.seconds + 1,
    });
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.tic();
    }, 1000);
  }

  componentWillMount() {
    clearInterval(this.interval);
  }

  render() {
    return <div className='seconds'>Seconds: {this.state.seconds}</div>;
  }
}
