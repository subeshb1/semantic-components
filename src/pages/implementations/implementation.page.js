import React from "react";
import { Route } from "react-router-dom";
import { TopRepos } from ".";

export default ({ match: { path } }) => {
  return (
    
      <Route path={`${path}/top-repos`} component={TopRepos} />
      
    
  );
};
