import * as users from "./usersDevEnv.json";

export const getCredentials = (userName) => {
  const userCredentials = users[userName];

  return {
    login: userCredentials.login,
    email: userCredentials.email,
    password: userCredentials.password,
  };
};
