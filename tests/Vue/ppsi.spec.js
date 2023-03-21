run_spec(__dirname, ["vue"], {
    importOrder: ['^@core/(.*)$', '^@server/(.*)', '^@ui/(.*)$', '^[./]'],
    importGroupOrder: false,
    importOrderSeparation: true,
});
