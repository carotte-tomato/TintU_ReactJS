import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { displayStoreName } from "./StoreInfos.js";
import "./styles/storeentry.css";

const preCls = "store";

class StoreEntry extends React.Component {
  render() {
    return (
      <div className={`${preCls}`}>
        <p>{displayStoreName(this.props.storeId)}</p>
        <p>门店信息</p>
      </div>
    );
  }
}

StoreEntry.propTypes = {
  storeId: PropTypes.number,
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    store: state.store,
  };
}

export default connect(mapStateToProps)(StoreEntry);