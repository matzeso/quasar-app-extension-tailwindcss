/**
 * Quasar App Extension install script
 *
 * Docs: https://quasar.dev/app-extensions/development-guide/install-api
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/InstallAPI.js
 */
module.exports = function (api) {
    api.render('./templates', {
        prompts: api.prompts
    });

    api.onExitLog('Thanks for installing tailwindcss. You can change files in src/extensions/tailwindcss folder according to the official documentation.');
}
