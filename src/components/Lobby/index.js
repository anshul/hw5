import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Playerinfo from './Playerinfo';

class Lobby extends PureComponent {
  render() {
    const { players } = this.props.settings;

    const playersView = players.map(player => <Playerinfo key={player.id} data={player} />);

    return (
      <div>
        <h3>Dashboard</h3>
        {playersView}
      </div>
    );
  }
}

Lobby.PropTypes = {
  settings: PropTypes.shape({
    players: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};

const selected = state => ({ settings: state.settings });

export default connect(selected)(Lobby);
