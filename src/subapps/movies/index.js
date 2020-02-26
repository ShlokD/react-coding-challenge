import React, { Component } from "react";
import { InfoCard } from "../../common/components/index";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      uiState: "DONE"
    };
  }

  componentDidMount() {
    if (this.state.movies.length === 0) {
      this.setState({
        uiState: "LOADING"
      });

      fetch(
        "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json"
      )
        .then(response => response.json())
        .then(responseJSON => {
          const movies = responseJSON.entries.filter(
            entry => entry.programType === "movie"
          );
          this.setState({
            movies,
            uiState: "DONE"
          });
        })
        .catch(() => {
          this.setState({
            uiState: "DONE"
          });
        });
    }
  }

  render() {
    const isLoading = this.state.uiState === "LOADING";
    return (
      <div className="flex flex-wrap">
        <p className={`${isLoading ? "opacity-100" : "opacity-0"} p-4 text-lg`}>
          Loading...
        </p>
        {this.state.movies.map((movie, index) => (
          <InfoCard key={`series-${index}`} {...movie} />
        ))}
      </div>
    );
  }
}
