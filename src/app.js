import Vue from "vue";
import Main from "./component/Main.vue";

new Vue({
    el: "#main",
    components: {
        mainComponent: Main
    },
    template: "<mainComponent></mainComponent>"
})