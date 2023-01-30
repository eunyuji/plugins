import AppBridge from "@/bridge/WebViewNativeBridge";
import bridge from "@/bridge/WebViewBridgeDefault";

window.AppBridge = AppBridge; // 앱 콜백함수 전역변수 등록
export default ({ app }, inject) => {
  inject("bridge", bridge);
};
