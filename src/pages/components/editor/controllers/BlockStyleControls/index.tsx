/*
 * @Description:
 * @Author: acsamson
 * @Date: 2021-07-20 03:20:41
 * @LastEditTime: 2021-07-20 03:59:30
 * @LastEditors: acsamson@foxmail.com
 * @FilePath: /SamEditor/src/pages/components/editor/Controllers/BlockStyleControls/index.tsx
 */
import React from 'react';
import StyleButton from '../../components/StyleButton';
import styles from './index.less';
import { BLOCK_TYPES } from '../../configs/controllers';

const BlockStyleControls = (props) => {
  const { editorState } = props;
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();

  return (
    <div className={styles["RichEditor-controls"]}>
      {BLOCK_TYPES.map((type) =>
        <StyleButton
          key={type.label}
          active={type.style === blockType}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      )}
    </div>
  );
};

export default BlockStyleControls;
