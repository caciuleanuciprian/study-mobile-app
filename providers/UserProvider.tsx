import React, { PropsWithChildren, useContext } from "react";

type UserContextProps = {
  isConnected: boolean | null;
};

const UserContext = React.createContext<UserContextProps>({
  isConnected: false,
});

export function useUser() {
  const ctx = useContext(UserContext);
  return { ...ctx };
}

type UserProviderProps = PropsWithChildren & { props: UserContextProps };

export function UserProvider({ props, children }: UserProviderProps) {
  return <UserContext.Provider value={props}>{children}</UserContext.Provider>;
}
