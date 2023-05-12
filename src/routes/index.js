import { createRouter } from "../core/core"; //가져온 것은 함수
import Home from "./Home";
import About from "./About";

export default createRouter([
    { path: "#/", component: Home },
    { path: "#/about", component: About },
]); // 실행되고 있다, 따라서 내고내고있는 것은 createRouter함수가 실행된 후 리턴값을 내고내고 있고 지금 리턴되고있는 것은 또다른 함수
