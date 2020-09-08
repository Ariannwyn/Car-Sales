import React from "react";
import { connect } from "react-redux";
import { initialState, reducer } from "./reducers/reducer";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";
import { addFeature, removeFeature } from "./actions";

console.log("App", initialState);

const App = (props) => {
  console.log("App props", props);
  return (
    <div className="boxes">
      <div className="box">
        <Header car={initialState.car} />
        <AddedFeatures car={initialState.car} removeFeature={removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures
          additionalFeatures={initialState.additionalFeatures}
          addFeature={addFeature}
        />
        <Total
          car={initialState.car}
          additionalPrice={initialState.additionalPrice}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("hi", state);
  return {
    additionalFeatures: state.additionalFeatures,
    // additionalPrice:
    // car
  };
};

export default connect(mapStateToProps, { addFeature, removeFeature })(App);
