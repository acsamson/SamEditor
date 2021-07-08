/*
 * @Description:
 * @Author: acsamson
 * @Date: 2021-06-24 01:39:22
 * @LastEditTime: 2021-07-09 03:17:49
 * @LastEditors: acsamson@foxmail.com
 * @FilePath: /SamEditor/src/pages/configs/handlers.ts
 */
import { ContentUtils } from 'braft-utils';
import { RichUtils } from 'draft-js';
/**
 *
 * @param command 命令, 例如 加粗, 斜体等命令
 * @param editorState 当前编辑器选中的值
 * @param editor 当前编辑器的实例
 * @returns
 */
export const handleKeyCommand = (command: string, editorState: any, editor: any) => {
  if (
    editor.editorProps.handleKeyCommand &&
    editor.editorProps.handleKeyCommand(command, editorState, editor) ===
    'handled'
  ) {
    return 'handled';
  }

  if (command === 'braft-save') {
    if (editor.editorProps.onSave) {
      editor.editorProps.onSave(editorState);
    }
    return 'handled';
  }

  const { controls, excludeControls } = editor.editorProps;
  const allowIndent =
    (controls.indexOf('text-indent') !== 0 ||
      controls.find((item: { key: string; }) => item.key === 'text-indent')) &&
    excludeControls.indexOf('text-indent') === -1;
  const cursorStart = editorState.getSelection().getStartOffset();
  const cursorEnd = editorState.getSelection().getEndOffset();
  const cursorIsAtFirst = cursorStart === 0 && cursorEnd === 0;

  if (command === 'backspace') {
    if (
      editor.editorProps.onDelete &&
      editor.editorProps.onDelete(editorState) === false
    ) {
      return 'handled';
    }

    const blockType = ContentUtils.getSelectionBlockType(editorState);

    if (allowIndent && cursorIsAtFirst && blockType !== 'code-block') {
      editor.setValue(ContentUtils.decreaseSelectionIndent(editorState));
    }
  }

  if (command === 'tab') {
    const blockType = ContentUtils.getSelectionBlockType(editorState);

    if (blockType === 'code-block') {
      editor.setValue(
        ContentUtils.insertText(
          editorState,
          ' '.repeat(editor.editorProps.codeTabIndents),
        ),
      );
      return 'handled';
    }
    if (
      blockType === 'ordered-list-item' ||
      blockType === 'unordered-list-item'
    ) {
      // const newEditorState = RichUtils.onTab(event, editorState, 4);
      if (newEditorState !== editorState) {
        editor.setValue(newEditorState);
      }
      return 'handled';
    }
    if (blockType !== 'atomic' && allowIndent && cursorIsAtFirst) {
      editor.setValue(ContentUtils.increaseSelectionIndent(editorState));
      return 'handled';
    }
  }

  const nextEditorState = ContentUtils.handleKeyCommand(editorState, command);

  if (nextEditorState) {
    editor.setValue(nextEditorState);
    return 'handled';
  }

  return 'not-handled';
};
