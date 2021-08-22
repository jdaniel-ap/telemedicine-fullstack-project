import './global.scss';
import { Route, Switch } from 'react-router-dom';
import Auth from './pages/auth/Auth';
import AuthContextProvider from './context/AuthContext';
import Signup from './pages/signup/Signup';
import AdminDashboard from './pages/dashboard/AdminDashboard';

function App() {
  return (
    <div className="App">
      <Switch>
        <AuthContextProvider>
          <Route exact path='/' component={ Auth } />
          <Route path='/signup' component={ Signup } />
          <Route path='/dashboard' component={ AdminDashboard } />
        </AuthContextProvider>
      </Switch>
    </div>
  );
}

export default App;
