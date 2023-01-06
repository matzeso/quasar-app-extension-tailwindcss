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

    const tailwindConfigFile = api.resolve.src('extensions/tailwindcss/tailwind.config.js');

    // tailwind.config.js to see if we should set purge-css config ourselves
    let tailwindConfig = {};
    try {
        tailwindConfig = require(tailwindConfigFile);
    } catch (e) {
        // no worries, perfectly fine.
    }

    let purgecssConfig;
    let purgecssContent = [
        api.resolve.src('**/*.html'),
        api.resolve.src('**/*.vue'),
    ];

    // purge config found; check if we need to alter any settings
    if (typeof(tailwindConfig.purge) !== 'undefined') {
        purgecssConfig = tailwindConfig.purge;

        if (typeof(purgecssConfig.content) === 'undefined') {
            purgecssConfig.content = purgecssContent;
        } else {
            purgecssConfig.content = purgecssConfig.content.map(api.resolve.src);
        }

        // by default, only enable purge on production
        if (typeof(purgecssConfig.enabled) === 'undefined') {
            tailwindConfig.purge.enabled = api.ctx.prod;
        }
    } else {
        // use default purge config
        purgecssConfig = {
            enabled: api.ctx.prod,
            content: purgecssContent
        };
    }

    purgecssConfig.defaultExtractor = content => content.match(/[\w-/:]+(?<!:)/g) || [];

    tailwindConfig.purge = purgecssConfig;

    api.chainWebpack((cfg, {isClient, isServer}, api) => {
        const plugins = [
            require('tailwindcss')(tailwindConfig),
            require('autoprefixer'),
        ];

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
