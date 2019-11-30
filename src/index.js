/**
 * Quasar App Extension index/runner script
 * (runs on each dev/build)
 *
 * Docs: https://quasar.dev/app-extensions/development-guide/index-api
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/IndexAPI.js
 */

function extendConf (conf) {
    // make sure boot & component files get transpiled
    //conf.build.transpileDependencies.push(/quasar-app-extension-tailwindcss[\\/]src[\\/]extensions[\\/]tailwindcss/)
    // make sure my-ext css goes through webpack to avoid ssr issues
    conf.css.push('../extensions/tailwindcss/tailwind.css')
}

module.exports = function (api) {
    api.compatibleWith('quasar', '^1.0.0')
    api.compatibleWith('@quasar/app', '^1.0.0')

    api.chainWebpack((cfg, {isClient, isServer}, api) => {

    })

    api.extendQuasarConf(extendConf)
}
