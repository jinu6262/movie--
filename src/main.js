import App from "./App";
import router from "./routes/index";

const root = document.querySelector("#root");
root.append(new App().el);
//메모리상에 있던 요소를 root에 붙여줌

router();
// 코드를 해석했을 때 최초한번 실행된후 이벤트를 듣는 형태의 함수
