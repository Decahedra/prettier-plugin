import { Import, ImportDeclaration } from '@babel/types';
import { naturalSort } from '../natural-sort';
import { PrettierOptions } from '../types';

export const getSortedNodesGroup = (
    imports: ImportDeclaration[],
    options: Pick<PrettierOptions, 'importOrderGroupNamespaceSpecifiers' | 'importGroupOrder'>,
) => {
    const sortOption = (a: ImportDeclaration,b: ImportDeclaration) => options.importGroupOrder ==='length' ?
        ((a.end || 0) - (a.start || 0)) - ((b.end || 0) - (b.start || 0)) ||   a.source.value.localeCompare(b.source.value)
        : options.importGroupOrder === 'alphabetical' ?  a.source.value.localeCompare(b.source.value) :  naturalSort(a.source.value, b.source.value)

    return imports.sort((a, b) => {
        if (options.importOrderGroupNamespaceSpecifiers) {
            const diff = namespaceSpecifierSort(a, b);
            if (diff !== 0) return diff;
        }
        return sortOption(a, b);
    });
};

function namespaceSpecifierSort(a: ImportDeclaration, b: ImportDeclaration) {
    const aFirstSpecifier = a.specifiers.find(
        (s) => s.type === 'ImportNamespaceSpecifier',
    )
        ? 1
        : 0;
    const bFirstSpecifier = b.specifiers.find(
        (s) => s.type === 'ImportNamespaceSpecifier',
    )
        ? 1
        : 0;
    return bFirstSpecifier - aFirstSpecifier;
}
