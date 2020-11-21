module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {}
    },
    <% if (prompts.prefix) { %>
    prefix:  '<%= prompts.prefix %>',
    <% } %>
    variants: {},
    plugins: []
}
