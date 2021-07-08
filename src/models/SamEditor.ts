/*
 * @Description:
 * @Author: acsamson
 * @Date: 2021-06-15 02:44:55
 * @LastEditTime: 2021-07-09 03:03:42
 * @LastEditors: acsamson@foxmail.com
 * @FilePath: /SamEditor/src/models/SamEditor.ts
 */
const defaultState: StateType = {
  cmd: {},
  editorState: ''
};
const SamEditor = {
  namespace: 'SamEditor',
  state: {
    cmd: {},
    editorState: ''
  },
  // 相当于reducer
  reducers: {
    setCmd(state: any, action: { cmd: any; }) {
      const cmd = action.cmd;
      return { ...state, cmd }
    },
    setEditorState(state: any, action: { editorState: any; }) {
      const editorState = action.editorState;
      return { ...state, editorState }
    },
  },
  // effects: {
  //   *effectTime(_, { call, put }) {
  //     const time = yield call(getnumber);
  //     yield put({
  //       type: 'reducerTime',
  //       payload: {
  //         time
  //       }
  //     })
  //   }
  // },
  // // 这里的方法名可以随便命名，当监听有变化的时候就会依次执行这的变化,
  // subscriptions: {
  //   changeTime({ }) {
  //     window.onclick = () => {
  //       console.log("页面被点击了");
  //     }
  //   },
  // }
}
export type SamEditorState = Readonly<typeof defaultState>;
export default SamEditor;
