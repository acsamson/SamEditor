/*
 * @Description:
 * @Author: acsamson
 * @Date: 2021-07-20 03:05:15
 * @LastEditTime: 2021-07-20 04:18:41
 * @LastEditors: acsamson@foxmail.com
 * @FilePath: /SamEditor/src/pages/components/editor/data/cmdStyleMap.tsx
 */
import React from 'react';

export const cmdStyleMap = {
  // 上标
  SUBSCRIPT: {
    fontSize: '0.6em',
    verticalAlign: 'sub'
  },
  // 下标
  'SUPERSCRIPT': {
    fontSize: '0.6em',
    verticalAlign: 'super'
  },
  // 删除线
  STRIKETHROUGH: {
    color: 'red',
    textDecoration: 'line-through',
  },
  // 等宽字体
  MONOSPACE: {
    backgroundColor: '#f1bad8',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: '4px 8px',
    margin: '0 2px',
    borderRadius: '6px'
  },
};
