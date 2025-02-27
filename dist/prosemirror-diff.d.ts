import { Node } from 'prosemirror-model';

declare function patchDocumentNode(schema: any, oldNode: any, newNode: any): any;
declare function patchTextNodes(schema: any, oldNode: any, newNode: any): any;
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
declare function createDiffMark(schema: any, type: any): any;
declare function createTextNode(schema: any, content: any, marks?: any[]): any;
declare function diffEditor(schema: any, oldDoc: any, newDoc: any): any;

declare namespace DiffType {
    const Unchanged: number;
    const Deleted: number;
    const Inserted: number;
}

export { DiffType, assertNodeTypeEqual, computeChildEqualityFactor, createDiffMark, createDiffNode, createNewNode, createTextNode, diffEditor, ensureArray, getNodeAttribute, getNodeAttributes, getNodeChildren, getNodeMarks, getNodeProperty, getNodeText, isNodeEqual, isTextNode, matchNodeType, normalizeNodeContent, patchDocumentNode, patchTextNodes };
