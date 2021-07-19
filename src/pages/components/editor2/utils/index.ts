/*
 * @Description:
 * @Author: acsamson
 * @Date: 2021-06-24 02:38:48
 * @LastEditTime: 2021-06-24 04:14:06
 * @LastEditors: acsamson@foxmail.com
 * @FilePath: /samtools/client/src/pages/SamEditor/SamEditor/components/editor/utils/index.ts
 */
import { RichUtils } from 'draft-js';
interface editorStateChangeProps {
  editorState: any;
  toggleInlineStyle: string;
}
const editorStateChange = (editorState: any, props: editorStateChangeProps) => {
  if (editorState) {
    if (props.hasOwnProperty('toggleInlineStyle')) {
      return RichUtils.toggleInlineStyle(editorState, props.toggleInlineStyle)
    }
  }
  return false;
}
export default {
  editorStateChange
};
