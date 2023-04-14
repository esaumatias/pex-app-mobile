import { useContext } from "react";
import { SessionContext } from "../providers/SessionProvider";
import { AuthorizedRoutes } from "./authorized";
import { PublicRoutes } from "./public";

export const Router = () => {
  const { user } = useContext(SessionContext);

  if (user) {
    return <AuthorizedRoutes />;
  }

  return <PublicRoutes />;
};
