import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import userService from "../../utils/userService";
import AddFlashcardPage from "../AddFlashcardPage/AddFlashcardPage"
import * as flashcardAPI from "../../services/flashcards-api";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      flashcards: []
    };
  }

  handleAddFlashcard = async newFcdData => {
    const newFcd = await flashcardAPI.create(newFcdData);
    this.setState(state => ({
      flashcards: [...state.flashcards, newFcd]
    }),
      () => this.props.history.push('/'));
  }

  handlelogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  handleSignuporLogin = () => {
    this.setState({ user: userService.getUser() });
  };

  /*--- Lifecycle Methods ---*/

  async componentDidMount() {
    const flashcards = await flashcardAPI.getAll();
    this.setState({ flashcards });
  }

  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <HomePage
                user={this.state.user}
                handlelogout={this.handlelogout}
              />
            )}
          />
          <Route
            exact
            path="/add-flashcard"
            render={() =>
              userService.getUser() ?
                <>
                  <HomePage
                    user={this.state.user}
                    handleLogout={this.handleLogout}
                  />
                  <AddFlashcardPage
                    user={this.state.user}
                    handleAddFlashcard={this.handleAddFlashcard}
                    flashcards={this.state.appointments}
                  />
                </>
                :
                <Redirect to='/login' />
            } />
          <Route
            exact
            path="/signup"
            render={({ history }) => (
              <SignupPage
                history={history}
                handleSignuporLogin={this.handleSignuporLogin}
              />
            )}
          />
          <Route
            exact
            path="/login"
            render={({ history }) => (
              <LoginPage
                history={history}
                handleSignuporLogin={this.handleSignuporLogin}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;