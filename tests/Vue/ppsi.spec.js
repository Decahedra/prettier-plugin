run_spec(__dirname, ["vue"], {
    importOrder: ['^@core/(.*)$', '^@server/(.*)', '^@ui/(.*)$', '^[./]'],
    importGroupOrder: 'alphabetical',
    importOrderSeparation: true,
});
