const inquirer = require('inquirer');

module.exports = async function (api) {
    try {
        let answers = await inquirer.prompt([
            {
                type: 'confirm',
                name: 'delete_files',
                message: 'Do you want to delete the generated "src/extensions/tailwindcss" folder?',
                default: true,
            }
        ]);
        if (answers.delete_files) {
            api.removePath('src/extensions/tailwindcss');
        }
    } catch(e) {
        console.log('Something went wrong while deleting extension source files. You can delete "src/extensions/tailwindcss" manually.')
    }
}
