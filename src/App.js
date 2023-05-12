import { Component } from "./core/core";
//parcel 사용시 확장자 생략가능
import Header from "./components/Header";

export default class App extends Component {
    render() {
        const routerView = document.createElement("router-view");
        this.el.append(new Header().el, routerView);
    }
}
