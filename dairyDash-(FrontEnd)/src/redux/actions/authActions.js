import axios from 'axios';

export const login = (username, password) => async dispatch => {
  try {
    const res = await axios.post('/api/auth/login', { username, password });
    dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
  } catch (error) {
    dispatch({ type: 'LOGIN_FAIL', payload: error.response.data.message });
  }
};
