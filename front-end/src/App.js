import './global.scss';
import { Route, Switch } from 'react-router-dom';
import Auth from './pages/auth/Auth';
import AuthContextProvider from './context/AuthContext';
import Register from './pages/auth/register/Register';

function App() {
  return (
    <div className="App">
      <Switch>
        <AuthContextProvider>
          <Route path='/signin' component={Auth} />
          <Route path='/signup' component={Register} />
        </AuthContextProvider>
      </Switch>
    </div>
  );
}

export default App;
