import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Alert from "../components/Alert";


class Search extends Component {
  state = {
    search: "",
    articles: [],
    results: [],
    error: ""
  };

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
    API.getArticles()
      .then(res => this.setState({ articles: res.data.message }))
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.search)
    API.getArticles(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        console.log(res.data.response.docs)
        this.setState({ results: res.data.response.docs, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  
  };

handleSaveArticle = event => {
  
}

  render() {
    return (
      <Container style={{ minHeight: "80%" }}>
        <h1 className="text-center">Search!</h1>
        <Alert
          type="danger"
          style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
        >
          {this.state.error}
        </Alert>
        <SearchForm
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          articles={this.state.articles}
        />
        <SearchResults results={this.state.results} />
      </Container>
    );
  }
}

export default Search;
