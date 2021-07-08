/*
 * @Description:
 * @Author: acsamson
 * @Date: 2021-06-24 02:22:42
 * @LastEditTime: 2021-07-09 03:16:49
 * @LastEditors: acsamson@foxmail.com
 * @FilePath: /SamEditor/src/pages/components/editor/index.tsx
 */
import React, { useState, useEffect } from 'react';
import { message } from 'antd';
// ================================= 编辑器相关
import { EditorState, convertFromRaw } from 'draft-js';
import Editor from '@draft-js-plugins/editor';
import 'draft-js/dist/Draft.css';
import utils from './utils';
import _isEqual from 'lodash/isEqual';
import './index.less';
import customStyleMap from './data/customStyleMap';
import plugins from '../../configs/plugins';
import { connect } from 'dva';
import { initialState } from './data/initialState';
import cmdConfigs from './configs/cmds';
import styles from './index.less';
import './editor.less';
const CharCounter = plugins.counterPlugin.CharCounter;
const _plugins = Object.values(plugins);
interface Props {
  cmd: any;
  onChange: Function;
  dispatch: Function;
}
function EditorContainer(props: Props) {
  const editor = React.useRef<any>(null);
  const { dispatch, cmd } = props;
  // const [editorState, setEditorState] = useState(EditorState.createEmpty());
  // const [editorState, setEditorState] = useState(createEditorStateWithText('大萨达所大所大所大所'));
  const [editorState, setEditorState] = useState(EditorState.createWithContent(convertFromRaw(initialState)));
  const [oldEditorState, setoldEditorState] = useState(editorState);

  const onChange = (((val: any) => {
    const _currentContent = val.getCurrentContent();
    const _selectState = val.getSelection();
    const _anchorKey = _selectState.getAnchorKey();
    const _start = _selectState.getStartOffset();
    const _end = _selectState.getEndOffset();
    const _currentContentBlock = _currentContent.getBlockForKey(_anchorKey);
    const _selectedText = _currentContentBlock.getText().slice(_start, _end);
    props.onChange && props.onChange(val);
    dispatch({
      type: 'SamEditor/setEditorState',
      editorState: val
    });
    setEditorState(val)
  }));
  useEffect(() => {
    if (!_isEqual(oldEditorState, editorState) && props.cmd && Object.keys(props.cmd).length) {
      message.success(JSON.stringify(props.cmd));
      const dataInner = utils.editorStateChange(editorState, props.cmd);
      if (dataInner) {
        setoldEditorState(dataInner);
        onChange(dataInner);
      }
    }
  }, [editorState, oldEditorState, onChange, props]);
  useEffect(() => {
    if (props.cmd.toggleInlineStyle && props.cmd.toggleInlineStyle === 'REMOVESTYLES') {
      cmdConfigs.clear(editorState);
    }
  }, [editorState, props.cmd])
  const editorProps = {
    // =============================== Basics 必选参数
    ref: editor,
    editorState,
    onChange,
    // =============================== Presentation (Optional) 介绍(可选)
    placeholder: "Write something!",
    // =============================== Behavior (Optional) 行为(可选)
    // 改变editor
    // onTab: props.onTab,
    // 聚焦
    // onFocus: props.onFocus,
    // 离开焦点
    // onBlur: props.onBlur,
    // 处理key控制信息, 例如bold加粗
    // handleKeyCommand,
    // handleReturn: props.handleReturn,
    // handleBeforeInput: props.handleBeforeInput,
    // handleDrop: props.handleDrop,
    // handleDroppedFiles: props.handleDroppedFiles,
    // handlePastedText: props.handlePastedText,
    // handlePastedFiles: props.handlePastedFiles,
    autoCorrect: false, // 可选，否打开自动修正功能
    spellCheck: false // 可选，是否打开拼写检查
  }

  return (
    <div className={styles.editor} onClick={e => {
      editor.current.focus();
    }}>
      <h1><strong>EditorContent</strong></h1>
      <div className={styles.content}>
        <Editor
          {...editorProps}
          customStyleMap={customStyleMap}
          plugins={_plugins}
        />
      </div>
      <div className={styles.wordsCount}>字数统计:<CharCounter limit={200} /></div>
    </div>
  )
}
export default connect(({ SamEditor }) => ({
  cmd: SamEditor.cmd
}))(EditorContainer);
