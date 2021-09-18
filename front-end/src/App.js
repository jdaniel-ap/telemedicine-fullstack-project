import './global.scss';
import { Route, Switch } from 'react-router-dom';
import Auth from './pages/auth/Auth';
import AuthContextProvider from './context/AuthContext';
import Signup from './pages/signup/Signup';
import AdminDashboard from './pages/dashboard/AdminDashboard';
import Profile from './pages/profile/Profile';
import Consult from './pages/consult/Consult';
import History from './pages/history/History';

function App() {
  return (
    <div className="App">
      <Switch>
        <AuthContextProvider>
            <Route exact path='/' component={ Auth } />
            <Route exact path='/dashboard' component={ AdminDashboard } />
            <Route path='/signup' component={ Signup } />
            <Route path='/dashboard/profile/:id' component={Profile} />
            <Route path='/dashboard/consult/:id' component={ Consult } />
            <Route path='/dashboard/history/:id' component={ History } />
        </AuthContextProvider>
      </Switch>
    </div>
  );
}

export default App;
