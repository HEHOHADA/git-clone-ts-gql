import React from "react";
import ShortRepository from "./ShortRepository";

function Repositories({ repositories }: { repositories: any }) {
  return (
    <div>
      {repositories.map((repository: any) => (
        <ShortRepository repository={repository} />
      ))}
    </div>
  );
}
export default Repositories;
