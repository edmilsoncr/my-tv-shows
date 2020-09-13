import React, {useState} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import MainPage from './MainPage.jsx';
import DetailsPage from './components/DetailsPage.jsx';
import NotFoundPage from './NotFoundPage.jsx';
import LoginPage from './LoginPage.jsx';
import NavBar from './components/NavBar.jsx';
import styled from 'styled-components';

export const UserContext = React.createContext();

const ContentWrapper = styled.div`
  margin: 25px;
`;

function App() {
  const [user, setUser] = useState({email: '', password: ''});

  return (
    <div>
      <BrowserRouter>
        { (user.email || user.password) && <NavBar></NavBar> }
        <UserContext.Provider value={setUser} m={2}>
          <ContentWrapper>
            <Switch>
              { (!user.email || !user.password) && <Route path="/" exact component={LoginPage}></Route> }
              <Route path="/" exact component={MainPage}></Route>
              { (!user.email || !user.password) && <Route path="/details" exact component={LoginPage}></Route> }
              <Route path="/details" exact component={DetailsPage}></Route>
              <Route component={NotFoundPage} />
            </Switch>
          </ContentWrapper>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
