import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import  Home from './views/Reports/Home';
import Attendance from './views/Attendance/Attendance';
import './App.css'
  
function App() {
    
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/asistencia'>
                    <Attendance/>
                </Route>
                <Route exact path='/report'>
                    <Home/>;
                </Route>
                <Route exact path='/'>
                    <Attendance/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;