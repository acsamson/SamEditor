/*
 * @Description:
 * @Author: acsamson
 * @Date: 2021-07-05 03:20:26
 * @LastEditTime: 2021-07-05 03:20:26
 * @LastEditors: acsamson@foxmail.com
 * @FilePath: /samtools/client/src/pages/SamEditor/SamEditor/components/editor/data/initialState.ts
 */
export const initialState = {
  entityMap: {
    "0": {
      type: "IMAGE",
      mutability: "IMMUTABLE",
      data: {
        src: "https://picsum.photos/200/300/?random "
      }
    }
  },
  blocks: [{
    key: "9gm3s",
    text: "You can have images in your text field which are draggable. Hover over the image press down your mouse button and drag it to another position inside the editor.",
    type: "unstyled",
    depth: 0,
    inlineStyleRanges: [],
    entityRanges: [],
    data: {}
  },
  {
    key: "ov7r",
    text: " ",
    type: "atomic",
    depth: 0,
    inlineStyleRanges: [],
    entityRanges: [{
      offset: 0,
      length: 1,
      key: 0
    }],
    data: {}
  },
  {
    key: "e23a8",
    text: "You can checkout the alignment tool plugin documentation to see how to build a compatible block plugin …",
    type: "unstyled",
    depth: 0,
    inlineStyleRanges: [],
    entityRanges: [],
    data: {}
  }
  ]
};
