import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { withRouter } from 'react-router'
import HomePage from "../HomePage/HomePage";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import userService from "../../utils/userService";
import AddFlashcardPage from "../AddFlashcardPage/AddFlashcardPage";
import FlashcardListPage from "../FlashcardListPage/FlashcardListPage";
import WelcomePage from "../WelcomePage/WelcomePage";
import CategoriesPage from "../CategoriesPage/CategoriesPage";
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

  handleAddFlashcard = async newFlashcardData => {
    const newFlashcard = await flashcardAPI.create(newFlashcardData);
    this.setState(state => ({
      flashcards: [...state.flashcards, newFlashcard]
    }),
      () => this.props.history.push('/adm-flashcard'));
  };

  handleDeleteFlashcard = async id => {
    await flashcardAPI.deleteOne(id);
    this.setState(state => ({
      flashcards: state.flashcards.filter(f => f._id !== id)
    }), () => this.props.history.push('/adm-flashcard'));
  };

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
              <>
              <HomePage
                user={this.state.user}
                handlelogout={this.handlelogout}
              />
              <WelcomePage />
              </>
            )}
          />
          <Route
            exact
            path="/categories"
            render={() => (
              <>
              <HomePage
                user={this.state.user}
                handlelogout={this.handlelogout}
              />
              <CategoriesPage />
              </>
            )}
          />
          <Route
            exact
            path="/adm-flashcard"
            render={() =>
              userService.getUser() ?
                <>
                  <HomePage
                    user={this.state.user}
                    handleLogout={this.handleLogout}
                  />
                  <FlashcardListPage
                    flashcards={this.state.flashcards}
                    handleDeleteFlashcard={this.handleDeleteFlashcard}
                  />
                  <AddFlashcardPage
                    user={this.state.user}
                    handleAddFlashcard={this.handleAddFlashcard}
                    flashcards={this.state.flashcards}
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

export default withRouter (App);