import React, { Component } from "react";
import { InfoCard } from "../../common/components/index";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    fetch(
      "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json"
    )
      .then(response => response.json())
      .then(responseJSON => {
        const movies = responseJSON.entries.filter(
          entry => entry.programType === "movie"
        );
        this.setState({
          movies
        });
      })
      .catch(err => {
        this.setState({
          error: true
        });
      });
  }

  render() {
    return (
      <div className="flex flex-wrap">
        {this.state.movies.map((movie, index) => (
          <InfoCard key={`series-${index}`} {...movie} />
        ))}
      </div>
    );
  }
}
