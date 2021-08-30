import React, { Component } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import { Tag } from 'antd';
import Immutable from 'immutable';
import "draft-js/dist/Draft.css";
import styles from './index.less'
import StyleButton from './components/StyleButton';
import BlockStyleControls from './controllers/BlockStyleControls';
import InlineStyleControls from './controllers/InlineStyleControls';
import { TODO_STYLES } from './configs/controllers';
import { cmdStyleMap } from './data/cmdStyleMap';
import { BiCheck, BiX } from 'react-icons/bi';


class MyEditor extends Component {
  constructor() {
    super();
    this.state = {
      editorState: EditorState.createEmpty()
    };
  }
  _onChange(editorState) {
    this.setState({ editorState });
  }

  _handleKeyCommand(command) {
    const { editorState } = this.state;
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this._onChange(newState);
      return true;
    }
    return false;
  }

  _onTab(e) {
    const maxDepth = 4;
    this._onChange(RichUtils.onTab(e, this.state.editorState, maxDepth));
  }

  _toggleBlockType(blockType) {
    if (blockType === 'remove-block-style') {
      this._onChange(
        // blockType如果已经存在就会被设置为unstyled
        RichUtils.tryToRemoveBlockStyle(this.state.editorState)
      );
    } else {
      this._onChange(
        // blockType如果已经存在就会被设置为unstyled
        RichUtils.toggleBlockType(this.state.editorState, blockType)
      );
    }
  }

  _toggleInlineStyle(inlineStyle) {
    this._onChange(
      RichUtils.toggleInlineStyle(
        this.state.editorState,
        inlineStyle
      )
    );
  }

  _getBlockStyle(block) {
    switch (block.getType()) {
      case 'blockquote': return styles['RichEditor-blockquote'];
      default: return null;
    }
  }
  render() {
    let { editorState } = this.state;
    let className = styles['RichEditor-editor'];
    // 如果没有内容了就需要新建内容
    if (editorState && editorState.getCurrentContent) {
      var contentState = editorState.getCurrentContent();
      if (!contentState.hasText()) {
        if (contentState.getBlockMap().first().getType() !== 'unstyled') {
          className += ' ' + styles['RichEditor-hidePlaceholder'];
        }
      }
    } else {
      editorState = EditorState.createEmpty()
    }

    return (
      <div className={styles["RichEditor-root"]}>
        <h1><strong>Tools</strong><span className={styles.desc}>（打钩✅代表已完成, 打叉❌代表未完成）</span></h1>
        <button onClick={e => { this._onChange(EditorState.undo(this.state.editorState)) }}>撤销undo</button>
        <button onClick={e => { this._onChange(EditorState.redo(this.state.editorState)) }}>重做Redo</button>
        <br />
        <span style={{ color: 'green', fontSize: '32px' }}><BiCheck /></span>
        <Tag color="pink">快级样式</Tag>
        <BlockStyleControls
          editorState={editorState}
          onToggle={this._toggleBlockType.bind(this)}
        />
        <Tag color="blue">选择行内样式</Tag>
        <InlineStyleControls
          editorState={editorState}
          onToggle={this._toggleInlineStyle.bind(this)}
        />
        <span style={{ color: 'red', fontSize: '32px' }}><BiX /></span>
        <Tag color="orange">待完成TODO样式</Tag>
        <div>
          {
            TODO_STYLES.map(val => {
              return <span className={styles.todoText}>{val.label}</span>
            })
          }
        </div>
        <div className={className} onClick={() => this.refs.editor.focus()}>
          <Editor
            // 获取当前行内样式的类型, 比如block.getType() === 'blockquote' 返回样式
            blockStyleFn={this._getBlockStyle.bind(this)}
            // 自定义触发命令的样式
            customStyleMap={cmdStyleMap}
            // 编辑器实例
            editorState={editorState}
            // 热键控制
            handleKeyCommand={this._handleKeyCommand.bind(this)}
            // 当改变的时候, 参数为实例
            onChange={this._onChange.bind(this)}
            //
            onTab={this._onTab.bind(this)}
            // 默认值
            placeholder="Tell a story..."
            // 当聚焦的时候触发事件
            onFocus={() => { console.log('focus') }}
            // 引出实例
            ref='editor'
            // 开启拼写检查
            spellCheck={false}
          />
        </div>
      </div>
    );
  }
}

export default MyEditor;
