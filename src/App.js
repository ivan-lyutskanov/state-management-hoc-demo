import React from "react";
import withData from "./hoc/withData";

function App(props) {
  return <h1>{props.msg} from HOC</h1>;
}

export default withData(App);
