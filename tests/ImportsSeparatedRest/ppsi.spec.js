run_spec(__dirname, ['typescript'], {
    importOrder: [
        '^@core/(.*)$',
        '^@server/(.*)',
        '^@ui/(.*)$',
        '<THIRD_PARTY_MODULES>',
        '^[./]',
    ],
    importGroupOrder: false,
    importOrderSeparation: true,
    importOrderParserPlugins: ['typescript'],
});
