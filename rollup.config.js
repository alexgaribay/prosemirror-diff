import esbuild from "rollup-plugin-esbuild";
import dts from "rollup-plugin-dts";

/**
 * @type {import('rollup').RollupOptions}
 */
const config = [
    {
        input: "src/index.js",
        output: {
            file: "dist/prosemirror-diff.js",
        },
        plugins: [esbuild()],
        external: [
            "diff-match-patch",
            "prosemirror-model",
        ],
    },
    {
        input: "src/index.js",
        output: {
            file: "dist/prosemirror-diff.d.ts",
            format: "es",
        },
        plugins: [dts()],
    },
];

export default config;
