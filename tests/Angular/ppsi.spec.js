run_spec(__dirname, ["typescript"], {
    importOrder: ['^@core/(.*)$', '^@server/(.*)', '^@ui/(.*)$', '^[./]'],
    importGroupOrder: 'alphabetical',
    importOrderSeparation: true,
    importOrderParserPlugins : ["typescript", "classProperties", "[\"decorators\", { \"decoratorsBeforeExport\": true }]"]
});
