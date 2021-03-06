import React from "react";
import { connect } from "react-redux";
import { addFeature, removeFeature } from "./actions";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

const App = (props) => {
  console.log("App props", props);
  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} removeFeature={props.removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures
          additionalFeatures={props.additionalFeatures}
          addFeature={props.addFeature}
        />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("App state", state);
  return {
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice,
    car: state.car,
  };
};

export default connect(mapStateToProps, { addFeature, removeFeature })(App);
