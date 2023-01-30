export default ({ app }, inject) => {
  // Inject $hello(msg) in Vue, context and store.
  inject("_msg", (msg) => {
    alert(msg);
  });
};
