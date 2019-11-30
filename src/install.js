/**
 * Quasar App Extension install script
 *
 * Docs: https://quasar.dev/app-extensions/development-guide/install-api
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/InstallAPI.js
 */

const fs = require
module.exports = function (api) {
    api.render('./templates', {
        prompts: api.prompts
    });

    api.onExitLog('Thanks for installing matzeso/tailwindcss. You can change tailwind.config.js according to the official documentation.');
}
