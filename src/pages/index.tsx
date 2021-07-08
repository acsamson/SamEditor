/*
 * @Description:
 * @Author: acsamson
 * @Date: 2021-06-24 00:42:03
 * @LastEditTime: 2021-07-09 02:42:35
 * @LastEditors: acsamson@foxmail.com
 * @FilePath: /SamEditor/src/pages/index.tsx
 */
import React from 'react';
import Description from './components/description';
import Header from './components/header';
import Editor from './components/editor';
import { connect } from 'dva';

interface Props {
  cmd: {},
  editorState: any
}
function SamEditor(props: Props) {
  return (
    <div>
      <Description data={{ cmd: props.cmd, editorState: props.editorState }} />
      <Header />
      <Editor />
    </div>
  )
}

export default connect(({ SamEditor }) => ({
  cmd: SamEditor.cmd,
  editorState: SamEditor.editorState,
}))(SamEditor);;
