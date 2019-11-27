/**
 * Quasar App Extension prompts script
 *
 * Docs: https://quasar.dev/app-extensions/development-guide/prompts-api
 *
 * Inquirer prompts
 * (answers are available as "api.prompts" in the other scripts)
 * https://www.npmjs.com/package/inquirer#question
 *
 * Example:

 return [
 {
      name: 'prefix',
      type: 'string',
      required: false,
      message: 'Tailwind Utility Class Prefix. No prefix can result in overlapping classes with Quasar.',
      default: 'tw-',
    },
 {
      name: 'preset',
      type: 'checkbox',
      message: 'Check the features needed for your project:',
      choices: [
        {
          name: 'Install script',
          value: 'install'
        },
        {
          name: 'Prompts script',
          value: 'prompts'
        },
        {
          name: 'Uninstall script',
          value: 'uninstall'
        }
      ]
    }
 ]

 */

module.exports = function () {
    return [
        {
            name: 'prefix',
            type: 'string',
            required: false,
            message: 'Tailwind Utility Class Prefix. No prefix can result in overlapping classes with Quasar.',
            default: 'tw-',
        },
    ]
}
