import { useEffect } from 'react';
import { getUser } from '../actions/authActions';

// eslint-disable-next-line import/prefer-default-export
export const useSetUser = ({ dispatch }) => {
  useEffect(() => {
    dispatch(getUser());
  }, []);
  return [];
};
