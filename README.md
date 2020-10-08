TailwindCSS
===

_This extension makes it easy to integrate TailwindCSS (https://tailwindcss.com/) into Quasar (https://quasar.dev)._

> The extension is currently in a very early stage. Feel free to test and send PRs/issues along.

# Install
```bash
quasar ext add tailwindcss
```
Quasar CLI will retrieve it from NPM and install the extension.

## Prompts

- `prefix` string - adds a class prefix to every tailwind class name 
- `parts` list - decide which parts of tailwind you want to install (`base`, `components`, `utilities`)

# Uninstall
```bash
quasar ext remove tailwindcss
```
Removes the extension, optionally also the folder `/src/extensions/tailwindcss` to fully delete all files that were created with this plugin.

# Features
- Working `tailwindcss` installation and usage
- PurgeCSS for production builds

> You can configure the `tailwind.css` and `tailwind.config.js` file in 
> the `src/extensions/tailwindcss/` folder after installation. 
> See https://tailwindcss.com/docs/installation/#2-add-tailwind-to-your-css and 
> https://tailwindcss.com/docs/configuration/

# Todos

> As a next todo, I want to link the config creation to the internal quasar variables, 
> thereby removing the necessity to keep two configs up to date

There are still lots of things left to do. Feel free to post feature requests.
