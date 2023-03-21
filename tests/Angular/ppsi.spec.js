run_spec(__dirname, ["typescript"], {
    importOrder: ['^@core/(.*)$', '^@server/(.*)', '^@ui/(.*)$', '^[./]'],
    importGroupOrder: false,
    importOrderSeparation: true,
    importOrderParserPlugins : ["typescript", "classProperties", "[\"decorators\", { \"decoratorsBeforeExport\": true }]"]
});
