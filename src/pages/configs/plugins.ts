/*
 * @Description:
 * @Author: acsamson
 * @Date: 2021-06-28 02:35:19
 * @LastEditTime: 2021-07-05 03:27:35
 * @LastEditors: acsamson@foxmail.com
 * @FilePath: /samtools/client/src/pages/SamEditor/SamEditor/configs/plugins.ts
 */
import { composeDecorators } from "@draft-js-plugins/editor";
import createUndoPlugin from '@draft-js-plugins/undo';
import createInlineToolbarPlugin from '@draft-js-plugins/inline-toolbar';
import createSideToolbarPlugin from '@draft-js-plugins/side-toolbar';
import createCounterPlugin from '@draft-js-plugins/counter';
import createImagePlugin from "@draft-js-plugins/image";
import createFocusPlugin from "@draft-js-plugins/focus";
import createBlockDndPlugin from "@draft-js-plugins/drag-n-drop";

const undoPlugin = createUndoPlugin();
const inlineToolbarPlugin = createInlineToolbarPlugin();
const sideToolbarPlugin = createSideToolbarPlugin();
const counterPlugin = createCounterPlugin();
const focusPlugin = createFocusPlugin();
const blockDndPlugin = createBlockDndPlugin();
const decorator = composeDecorators(
  focusPlugin.decorator,
  blockDndPlugin.decorator
);
const imagePlugin = createImagePlugin({ decorator });
export default {
  undoPlugin,
  inlineToolbarPlugin,
  sideToolbarPlugin,
  counterPlugin,
  focusPlugin,
  blockDndPlugin,
  imagePlugin
};
