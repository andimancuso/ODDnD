import React from 'react';
import { NobleHouseName } from './components/NobleHouseName';
import { GetNobleHouse } from './components/GetNobleHouse';

export class NobleHouse extends React.Component {
  constructor(props) {
    super(props);
    this.state = { newHouse: false };
    this.toggleState = this.toggleState.bind(this);
  };

  toggleState() {
    const newState = this.state.newHouse ? false : true;
    this.setState({
      newHouse: newState
    })
  };

  render() {
    return (
        <div>
          <p>You finally rest your weary feet in the inn of a new town.<br/>
          You overhear patrons talking about one of the local nobles who belongs to</p>
            <h2 className="noble-house">
              <NobleHouseName />
            </h2>
            <div className="noble-desc">
              <GetNobleHouse />
            </div>
            <button id="button" onClick={this.toggleState}>
              These people are awful. Try again!
            </button>
        </div>
    );
  };
};
