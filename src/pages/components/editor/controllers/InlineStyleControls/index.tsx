/*
 * @Description:
 * @Author: acsamson
 * @Date: 2021-07-20 03:30:23
 * @LastEditTime: 2021-07-20 03:31:11
 * @LastEditors: acsamson@foxmail.com
 * @FilePath: /SamEditor/src/pages/components/editor/Controllers/InlineStyleControls/index.tsx
 */
import React from 'react';
import StyleButton from '../../components/StyleButton';
import styles from './index.less';
import { INLINE_STYLES } from '../../configs/controllers';


const InlineStyleControls = (props) => {
  var currentStyle = props.editorState.getCurrentInlineStyle();
  return (
    <div className={styles["RichEditor-controls"]}>
      {INLINE_STYLES.map(type =>
        <StyleButton
          key={type.label}
          active={currentStyle.has(type.style)}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      )}
    </div>
  );
};

export default InlineStyleControls;
