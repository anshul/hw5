import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SettingsFormMulti from './SettingsFormMulti';
import { onSettingsSubmit } from '../../actions';

class Settings extends Component {
  render() {
    return (
      <div>
        <h3>Settings Page</h3>
        <SettingsFormMulti onSettingsSubmit={this.props.onSettingsSubmit} data={this.props.players} />
      </div>
    );
  }
}

Settings.PropTypes = {
  onSettingsSubmit: PropTypes.func.isRequired,
};

const selected = state => ({ players: state.settings.players });

export default connect(selected, { onSettingsSubmit })(Settings);
