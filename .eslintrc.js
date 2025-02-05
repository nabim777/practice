module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:vue/essential",
        "plugin:vue/vue3-recommended"
    ],
    "parserOptions": {
        "ecmaVersion": 2021,
        "sourceType": "module"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        "vue/multi-word-component-names": "off",
        "vue/no-reserved-component-names": "off"
    }
};
