import './global.scss';
import { Route, Switch } from 'react-router-dom';
import Auth from './pages/auth/Auth';
import AuthContextProvider from './context/AuthContext';
import Signup from './pages/signup/Signup';
import AdminDashboard from './pages/dashboard/AdminDashboard';
import Profile from './pages/profile/Profile';
import Consult from './pages/consult/Consult';
import History from './pages/history/History';
import MainData from './pages/mainData/MainData';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './utils'

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <AuthContextProvider>
          <Switch>
            <Route exact path='/' component={ Auth } />
            <Route exact path='/dashboard' component={ AdminDashboard } />
            <Route path='/signup' component={ Signup } />
            <Route path='/dashboard/profile/:id' component={Profile} />
            <Route path='/dashboard/consult/:id' component={ Consult } />
            <Route path='/dashboard/history/:id' component={ History } />
            <Route path='/user/health-data/:id' component={ MainData  } />
          </Switch>
        </AuthContextProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
