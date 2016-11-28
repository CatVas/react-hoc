import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Link } from 'react-router';

import * as actions from '../actions';


class Header extends Component {
  authButton() {
    const { authenticate, authenticated } = this.props;
    const text = (authenticated) ? 'Sign Out' : 'Sign In';

    return (
      <button
        onClick={() => { authenticate(!authenticated); }}
      >{text}</button>
    );
  }

  render() {
    return (
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/resources">Resources</Link>
          </li>
          <li className="nav-item">
            {this.authButton()}
          </li>
        </ul>
      </nav>
    );
  }
}

function mapStateToProps({ authenticated }) {
  return { authenticated };
}

export default connect(mapStateToProps, actions)(Header);
