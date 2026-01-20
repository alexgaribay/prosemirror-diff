import { Mark, mergeAttributes } from '@tiptap/core'
import { DiffType } from '@hamflx/prosemirror-diff'

export const DiffMarkExtension = Mark.create({
    name: 'diffMark',

    addAttributes () {
        return {
            type: {
                default: null
            },
            level: {
                default: null
            }
        }
    },

    renderHTML ({ HTMLAttributes, mark }) {
        const { type, level } = mark.attrs

        // Base colors for insertions and deletions
        const baseColors = {
            [DiffType.Inserted]: { bg: '#bcf5bc', border: '#4caf50' },  // green
            [DiffType.Deleted]: { bg: '#ff8989', border: '#f44336' }     // red
        }

        const colors = baseColors[type] || { bg: 'transparent', border: 'transparent' }

        // Different styling based on level
        let style = `background-color: ${colors.bg};`

        if (level === 'word') {
            // Word-level changes: stronger background, underline
            style += ` text-decoration: underline; text-decoration-color: ${colors.border};`
        } else if (level === 'char') {
            // Character-level changes within words: lighter background
            style += ` opacity: 0.85;`
        }

        return ['span', mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, {
            style,
            'data-diff-type': type,
            'data-diff-level': level
        }), 0]
    }
})
