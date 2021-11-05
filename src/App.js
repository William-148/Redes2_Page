import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import  Home from './views/Reports/Home';
import Attendance from './views/Attendance/Attendance';
import './App.css'
  
function App() {
    
    return (
        <BrowserRouter basename='/Redes2_Page'>
            <Switch>
                <Route exact path='/asistencia'>
                    <Attendance/>
                </Route>
                <Route exact path='/report'>
                    <Home/>;
                </Route>
                <Route exact path='/'>
                    <Redirect to="/asistencia"/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;