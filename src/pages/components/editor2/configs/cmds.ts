/*
 * @Description:
 * @Author: acsamson
 * @Date: 2021-07-05 03:48:21
 * @LastEditTime: 2021-07-05 03:55:32
 * @LastEditors: acsamson@foxmail.com
 * @FilePath: /samtools/client/src/pages/SamEditor/SamEditor/components/editor/configs/cmds.ts
 */
const _draftJs = require('draft-js');

export function clear(editorState: { getCurrentContent: () => any; }) {

  const contentState = editorState.getCurrentContent();

  const firstBlock = contentState.getFirstBlock();
  const lastBlock = contentState.getLastBlock();

  const allSelected = new _draftJs.SelectionState({
    anchorKey: firstBlock.getKey(),
    anchorOffset: 0,
    focusKey: lastBlock.getKey(),
    focusOffset: lastBlock.getLength(),
    hasFocus: true
  });

  return _draftJs.RichUtils.toggleBlockType(_draftJs.EditorState.push(editorState, _draftJs.Modifier.removeRange(contentState, allSelected, 'backward'), 'remove-range'), 'unstyled');
};
export default {
  clear
}
