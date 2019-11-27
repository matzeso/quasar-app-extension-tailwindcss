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
            message: 'Tailwind Class Prefix. No prefix can result in overlapping classes with Quasar.',
            default: 'tw-',
        },
        {
            // "iconSet" will be the variable
            // storing the answer
            name: 'parts',
            type: 'checkbox',
            message: 'Choose which parts of TailwindCSS you want to include',
            choices: [
                {
                    name: 'Base',
                    value: 'base', // value of the answer variable
                    short: 'Base' // Short name displayed after user picks this
                },
                {
                    name: 'Components',
                    value: 'components', // value of the answer variable
                    short: 'Components' // Short name displayed after user picks this
                },
                {
                    name: 'Utilities',
                    value: 'utilities', // value of the answer variable
                    short: 'Utilities' // Short name displayed after user picks this
                }
            ]
        }
    ]
}
