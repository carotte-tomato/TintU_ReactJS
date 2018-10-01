import React from "react";
import "./styles/appfooter.css";
import { Button } from "antd-mobile";
import PropTypes from "prop-types";

const preCls = "app-footer";

class AppFooter extends React.Component {
  handleItemButtonClicked(index) {
    const handler = this.props.content[index].onItemClicked;

    if (handler) {
      handler();
    }
  }

  render() {
    return (
      <div className={`${preCls}`}>
        {this.props.content.map((item, index) => {
          return (
            <Button
              key={index}
              className={`${preCls}-button`}
              style={item.style || {}}
              disabled={false}
              onClick={this.handleItemButtonClicked.bind(this, index)}
            >
              {item.title}
            </Button>
          );
        })}
      </div>
    );
  }
}

AppFooter.propTypes = {
  content: PropTypes.array,
}

AppFooter.defaultProps = {
  content: [],
}

export default AppFooter;