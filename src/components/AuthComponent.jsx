import React, { useContext } from 'react';
import { AuthContext } from './Context/ContextProvider';

function AuthComponent() {
  const { user, isAuthenticate, login, signOut } = useContext(AuthContext);

  

  return (
    <div>
      {isAuthenticate ? (
        <div id="current-user">
          Current user: {user}, isAuthenticate: Yes
        </div>
      ) : (
        <button id="login-btn" onClick={() => login("Imran")}>
          Login
        </button>
      )}

      {isAuthenticate && (
        <button id="signOut" onClick={signOut}>
          Signout
        </button>
      )}
    </div>
  );
}

export default AuthComponent;
