import React, { Component } from "react";
import { InfoCard } from "../../common/components/index";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: []
    };
  }

  componentDidMount() {
    fetch(
      "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json"
    )
      .then(response => response.json())
      .then(responseJSON => {
        const series = responseJSON.entries.filter(
          entry => entry.programType === "series"
        );
        this.setState({
          series
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
        {this.state.series.map((series, index) => (
          <InfoCard key={`series-${index}`} {...series} />
        ))}
      </div>
    );
  }
}
