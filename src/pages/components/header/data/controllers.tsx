/*
 * @Description:
 * @Author: acsamson
 * @Date: 2021-06-24 03:52:23
 * @LastEditTime: 2021-07-09 01:55:17
 * @LastEditors: acsamson@foxmail.com
 * @FilePath: /SamEditor/src/pages/components/header/data/controllers.tsx
 */
import React from 'react';
import styles from './controllers.less';
import plugins from '../../../configs/plugins';
import {
  BiAddToQueue,
  BiSave,
  BiUndo,
  BiHeading,
  BiRedo,
  BiPaintRoll,
  BiEraser,
  BiBold,
  BiItalic,
  BiStrikethrough,
  BiUnderline,
  BiLeftIndent,
  BiRightIndent,
  BiListUl,
  BiListOl,
  BiCodeCurly,
  BiLink,
  BiUnlink,
  BiLaugh,
  BiMobileLandscape,
  BiMinus,
  BiFileFind,
  BiGlobe,
  BiDockRight,
  BiExitFullscreen,
  BiFullscreen,
  BiBorderOuter,
  BiMovie,
  BiPackage,
  BiFontFamily,
  BiFontColor,
  BiFontSize
} from 'react-icons/bi';
const { UndoButton, RedoButton } = plugins.undoPlugin;

export default (lang: any, editor: any): Array<any> => [
  [
    // {
    //   // 插入
    //   key: 'insert',
    //   title: lang.controls.insert,
    //   text: <BiAddToQueue className={styles.BtnFont} />,
    //   type: 'editor-method',
    //   command: 'insert',
    // }
  ],
  [
    // {
    //   // 保存
    //   key: 'save',
    //   title: lang.controls.save,
    //   text: <BiSave className={styles.BtnFont} />,
    //   type: 'editor-method',
    //   command: 'save',
    // },
    {
      // 撤销
      key: 'undo',
      title: lang.controls.undo,
      text: <UndoButton className={styles.BtnFont} />,
      type: 'editor-method',
      command: 'undo',
    },
    {
      // 重做
      key: 'redo',
      title: lang.controls.redo,
      text: <RedoButton className={styles.BtnFont} />,
      type: 'editor-method',
      command: 'redo',
    },
    {
      // 格式刷
      key: 'styleCopy',
      title: lang.controls.styleCopy,
      text: <BiPaintRoll className={styles.BtnFont} />,
      type: 'editor-method',
      command: 'styleCopy',
    },
    {
      // 清除样式
      key: 'removeStyles',
      title: lang.controls.removeStyles,
      text: <BiEraser className={styles.BtnFont} />,
      type: 'editor-method',
      command: 'removeStyles',
    }
  ],
  [
    {
      // 标题
      key: 'headings',
      title: lang.controls.headings.content,
      text: '正文',
      type: 'select',
      command: 'headings',
      children: [
        {
          key: 'headings',
          title: lang.controls.headings.content,
          text: '正文',
          type: 'editor-method',
          command: 'content',
        },
        {
          key: 'headings',
          title: lang.controls.headings.h1,
          text: 'h1',
          type: 'editor-method',
          command: 'h1',
        },
        {
          key: 'headings',
          title: lang.controls.headings.h2,
          text: 'h2',
          type: 'editor-method',
          command: 'h2',
        },
        {
          key: 'headings',
          title: lang.controls.headings.h3,
          text: 'h3',
          type: 'editor-method',
          command: 'h3',
        },
        {
          key: 'headings',
          title: lang.controls.headings.h4,
          text: 'h4',
          type: 'editor-method',
          command: 'h4',
        }
      ],
    },
    {
      // 字号
      key: 'fontSize',
      title: lang.controls.fontSize,
      text: lang.controls.fontSize,
      type: 'select',
      command: 'fontSize',
      children: ['12px', '13px', '14px', '15px', '16px', '19px', '22px', '24px', '29px', '32px', '40px', '48px'].map(val => {
        return {
          key: 'headings',
          title: val,
          text: val,
          type: 'editor-method',
          command: `fontSize-(${val})`,
        };
      })
    },
    {
      // 字体
      key: 'fontFamily',
      title: lang.controls.fontFamily,
      text: lang.controls.fontFamily,
      type: 'select',
      command: 'fontFamily',
      children: ['Arial', 'Georgia', 'Impact', 'Tahoma', 'Times', 'Roman', 'Verdana'].map(val => {
        return {
          key: 'fontFamily',
          title: val,
          text: val,
          type: 'editor-method',
          command: `fontFamily-(${val})`,
        };
      })
    },
    {
      // 行高
      key: 'lineHeight',
      title: lang.controls.lineHeight,
      text: lang.controls.lineHeight,
      type: 'select',
      command: 'lineHeight',
      children: ['1.2', '1.5 ', '1.75', '2', '2.5', '4'].map(val => {
        return {
          key: 'lineHeight',
          title: val,
          text: val,
          type: 'editor-method',
          command: `lineHeight-(${val})`,
        };
      })
    },
    {
      // 字间距
      key: 'letterSpacing',
      title: lang.controls.letterSpacing,
      text: lang.controls.letterSpacing,
      type: 'select',
      command: 'letterSpacing',
      children: ['0', '1', '2', '3', '4', '5', '6'].map(val => {
        return {
          key: 'letterSpacing',
          title: val,
          text: val,
          type: 'editor-method',
          command: `letterSpacing-(${val})`,
        };
      })
    }
  ],
  [
    {
      // 粗体
      key: 'bold',
      title: lang.controls.bold,
      text: <BiBold className={styles.BtnFont} />,
      type: 'editor-method',
      command: 'bold',
      isDown: true
    },
    {
      // 斜体
      key: 'italic',
      title: lang.controls.italic,
      text: <BiItalic className={styles.BtnFont} />,
      type: 'editor-method',
      command: 'italic',
      isDown: true
    },
    {
      // 删除线
      key: 'strikeThrough',
      title: lang.controls.strikeThrough,
      text: <BiStrikethrough className={styles.BtnFont} />,
      type: 'editor-method',
      command: 'strikeThrough',
      isDown: true
    },
    {
      // 下划线
      key: 'underline',
      title: lang.controls.underline,
      text: <BiUnderline className={styles.BtnFont} />,
      type: 'editor-method',
      command: 'underline',
      isDown: true
    },
    {
      // 上标
      key: 'superScript',
      title: lang.controls.superScript,
      text: <div className={styles.BtnFont}>{lang.controls.superScript}</div>,
      type: 'editor-method',
      command: 'superscript',
      isDown: true
    },
    {
      // 下标
      key: 'subScript',
      title: lang.controls.subScript,
      text: <div className={styles.BtnFont}>{lang.controls.subScript}</div>,
      type: 'editor-method',
      command: 'subscript',
      isDown: true
    },
    {
      // 表情
      key: 'emoji',
      title: lang.controls.emoji,
      text: <BiLaugh className={styles.BtnFont} />,
      type: 'editor-method',
      command: 'emoji',
    },
  ],
  [
    // ======================
    {
      // 文字颜色
      key: 'textColor',
      title: lang.controls.textColor,
      text: <BiFontColor className={styles.BtnFont} />,
      type: 'editor-method',
      command: 'textColor',
    },
    {
      // 字体背景
      key: 'fontBackground',
      title: lang.controls.fontBackground,
      text: <span className={styles.BtnFont}>{lang.controls.fontBackground}</span>,
      type: 'editor-method',
      command: 'fontBackground',
    }
  ],
  [
    // ====================== 对其方式
    {
      // 增加缩进
      key: 'increaseIndent',
      title: lang.controls.increaseIndent,
      text: <BiRightIndent className={styles.BtnFont} />,
      type: 'editor-method',
      command: 'increaseIndent',
    },
    {
      // 减少缩进
      key: 'decreaseIndent',
      title: lang.controls.decreaseIndent,
      text: <BiLeftIndent className={styles.BtnFont} />,
      type: 'editor-method',
      command: 'decreaseIndent',
    },
    {
      // 文本对齐
      key: 'textAlign',
      title: lang.controls.textAlign,
      text: <span className={styles.BtnFont}>{lang.controls.textAlign}</span>,
      type: 'editor-method',
      command: 'textAlign',
    },
  ],
  [
    // ====================== 增强样式
    {
      // 有序列表
      key: 'orderedList',
      title: lang.controls.orderedList,
      text: <BiListOl className={styles.BtnFont} />,
      type: 'editor-method',
      command: 'orderedList',
    },
    {
      // 无序列表
      key: 'unorderedList',
      title: lang.controls.unorderedList,
      text: <BiListUl className={styles.BtnFont} />,
      type: 'editor-method',
      command: 'unorderedList',
    },
    {
      // 引用
      key: 'blockQuote',
      title: lang.controls.blockQuote,
      text: <BiMobileLandscape className={styles.BtnFont} />,
      type: 'editor-method',
      command: 'blockQuote',
    },
    {
      // 代码
      key: 'code',
      title: lang.controls.code,
      text: <BiCodeCurly className={styles.BtnFont} />,
      type: 'editor-method',
      command: 'code',
    },
    {
      // 链接
      key: 'link',
      title: lang.controls.link,
      text: <BiLink className={styles.BtnFont} />,
      type: 'editor-method',
      command: 'link',
    },
    {
      // 清除链接
      key: 'unlink',
      title: lang.controls.unlink,
      text: <BiUnlink className={styles.BtnFont} />,
      type: 'editor-method',
      command: 'unlink',
    },
    {
      // 水平线
      key: 'hr',
      title: lang.controls.hr,
      text: <BiMinus className={styles.BtnFont} />,
      type: 'editor-method',
      command: 'hr',
    },
  ],
  [
    // ======================  全局控制
    {
      // 查找替换
      key: 'find',
      title: lang.controls.find,
      text: <BiFileFind className={styles.BtnFont} />,
      type: 'editor-method',
      command: 'find',
    },
    {
      // 翻译
      key: 'translate',
      title: lang.controls.translate,
      text: <BiGlobe className={styles.BtnFont} />,
      type: 'editor-method',
      command: 'translate',
    },
    {
      // 大纲
      key: 'outline',
      title: lang.controls.outline,
      text: <BiDockRight className={styles.BtnFont} />,
      type: 'editor-method',
      command: 'outline',
    },
    {
      // 全屏
      key: 'fullscreen',
      title: lang.controls.fullscreen,
      text: <BiFullscreen className={styles.BtnFont} />,
      type: 'editor-method',
      command: 'fullscreen',
    },
    {
      // 退出全屏
      key: 'exitFullscreen',
      title: lang.controls.exitFullscreen,
      text: <BiExitFullscreen className={styles.BtnFont} />,
      type: 'editor-method',
      command: 'exitFullscreen',
    }
  ],
  [
    // ====================== 布局相关
    {
      // 背景颜色
      key: 'backgroundColor',
      title: lang.controls.backgroundColor,
      text: <span className={styles.BtnFont}>{lang.controls.backgroundColor}</span>,
      type: 'editor-method',
      command: 'backgroundColor',
    },
    {
      // 边框
      key: 'border',
      title: lang.controls.border,
      text: <BiBorderOuter className={styles.BtnFont} />,
      type: 'editor-method',
      command: 'border',
    }
  ],
  [
    // ====================== 三方增强
    {
      // 媒体
      key: 'media',
      title: lang.controls.media,
      text: <BiMovie className={styles.BtnFont} />,
      type: 'editor-method',
      command: 'media',
    },
    {
      // 媒体库
      key: 'mediaLibirary',
      title: lang.controls.mediaLibirary,
      text: <BiPackage className={styles.BtnFont} />,
      type: 'editor-method',
      command: 'mediaLibirary',
    }
  ]
];
