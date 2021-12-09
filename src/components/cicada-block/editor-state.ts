import { completionKeymap } from "@codemirror/autocomplete"
import { closeBrackets, closeBracketsKeymap } from "@codemirror/closebrackets"
import { defaultKeymap } from "@codemirror/commands"
import { commentKeymap } from "@codemirror/comment"
import { foldKeymap } from "@codemirror/fold"
import { defaultHighlightStyle } from "@codemirror/highlight"
import { history, historyKeymap } from "@codemirror/history"
import { javascript } from "@codemirror/lang-javascript"
import { indentOnInput } from "@codemirror/language"
import { lintKeymap } from "@codemirror/lint"
import { bracketMatching } from "@codemirror/matchbrackets"
import { rectangularSelection } from "@codemirror/rectangular-selection"
import { highlightSelectionMatches, searchKeymap } from "@codemirror/search"
import { EditorState } from "@codemirror/state"
import { drawSelection, highlightSpecialChars, keymap } from "@codemirror/view"

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
