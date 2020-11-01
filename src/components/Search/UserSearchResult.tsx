import React from "react";
import Users from "../User/Users";
const users = [
  {
    name: "User1",
    url: "",
    login: "login",
  },
  {
    name: "User2",
    url: "",
    login: "login",
  },
];
const UserSearchResult = ({ input }: { input: string }) => (
  <div>
    <Users users={users} />
  </div>
);
export default UserSearchResult;
