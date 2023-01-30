<template>
  <div class="contents">
    <section>
      <h1><router-link to="/plugins">Plugins (전역기능)</router-link></h1>
      <ul>
        <li>
          자주 사용될 만한 <span v-colorChange>속성, 함수, 라이브러리</span>등의
          기능을 높혀주는 기능
        </li>
        <li>전역 볌위를 오염시키지 않음</li>
        <li>
          플러그인을 한번 설치하고 나면 뷰 인스턴스의 내부에 플러그인에 정의한
          기능이 추가 되고 <span v-colorChange>this</span> 접근가능
        </li>
        <li>
          플러그인의 종류에는
          <span v-colorChange>코어 플러그인, 라이브러리 플러그인</span>등이
          있습니다.
        </li>
      </ul>
      <h2>코어 플러그인(@vue/cli-plugin-...)</h2>
      <ul>
        <li>router</li>
        <li>Vuex(store)</li>
        <li>babel</li>
        <li>eslint</li>
        <li>...</li>
      </ul>
      <h2>라이브러리 플러그인(vue-cli-plugin-....)</h2>
      <ul>
        <li>vuetify</li>
        <li>axios</li>
        <li>...</li>
      </ul>
      <h2>라이브러리/사용자 플러그인 선언방법</h2>
      <strong>main.js </strong>
      <highlightjs :code="code1" />
      <h2>코어 블러그인 EX) router</h2>
      <strong>router > index.js </strong>
      <highlightjs :code="code2" />
      <strong>main.js </strong>
      <highlightjs :code="code3" />
      <h2>플로그인 만들기</h2>
      <strong>plugins > test.js </strong>
      <highlightjs :code="code4" />
      <h3>커스텀 디렉티브</h3>
      <highlightjs :code="code5" />
      <ul>
        <li>디렉티브가 바인딩된 엘리먼트를 수신해서 동작을 수행함</li>
        <li>코어에 포함된 기본 디렉티브(v-model, v-show)</li>
        <li>
          bind : el, binding{value , oldValue , arg .....} , vnode , prevNode
        </li>
      </ul>
      <h3>Vue 인스턴스 메소드</h3>
      <highlightjs :code="code6" />
      <ul>
        <li>
          Vue 인스턴스 메소드로 추가 되어 <span v-colorChange>this</span>로
          접근가능
        </li>
        <li>전역 범위를 오염시키지 않음</li>
        <li>
          플러그인 변수명은 <span v-colorChange>$_</span>로 시작, 이는 사용자
          인스턴스 관련 속성이라는 약속
        </li>
      </ul>
    </section>
    <section>
      <h1><router-link to="/mixins">Mixins</router-link></h1>
      <ul>
        <li>컴포넌트 간에 공통으로 사용하고 있는 로직</li>
        <li>
          믹스인에 정의할 수 있는 재사용 로직은 data, methods, created 등과 같은
          컴포넌트 옵션
        </li>
      </ul>
      <h2>선언방법</h2>
      <strong>mixins > test.js </strong>
      <highlightjs :code="code7" />
      <strong>views > mixins > index.vue </strong>
      <highlightjs :code="code8" />
    </section>
    <section>
      <h1>Nuxt Plugins</h1>
      <h2>외부 라이브러리 사용법 Ex) axios</h2>
      <strong>nuxt.config.js</strong>
      <highlightjs :code="code9" />
      <strong>plugins > axios.js</strong>
      <highlightjs :code="code10" />
      <h2>외부 라이브러리 사용법 Ex) v-tootip</h2>
      <strong>nuxt.config.js</strong>
      <highlightjs :code="code11" />
      <strong>plugins > vue-tooltip.js</strong>
      <highlightjs :code="code12" />
      <h2>사용자 인스턴스 만들기</h2>
      <strong>nuxt.config.js</strong>
      <highlightjs :code="code13" />
      <strong>plugins > test.js</strong>
      <highlightjs :code="code14" />
      <h2>속성</h2>
      <strong>mode : client or <span v-colorChange>server</span></strong>
      <highlightjs :code="code15" />
    </section>
  </div>
</template>

<script>
import guideMixin from "@/mixins/guide-mixin";
export default {
  name: "index-main",
  mixins: [guideMixin],
  data() {
    return {
      code1:
        "import Vue from 'vue';\n" +
        "import test from '@/plugins/test';\n" +
        "Vue.use(test ,{options});",
      code2:
        'import Vue from "vue";\n' +
        'import VueRouter from "vue-router";\n' +
        "Vue.use(VueRouter);\n" +
        "\n" +
        "let routes = [\n" +
        "  {\n" +
        '    path: "/",\n' +
        '    name: "메인",\n' +
        "    component: home,\n" +
        "  },\n" +
        "];\n" +
        "\n" +
        "const router = new VueRouter({\n" +
        '  mode: "history",\n' +
        '  base: "/",\n' +
        "  routes,\n" +
        "});\n" +
        "\n" +
        "export default router;\n",
      code3:
        "import Vue from 'vue';\n" +
        "import App from './App.vue';\n" +
        "import router from './router';\n" +
        "new Vue({\n" +
        "  router,\n" +
        "  render: (h) => h(App),\n" +
        "}).$mount('#app');\n",
      code4:
        "export default {\n" +
        "  install(vue, options) {\n" +
        "    console.log(vue, options);\n" +
        "  },\n" +
        "};\n",
      code5:
        "export default {\n" +
        "  install(vue, options) {\n" +
        '      vue.directive("demo", {\n' +
        "        //bind : el, binding{value , oldValue , arg .....} , vnode , prevNode\n" +
        "        bind(el, binding) {\n" +
        "          console.log(el, binding.value);\n" +
        "          el.style.color = binding.value.color;\n" +
        "        },\n" +
        "      });\n" +
        "  },\n" +
        "};\n",
      code6:
        "export default {\n" +
        "  install(vue, options) {\n" +
        "    vue.prototype.$_test = () => {\n" +
        '      console.log("test");\n' +
        "    };\n" +
        "  },\n" +
        "};\n",
      code7:
        "export const mixinsTest = {\n" +
        "    data() {\n" +
        "        return {\n" +
        "        };\n" +
        "    },\n" +
        "    created() {\n" +
        "    },\n" +
        "    mounted() {\n" +
        "    },\n" +
        "    methods:{}\n" +
        "};\n",
      code8:
        'import { mixinsTest } from "@/mixins/test";\n' +
        "export default {\n" +
        '  name: "mixins-index",\n' +
        "  mixins: [mixinsTest],\n" +
        "};",
      code9:
        "export default {\n" +
        "  modules: ['@nuxtjs/axios'],\n" +
        '  plugins: ["~/plugins/axios"],\n' +
        "};\n",
      code10:
        "export default ({ $axios }, redirect) => {\n" +
        "  $axios.onRequest((config) => {\n" +
        '    console.log("Making request to " + config.url);\n' +
        "  });\n" +
        "\n" +
        "  $axios.onError((error) => {\n" +
        "    const code = parseInt(error.response && error.response.status);\n" +
        "    if (code === 400) {\n" +
        '      redirect("/400");\n' +
        "    }\n" +
        "  });\n" +
        "};\n",
      code11:
        "export default {\n" +
        '  plugins: ["~/plugins/vue-tooltip.js"],\n' +
        "};\n",
      code12:
        'import Vue from "vue";\n' +
        'import VTooltip from "v-tooltip";\n' +
        "\n" +
        "Vue.use(VTooltip);\n",
      code13:
        "export default {\n" + '  plugins: ["~/plugins/test.js"],\n' + "};\n",
      code14:
        "export default ({ app }, inject) => {\n" +
        "  // Inject $hello(msg) in Vue, context and store.\n" +
        '  inject("_msg", (msg) => {\n' +
        "    alert(msg);\n" +
        "  });\n" +
        "};\n",
      code15:
        "export default {\n" +
        "  plugins: [\n" +
        "    { src: '~/plugins/both-sides.js' },\n" +
        "    { src: '~/plugins/client-only.js', mode: 'client' }, // only on client side\n" +
        "    { src: '~/plugins/server-only.js', mode: 'server' } // only on server side\n" +
        "  ]\n" +
        "}",
    };
  },
};
</script>

<style scoped>
.contents {
  text-align: left;
}
</style>
