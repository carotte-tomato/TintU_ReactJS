import React from "react";
import { withRouter } from 'react-router-dom';
import { routeServiceProduct } from "../../routes/userRoutes.js";
import AppWrapper from "../../components/AppWrapper/AppWrapper.jsx";
import ServiceFrame from "../../components/ServiceItem/ServiceFrame.jsx";
import "./styles/servicepage.css";

class ServicePage extends React.Component {
  constructor(props) {
    super(props);

    // 通知Wrapper header的配置
    if (this.props.setHeaderConfiguration) {
      this.props.setHeaderConfiguration({
        title: "①拍摄服务",
        explain: "请选择需要预约的业务",
      });
    }

    this.handleServiceItemSelected = this.handleServiceItemSelected.bind(this);
  }

  componentWillMount() {
    this.storeId = this.props.match.params.store;
  }

  handleServiceItemSelected(productName) {
    this.props.history.push(routeServiceProduct(this.storeId, productName));
  }

  render() {
    return (
      <div className="service-page flex-container page-frame">
        <ServiceFrame
          title="棚拍服务"
          frameStyle={{backgroundColor: "#FADCBE"}}
          itemList={
            [
              {
                productName: "identification",
                title: "证件照",
              },
              {
                productName: "portraits",
                title: "形象照",
              },
              {
                productName: "couple",
                title: "结婚登记照",
              },
              {
                productName: "degree",
                title: "学位照",
              },
            ]
          }
          onServiceItemSelected={this.handleServiceItemSelected}
        />
        <ServiceFrame
          title="外拍服务"
          frameStyle={{backgroundColor: "#FCEAB1"}}
          itemList={
            [
              {
                productName: "single",
                title: "个人写真",
              },
              {
                productName: "lovers",
                title: "情侣写真",
              },
              {
                productName: "2friends",
                title: "好友写真",
              },
              {
                productName: "class",
                title: "班级毕业照",
              },
            ]
          }
          onServiceItemSelected={this.handleServiceItemSelected}
        />
        <ServiceFrame
          title="租赁服务"
          frameStyle={{backgroundColor: "#DAE9AC"}}
          itemList={
            [
              {
                productName: "formal",
                title: "正装租赁",
              },
              {
                productName: "academicals",
                title: "学位服租赁",
              },
              {
                productName: "studio",
                title: "影棚租赁",
              },
              {
                productName: "equipment",
                title: "器材租赁",
              },
            ]
          }
          onServiceItemSelected={this.handleServiceItemSelected}
        />
        <ServiceFrame
          title="以下业务需电话预约"
          frameStyle={{backgroundColor: "#D7EDEC"}}
          itemList={
            [
              {
                productName: "filmU",
                title: "FlimU系列",
              },
              {
                productName: "follow",
                title: "活动跟拍",
              },
              {
                productName: "videos",
                title: "视频制作",
              },
              {
                productName: "flight",
                title: "航拍",
              },
            ]
          }
          onServiceItemSelected={this.handleServiceItemSelected}
        />
      </div>
    );
  }
}

export default withRouter(AppWrapper(ServicePage));