/**
 * Quasar App Extension index/runner script
 * (runs on each dev/build)
 *
 * Docs: https://quasar.dev/app-extensions/development-guide/index-api
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/IndexAPI.js
 */

function extendConf (conf) {
    conf.css.push('../extensions/tailwindcss/tailwind.css')
}

module.exports = function (api) {
    api.compatibleWith('quasar', '^1.0.0 || ^2.0.0 || ^2.0.0-beta')
    api.compatibleWith('@quasar/app', '^1.0.0 || ^2.0.0 || ^3.0.0-beta')
    // api.compatibleWith('postcss', '^8.1.0') // using compat build for now

    const purgecss = require('@fullhuman/postcss-purgecss')({

        // Specify the paths to all of the template files in your project
        content: [
            api.resolve.src('**/*.html'),
            api.resolve.src('**/*.vue'),
        ],

        // Include any special characters you're using in this regular expression
        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
    })

    api.chainWebpack((cfg, {isClient, isServer}, api) => {
        const plugins = [
            require('tailwindcss')(api.resolve.src('extensions/tailwindcss/tailwind.config.js')),
            require('autoprefixer'),
        ];
        if (api.ctx.prod) {
            plugins.push(purgecss);
        }

        cfg.module
            .rule('tailwind')
                .test(/\.css$/)
                .include
                    .add(api.resolve.src('extensions/tailwindcss'))
                    .end()
                .use('postcss')
                    .loader('postcss-loader')
                    .options({postcssOptions: {
                        ident: 'postcss',
                        plugins: plugins
                    }})
                    .end()
    })

    api.extendQuasarConf(extendConf)
}
