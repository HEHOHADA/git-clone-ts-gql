import React from "react";
import ShortUser from "./ShortUser";
function Users({ users }: { users: any }) {
  return (
    <div>
      {users.map((user: any) => (
        <ShortUser user={user} />
      ))}
    </div>
  );
}
export default Users;
