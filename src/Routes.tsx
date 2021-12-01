import React from "react";
import { Route, Switch } from "react-router";
import { NotFoundLayout } from "~/containers/NotFoundLayout";
import { Dashboard } from "~/containers/Dashboard";

export const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" render={() => <Dashboard />} />
        <Route exact path="*" render={() => <NotFoundLayout />} />
      </Switch>
    </>
  );
};
