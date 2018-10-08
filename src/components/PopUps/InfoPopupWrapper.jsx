import React from "react";
import PropTypes from "prop-types";
import "./styles/infopopupwrapper.css";

const preCls = "popup-shield";

export default function InfoPopupWrapper(WrapComponent) {
  class InfoPopupWrap extends React.Component {
    componentWillMount() {
      /* 区分内部处理的Popup隐藏和外部第一次初始化的隐藏 */
      this.popUpInnerHidden = true;

      /* 初始化的隐藏直接display:none */
      if (this.props.isHidden) {
        this.popUpInnerHidden = false;
      }
    }

    handleTouchLayerToQuit = () => {
      /* 触控非弹窗区域可以退出当前弹窗 */
      if (this.props.onPopUpHidden) {
        this.props.onPopUpHidden();
      }

      /* 组件变成内部控制弹窗隐藏，更改css样式，由css动画淡出 */
      this.popUpInnerHidden = true;
    }

    isPopUpHiddenUsedAnimation = () => {
      /* 不隐藏不附加 */
      if (!this.props.isHidden) {
        return false;
      }

      if (!this.popUpInnerHidden) {
        return false;
      }

      return true;
    }

    render() {
      const isAnimation = this.isPopUpHiddenUsedAnimation();
      const hiddenStyle = !this.props.isHidden ? "" : (isAnimation ? "animation-hidden" : "direct-hidden");

      return (
        <div className={`${preCls}-split ${hiddenStyle}`}>
          <div
            className={`${preCls}`}
            onTouchEnd={this.handleTouchLayerToQuit}
          />
          <WrapComponent
            isAnimation={isAnimation}
            {...this.props}
          />
        </div>
      );
    }
  }

  InfoPopupWrap.propTypes = {
    onPopUpHidden: PropTypes.func,
    isHidden: PropTypes.bool,
  }

  return InfoPopupWrap;
}