/* eslint-disable */
//
//   WebBridge.js
//
//    Web Bridge code by Auto Generator//
export default {
  callNative: {
    //네이티브 판별 함수
    getUserAgent: function () {
      var userAgent = navigator.userAgent.toLowerCase();
      if (userAgent.search("android") > -1) {
        return "android";
      } else if (
        userAgent.search("iphone") > -1 ||
        userAgent.search("ipod") > -1 ||
        userAgent.search("ipad") > -1
      ) {
        return "ios";
      } else {
        return "";
      }
    },
    //네이티브 앱 함수 선언부
    // 기기 권한 설정 목록을 가져옵니다.
    getPermission: function () {
      var currentOs = this.getUserAgent();
      if (currentOs === "android") {
        window.Metapoint.getPermission();
      } else if (currentOs === "ios") {
        var data = {};
        data = { method: "getPermission" };
        webkit.messageHandlers.Metapoint.postMessage(data);
      } else {
        return false;
      }
    },
    // 앱버전,푸시키 ,광고아이디를 가져옵니다.
    getAppInfo: function () {
      try {
        var currentOs = this.getUserAgent();
        if (currentOs === "android") {
          window.Metapoint.getAppInfo();
        } else if (currentOs === "ios") {
          var data = {};
          data = { method: "getAppInfo" };
          webkit.messageHandlers.Metapoint.postMessage(data);
        } else {
          return false;
        }
      } catch {
        return false;
      }
    },
    // 앱버전,푸시키 ,광고아이디를 가져옵니다.
    /* getAppInfo : function() {
      var currentOs = this.getUserAgent();
      if (currentOs === "android") {
        window.Metapoint.getAppInfo();
      } else if (currentOs === "ios") {
        var data = {};
        data = {method: 'getAppInfo'};
        webkit.messageHandlers.Metapoint.postMessage(data);
      } else {
        return false;
      }
    },*/
    // 외부 브라우져로 URL을 엽니다.
    // targetUrl - 대상 URL 주소
    openOutWeb: function (targetUrl) {
      var currentOs = this.getUserAgent();
      if (currentOs === "android") {
        window.Metapoint.openOutWeb(targetUrl);
      } else if (currentOs === "ios") {
        var data = {};
        var body = { targetUrl: targetUrl };
        data = { method: "openOutWeb", body: body };
        webkit.messageHandlers.Metapoint.postMessage(data);
      } else {
        return false;
      }
    },
    // 새창으로 웹페이지를 엽니다.
    // targetUrl - 대상 URL 주소
    openNewWindow: function (targetUrl) {
      var currentOs = this.getUserAgent();
      if (currentOs === "android") {
        window.Metapoint.openNewWindow(targetUrl);
      } else if (currentOs === "ios") {
        var data = {};
        var body = { targetUrl: targetUrl };
        data = { method: "openNewWindow", body: body };
        webkit.messageHandlers.Metapoint.postMessage(data);
      } else {
        return false;
      }
    },
    // 현재 웹페이지 창을 닫습니다.
    closeWeb: function () {
      var currentOs = this.getUserAgent();
      if (currentOs === "android") {
        window.Metapoint.closeWeb();
      } else if (currentOs === "ios") {
        var data = {};
        data = { method: "closeWeb" };
        webkit.messageHandlers.Metapoint.postMessage(data);
      } else {
        return false;
      }
    },
    // 스키마 주소를 엽니다.
    // schemeUrl - 스키마 주소
    runScheme: function (schemeUrl) {
      var currentOs = this.getUserAgent();
      if (currentOs === "android") {
        window.Metapoint.runScheme(schemeUrl);
      } else if (currentOs === "ios") {
        var data = {};
        var body = { schemeUrl: schemeUrl };
        data = { method: "runScheme", body: body };
        webkit.messageHandlers.Metapoint.postMessage(data);
      } else {
        return false;
      }
    },
    // Pass 인증용 웹페이지를 엽니다.
    // passUrl - 패스 인증 페이지 URL
    openPassWeb: function (passUrl) {
      var currentOs = this.getUserAgent();
      if (currentOs === "android") {
        window.Metapoint.openPassWeb(passUrl);
      } else if (currentOs === "ios") {
        var data = {};
        var body = { passUrl: passUrl };
        data = { method: "openPassWeb", body: body };
        webkit.messageHandlers.Metapoint.postMessage(data);
      } else {
        return false;
      }
    },
    // 패스 인증 데이터를 저장합니다.
    // passData - JsonString : Pass 데이터
    setPassData: function (passData) {
      var currentOs = this.getUserAgent();
      if (currentOs === "android") {
        window.Metapoint.setPassData(passData);
      } else if (currentOs === "ios") {
        var data = {};
        var body = { passData: passData };
        data = { method: "setPassData", body: body };
        webkit.messageHandlers.Metapoint.postMessage(data);
      } else {
        return false;
      }
    },
    // 푸시로 전달받은 데이터를 반환합니다.
    checkPushData: function () {
      var currentOs = this.getUserAgent();
      if (currentOs === "android") {
        window.Metapoint.checkPushData();
      } else if (currentOs === "ios") {
        var data = {};
        data = { method: "checkPushData" };
        webkit.messageHandlers.Metapoint.postMessage(data);
      } else {
        return false;
      }
    },
    // 앱 설정 화면을 엽니다.
    openAppSetting: function () {
      var currentOs = this.getUserAgent();
      if (currentOs === "android") {
        window.Metapoint.openAppSetting();
      } else if (currentOs === "ios") {
        var data = {};
        data = { method: "openAppSetting" };
        webkit.messageHandlers.Metapoint.postMessage(data);
      } else {
        return false;
      }
    },
  },
};
