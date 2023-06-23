export const login = (username, password) => {
    // Simulating an asynchronous API call
    return async (dispatch) => {
      dispatch({ type: 'LOGIN_REQUEST' });
  
      try {
        // Simulating API call delay
        await new Promise((resolve) => setTimeout(resolve, 1000));
  
        // Simulating login success
        const token = 'your-auth-token'; // Replace with your own authentication token
        dispatch({ type: 'LOGIN_SUCCESS', payload: { token } });
      } catch (error) {
        // Simulating login failure
        dispatch({ type: 'LOGIN_FAILURE', payload: { error: 'Login failed' } });
      }
    };
  };
  
  export const logout = () => {
    return { type: 'LOGOUT' };
  };
  