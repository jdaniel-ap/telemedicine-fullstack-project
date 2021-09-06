import './global.scss';
import { Route, Switch } from 'react-router-dom';
import Auth from './pages/auth/Auth';
import AuthContextProvider from './context/AuthContext';
import Signup from './pages/signup/Signup';
import AdminDashboard from './pages/dashboard/AdminDashboard';
import Profile from './pages/profile/Profile';

function App() {
  return (
    <div className="App">
      <Switch>
        <AuthContextProvider>
          <Route exact path='/' component={ Auth } />
          <Route exact path='/dashboard' component={ AdminDashboard } />
          <Route path='/dashboard/profile/:id' component={Profile} />
          <Route path='/signup' component={ Signup } />
        </AuthContextProvider>
      </Switch>
    </div>
  );
}

export default App;
