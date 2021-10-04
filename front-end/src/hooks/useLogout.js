import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { setAsideEvent } from '../redux/slices/appSlice';
import { resetData } from '../redux/slices/updateDataSlice';

export default function useLogout() {
  const dispatch = useDispatch();
  const history = useHistory();

  const logout = () => {
    history.push('/');
    localStorage.removeItem('user');
    dispatch(setAsideEvent(''));
    dispatch(resetData());
  }

  return [ logout ]
}