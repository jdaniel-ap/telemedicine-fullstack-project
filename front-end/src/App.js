import './global.scss';
import { Route, Switch } from 'react-router-dom';
import Auth from './pages/auth/Auth';
import AuthContextProvider from './context/AuthContext';
import Signup from './pages/signup/Signup';
import AdminDashboard from './pages/dashboard/AdminDashboard';
import Profile from './pages/profile/Profile';
import History from './pages/history/History';
import MainData from './pages/mainData/MainData';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './utils'
import MedicDashboard from './pages/MedicDashboard/MedicDashboard';
import Consult from './pages/consult/Consult';
import PacientConsult from './pages/pacientConsult/pacientConsult';
import MedicConsult from './pages/medicConsult/MedicConsult';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <AuthContextProvider>
          <Switch>
            <Route exact path='/' component={ Auth } />
            <Route exact path='/dashboard' component={ AdminDashboard } />
            <Route path='/signup' component={ Signup } />
            <Route path='/dashboard/profile/' component={ Profile } />
            <Route path='/dashboard/health-data/' component={ MainData } />
            <Route path='/dashboard/consult/pacient/chat/:id' component={ PacientConsult } />
            <Route path='/dashboard/consult/generate' component={ Consult } />
            <Route path='/dashboard/consult/' component={ History } />
            <Route path='/dashboard/medic' component={ MedicDashboard } />
            <Route path='/consult/medic/chat/:id/:pacient/' component={ MedicConsult } />
          </Switch>
        </AuthContextProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
