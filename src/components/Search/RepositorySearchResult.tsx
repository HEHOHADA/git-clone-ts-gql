import React from "react";
import Repositories from "../Repository/Repositories";
const RepositorySearchResult = ({ input }: { input: string }) => (
  <div>
    <Repositories
      repositories={[
        {
          name: "Repository1",
          url: "",
          isStared: false,
          isLock: false,
        },
        {
          name: "Repository2",
          url: "",
          isStared: false,
          isLock: false,
        },
      ]}
    />
  </div>
);
export default RepositorySearchResult;
