/* eslint-disable */
//
//   WebBridge.js
//
//    Web Bridge code by Auto Generator//
import bridgeBus from "@/mixins/birdgeBus.js";
export default {
  nativeCallback: {
    //네이티브에서 웹 함수를 호출
    // getPermission의 웹 콜백 함수
    // permissionList - JsonString : 퍼미션 목록
    getPermissionCB: function (permissionList) {
      // TODO : - 함수를 구현해주세요
      alert("미구현함수입니다.");
      bridgeBus.$emit("emitData", permissionList);
    },
    // getAppInfo의 웹 콜백 함수
    // appInfo - JsonString : 앱 정보
    getAppInfoCB: function (appInfo) {
      // TODO : - 함수를 구현해주세요
      alert("미구현함수입니다.");
    },
    // (안드로이드 전용) 백버튼 콜백함수 입니다.
    backPressed: function () {
      // TODO : - 함수를 구현해주세요
      alert("미구현함수입니다.");
    },
    // 저장된 패스 데이터를 반환합니다.
    // passData - JsonString : 저장된 pass 데이터
    onPassCallBack: function (passData) {
      // TODO : - 함수를 구현해주세요
      alert("미구현함수입니다.");
    },
    // checkPushData의 웹 콜백 함수
    // pushData - JsonString : 서버로 부터 발송된 푸시 데이터
    checkPushDataCB: function (pushData) {
      // TODO : - 함수를 구현해주세요
      alert("미구현함수입니다.");
    },
  },
};
