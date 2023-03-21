run_spec(__dirname, ['typescript'], {
    importOrder: [
        '^@core/(.*)$',
        '^@server/(.*)',
        '^@ui/(.*)$',
        '<THIRD_PARTY_MODULES>',
        '^[./]',
    ],
    importGroupOrder: 'alphabetical',
    importOrderSeparation: true,
    importOrderParserPlugins: ['typescript'],
});
