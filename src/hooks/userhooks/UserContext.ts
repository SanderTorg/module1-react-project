import React from "react";

const UserContext = React.createContext<{ name: string }>({ name: "Guest" });

export default UserContext;
