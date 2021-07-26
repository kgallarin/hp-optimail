import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import * as Cookies from "js-cookie";

// module(s)
import app from "./modules/app.js";
import move_money from "./modules/move_money.js";
import blog from "./modules/blog.js";
import alert from "./modules/alert.js";

Vue.use(Vuex);

window.Cookies = Cookies;
const debug = process.env.NODE_ENV !== "production";

const store = new Vuex.Store({
    modules: {
        app,
        move_money,
        blog,
        alert
    },
    strict: debug,
    // cookies if you want to persist data on page refresh
    plugins: [
        createPersistedState({
            paths: [""],
            storage: {
                getItem: key => Cookies.get(key),
                setItem: (key, value) =>
                    Cookies.set(key, value, { expires: 3, secure: !debug }),
                removeItem: key => Cookies.remove(key)
            }
        })
    ]
});

export default store;
