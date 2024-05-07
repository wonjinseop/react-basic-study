import React from 'react';

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {}, // 함수같은 경우에도 Context에 저장이 가능하다.
});

export default AuthContext;
