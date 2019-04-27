import React from "react";

export default class ImageSlider extends React.Component {
  state = {
    images: [
      "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2016%2F0314%2Fr63204_1296x729_16%2D9.jpg",
      "https://cdn.nba.net/nba-drupal-prod/styles/landscape/s3/2017-12/kobe-reverse-dunk.jpg?itok=1rZ7pi0N",
      "https://cdn.nba.net/nba-drupal-prod/styles/landscape/s3/2016-11/GettyImages-621734804.jpg?itok=qFD3ODw3",
      "https://www.swaggermagazine.com/home/wp-content/uploads/2018/instagrammodels/51.jpg"
    ],
    index: 0
  };

  handleNext = () => {
    this.setState(
      {
        index: this.state.index + 1
      },
      () => {
        console.log(this.state);
      }
    );
  };

  //     handleBefore = () => {
  //         this.setState({
  //             index: this.state.index - 1
  //         },
  //         () => {
  //             console.log(this.state);
  //         }
  //         );
  //   };

  render() {
    return (
      <div>
        <img
          style={{
            width: 800,
            height: 550
          }}
          src={this.state.images[this.state.index]}
        />
         <button
          onClick={() => {
            this.setState({
              index: this.state.index - 1
            });
          }}
        >
          Previous
        </button>
        <button onClick={this.handleNext}>Next</button>
        {/* <button onClick={this.handleBefore}>Before</button> */}
      </div>
    );
  }
}
