/**
 * External dependencies
 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

/**
 * Internal dependencies
 */
import { getUserList } from "../../redux/selectors/getUsers.js";
import { fetchUsers } from "../../redux/actions/userActions.jsx";
import UserList from "../../components/users/users.jsx";

import classes from "./style.scss";
class Users extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    return (
      <div>
        <button onClick={this.props.fetchUsers} className={classes.button}>
          get users
        </button>
        {this.props.fetching ? (
          <div className={classes.loading}>Loading...</div>
        ) : (
          <UserList userList={this.props.userList} />
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  //console.log("mapstatetoprops");
  const userList = getUserList(state);
  //console.log(userList);
  return {
    userList: userList,
    fetching: state.ui.fetching
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchUsers: fetchUsers
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(Users);

Users.defaultProps = {
  userList: [],
  fetching: false
};

Users.propTypes = {
  userList: PropTypes.array,
  fetching: PropTypes.bool
};
