import { Node } from 'prosemirror-model';

declare function tokenizeText(text: string): Array<{
    text: string;
    start: number;
    end: number;
}>;
declare function diffWordsWithDetail(oldText: string, newText: string): Array<{
    type: number;
    text: string;
    level: 'word' | 'char';
}>;
declare function patchDocumentNode(schema: any, oldNode: any, newNode: any, options?: {}): any;
declare function patchTextNodes(schema: any, oldNode: any, newNode: any, options?: {}): any;
declare function computeChildEqualityFactor(node1: any, node2: any): number;
declare function assertNodeTypeEqual(node1: any, node2: any): void;
declare function ensureArray(value: any): any[];
declare function isNodeEqual(node1: any, node2: any): any;
declare function normalizeNodeContent(node: any): any[];
declare function getNodeProperty(node: any, property: any): any;
declare function getNodeAttribute(node: any, attribute: any): any;
declare function getNodeAttributes(node: any): any;
declare function getNodeMarks(node: any): any;
declare function getNodeChildren(node: any): any;
declare function getNodeText(node: any): any;
declare function isTextNode(node: any): boolean;
declare function matchNodeType(node1: any, node2: any): boolean;
declare function createNewNode(oldNode: any, children: any): Node;
declare function createDiffNode(schema: any, node: any, type: any): any;
declare function createDiffMark(schema: any, type: any, level?: string): any;
declare function createTextNode(schema: any, content: any, marks?: any[]): any;
declare function diffEditor(schema: Schema, oldDoc: Object, newDoc: Object, options?: {
    level: 'char' | 'word';
}): Node;

declare namespace DiffType {
    const Unchanged: number;
    const Deleted: number;
    const Inserted: number;
}

export { DiffType, assertNodeTypeEqual, computeChildEqualityFactor, createDiffMark, createDiffNode, createNewNode, createTextNode, diffEditor, diffWordsWithDetail, ensureArray, getNodeAttribute, getNodeAttributes, getNodeChildren, getNodeMarks, getNodeProperty, getNodeText, isNodeEqual, isTextNode, matchNodeType, normalizeNodeContent, patchDocumentNode, patchTextNodes, tokenizeText };
