import { createSelector } from "reselect";
const getUsers = state => state.users;
export const getUserList = createSelector(
  getUsers,
  resultFromSelectA => {
    console.log("userlist");
    const userList = resultFromSelectA.map(item => {
      return { id: item.id, name: item.name };
    });
    return userList;
  }
);
