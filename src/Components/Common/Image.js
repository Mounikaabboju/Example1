import React from "react";

class Image extends React.Component {
  render() {
    return (
      <div>
        <img
          src={this.props.source}
          style={{ width: this.props.width, height: this.props.height }}
          alt="product info"
        />
      </div>
    );
  }
}
export default Image;
