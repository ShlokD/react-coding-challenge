import React, { Component } from "react";
import { InfoCard } from "../../common/components/index";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      streamItems: [],
      uiState: "DONE"
    };
  }

  componentDidMount() {
    if (this.state.streamItems.length === 0) {
      const { type } = this.props;
      this.setState({
        uiState: "LOADING"
      });
      fetch(
        "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json"
      )
        .then(response => response.json())
        .then(responseJSON => {
          const streamItems = responseJSON.entries.filter(
            entry => entry.programType === type
          );
          this.setState({
            streamItems,
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
    const { uiState, streamItems } = this.state;
    const isLoading = uiState === "LOADING";

    return (
      <div className="flex flex-wrap">
        <p className={`${isLoading ? "opacity-100" : "opacity-0"} p-4 text-lg`}>
          Loading...
        </p>
        {streamItems.map((streamItem, index) => (
          <InfoCard key={`info-${index}`} {...streamItem} />
        ))}
      </div>
    );
  }
}
