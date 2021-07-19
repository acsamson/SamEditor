/*
 * @Description:
 * @Author: acsamson
 * @Date: 2021-07-20 03:30:13
 * @LastEditTime: 2021-07-20 04:56:39
 * @LastEditors: acsamson@foxmail.com
 * @FilePath: /SamEditor/src/pages/components/editor/configs/controllers.tsx
 */
import React from 'react';

export const BLOCK_TYPES = [
  { label: '清除块级样式', key: 'RemoveBlockStyle', style: 'remove-block-style' },
  { label: '正文', key: 'unstyled', style: 'unstyled' },
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

export const TODO_STYLES = [
  { label: '布局', key: 'unstyled', style: 'UNSTYLED' },
  { label: '清除选择样式', key: 'unstyled', style: 'UNSTYLED' },
  { label: '格式刷', key: 'unstyled', style: 'UNSTYLED' },
  { label: '字号', key: 'unstyled', style: 'UNSTYLED' },
  { label: '字体', key: 'unstyled', style: 'UNSTYLED' },
  { label: '行高', key: 'unstyled', style: 'UNSTYLED' },
  { label: '字间距', key: 'unstyled', style: 'UNSTYLED' },
  { label: '表情', key: 'unstyled', style: 'UNSTYLED' },
  { label: '文字颜色', key: 'unstyled', style: 'UNSTYLED' },
  { label: '文字背景', key: 'unstyled', style: 'UNSTYLED' },
  { label: '增加缩进', key: 'unstyled', style: 'UNSTYLED' },
  { label: '减少缩进', key: 'unstyled', style: 'UNSTYLED' },
  { label: '文本对其方式', key: 'unstyled', style: 'UNSTYLED' },
  { label: '链接', key: 'unstyled', style: 'UNSTYLED' },
  { label: '水平线', key: 'unstyled', style: 'UNSTYLED' },
  { label: '查找替换', key: 'unstyled', style: 'UNSTYLED' },
  { label: '大纲', key: 'unstyled', style: 'UNSTYLED' },
  { label: '全屏', key: 'unstyled', style: 'UNSTYLED' },
  { label: '文稿样式', key: 'unstyled', style: 'UNSTYLED' },
  { label: '边框', key: 'unstyled', style: 'UNSTYLED' },
  { label: '媒体', key: 'unstyled', style: 'UNSTYLED' },
];
