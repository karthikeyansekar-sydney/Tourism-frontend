import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "karthik",
      image:
        "https://d31u1j2vbx6ya5.cloudfront.net/gei-assets/uploads/2019/08/pro-headshots-photography-tips.jpg",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
