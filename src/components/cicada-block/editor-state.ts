import { javascript } from "@codemirror/lang-javascript"
import {
  keymap,
  highlightSpecialChars,
  drawSelection,
  highlightActiveLine,
} from "@codemirror/view"
import { Extension, EditorState } from "@codemirror/state"
import { EditorView } from "@codemirror/view"
import { history, historyKeymap } from "@codemirror/history"
import { foldGutter, foldKeymap } from "@codemirror/fold"
import { indentOnInput } from "@codemirror/language"
import { lineNumbers, highlightActiveLineGutter } from "@codemirror/gutter"
import { defaultKeymap } from "@codemirror/commands"
import { bracketMatching } from "@codemirror/matchbrackets"
import { closeBrackets, closeBracketsKeymap } from "@codemirror/closebrackets"
import { searchKeymap, highlightSelectionMatches } from "@codemirror/search"
import { autocompletion, completionKeymap } from "@codemirror/autocomplete"
import { commentKeymap } from "@codemirror/comment"
import { rectangularSelection } from "@codemirror/rectangular-selection"
import { defaultHighlightStyle } from "@codemirror/highlight"
import { lintKeymap } from "@codemirror/lint"

export function createEditorState(opts: { doc: string }): EditorState {
  return EditorState.create({
    doc: opts.doc,
    extensions: [
      javascript(),
      // lineNumbers(),
      // highlightActiveLineGutter(),
      highlightSpecialChars(),
      history(),
      // foldGutter(),
      drawSelection(),
      EditorState.allowMultipleSelections.of(true),
      indentOnInput(),
      defaultHighlightStyle.fallback,
      bracketMatching(),
      closeBrackets(),
      // autocompletion(),
      rectangularSelection(),
      // highlightActiveLine(),
      highlightSelectionMatches(),
      keymap.of([
        ...closeBracketsKeymap,
        ...defaultKeymap,
        ...searchKeymap,
        ...historyKeymap,
        ...foldKeymap,
        ...commentKeymap,
        ...completionKeymap,
        ...lintKeymap,
      ]),
    ],
  })
}
