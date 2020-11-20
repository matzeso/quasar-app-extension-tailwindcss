TailwindCSS
===

_This extension makes it easy to integrate TailwindCSS (https://tailwindcss.com/) into Quasar (https://quasar.dev)._

> The extension is currently in a very early stage. Feel free to test and send PRs/issues along.

# Install
The new version of this extension already implements `tailwindcss@^2.0.0`.
Unfortunately, Tailwind requires `postcss@^8.1.0`, but the newest version of Quasar still uses v7.
While Quasar still uses v7, you can install the old version of this extension with

```bash
quasar ext add tailwindcss@^1.0.0
```

Once v8 is included, install the new version with:

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

# Contributions
Feel free to send PRs along, or even join as a contributor. 
