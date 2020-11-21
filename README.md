TailwindCSS
===

_This extension makes it easy to integrate TailwindCSS (https://tailwindcss.com/) into Quasar (https://quasar.dev)._


# Install
This extension now uses `TailwindCSS v2`.

```bash
quasar ext add tailwindcss
```

> We currently use `tailwindcss@^2.0.1-compat`.
> While TailwindCSS v2 requires `postcss@^8.1.0`,  Quasar still uses v7. We therefore make use of their compatibility version that has the same features as the regular v2, but uses PostCSS v7 instead. As soon as Quasar ships with PostCSS 8, we will switch over to regular TailwindCSS v2.


There have been [reports](https://github.com/matzeso/quasar-app-extension-tailwindcss/issues/7) that some part of TailwindCSS v2 breaks with current Quasar rules. 
In case you encounter difficulties with TailwindCSS v2, you can use v1 by installing the extension like this:

```bash
quasar ext add tailwindcss@^1.0.0
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
