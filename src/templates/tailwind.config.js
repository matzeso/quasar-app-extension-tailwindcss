module.exports = {
    theme: {
        extend: {}
    },
    <% if (prompts.prefix) { %>
    prefix:  '<%= prompts.prefix %>',
    <% } %>
    variants: {},
    plugins: []
}
