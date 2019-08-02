import React from "react";

export default function withData(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        msg: "Hello!"
      };
    }
    render() {
      return <WrappedComponent {...this.state} {...this.props.children} />;
    }
  };
}
