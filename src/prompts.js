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
                    name: 'Base (might overwrite Quasar defaults)',
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
            ],
            default: ['components', 'utilities']
        }
    ]
}
