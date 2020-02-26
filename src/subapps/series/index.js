import React, { Component } from "react";
import { InfoCard } from "../../common/components/index";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [],
      uiState: "DONE"
    };
  }

  componentDidMount() {
    if (this.state.series.length === 0) {
      this.setState({
        uiState: "LOADING"
      });
      fetch(
        "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json"
      )
        .then(response => response.json())
        .then(responseJSON => {
          const series = responseJSON.entries.filter(
            entry => entry.programType === "series"
          );
          this.setState({
            series,
            uiState: "DONE"
          });
        })
        .catch(err => {
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
        {this.state.series.map((series, index) => (
          <InfoCard key={`series-${index}`} {...series} />
        ))}
      </div>
    );
  }
}
