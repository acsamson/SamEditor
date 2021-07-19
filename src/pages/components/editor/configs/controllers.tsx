/*
 * @Description:
 * @Author: acsamson
 * @Date: 2021-07-20 03:30:13
 * @LastEditTime: 2021-07-20 04:46:32
 * @LastEditors: acsamson@foxmail.com
 * @FilePath: /SamEditor/src/pages/components/editor/configs/controllers.tsx
 */
import React from 'react';

export const BLOCK_TYPES = [
  { label: '清除块级样式', key: 'RemoveBlockStyle', style: 'remove-block-style' },
  { label: 'H1', key: 'H1', style: 'header-one' },
  { label: 'H2', key: 'H2', style: 'header-two' },
  { label: 'H3', key: 'H3', style: 'header-three' },
  { label: 'H4', key: 'H4', style: 'header-four' },
  { label: 'H5', key: 'H5', style: 'header-five' },
  { label: 'H6', key: 'H6', style: 'header-six' },
  { label: '引用', key: 'Blockquote', style: 'blockquote' },
  { label: '无序列表', key: 'UL', style: 'unordered-list-item' },
  { label: '有序列表', key: 'OL', style: 'ordered-list-item' },
  { label: '代码', key: 'CodeBlock', style: 'code-block' },
];

export const INLINE_STYLES = [
  { label: '粗体', key: 'Bold', style: 'BOLD' },
  { label: '斜体', key: 'Italic', style: 'ITALIC' },
  { label: '删除线', key: 'StrikeThrough', style: 'STRIKETHROUGH' },
  { label: '下划线', key: 'Underline', style: 'UNDERLINE' },
  { label: '等宽字体', key: 'Monospace', style: 'MONOSPACE' },
  { label: '上标', key: 'superscript', style: 'SUPERSCRIPT' },
  { label: '下标', key: 'subscript', style: 'SUBSCRIPT' },
  // { label: '清除样式', key: 'unstyled', style: 'UNSTYLED' },
];
