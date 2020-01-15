/*example with importing scss module */
import React from "react";
import PropTypes from "prop-types";
/**
 * Style dependencies
 */
import classes from "./style.scss"; // classes will be map of classname and uniquie class name so that this style will be applied to only this component

const UserList = ({ userList }) => {
  return (
    <div className={classes.div} data-test="component-users">
      <ul className={classes.ul}>
        {userList.map(user => (
          <li key={user.id} className={classes.li}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

UserList.propTypes = {
  userList: PropTypes.array
};

export default UserList;

/* example with importing css */

// import React from "react";
// import "./style.css";  //imported css will be added to head style section to this style will be applied to all elements with class .div or .ul
// const UserList = ({ userList }) => {
//   return (
//     <div>
//       <ul>
//         {userList.map(user => (
//           <li key={user.id}>{user.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default UserList;
