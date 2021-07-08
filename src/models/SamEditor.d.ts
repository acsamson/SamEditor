/*
 * @Description:
 * @Author: acsamson
 * @Date: 2021-07-09 02:58:33
 * @LastEditTime: 2021-07-09 03:05:40
 * @LastEditors: acsamson@foxmail.com
 * @FilePath: /SamEditor/src/models/SamEditor.d.ts
 */
import { EffectsCommandMap } from 'dva';
import { AnyAction, Reducer } from 'redux';
export type Effect = (
  action: AnyAction,
  effects: EffectsCommandMap & { select: <T>(func: (state: StateType) => T) => T },
) => void;
interface StateType {
  cmd: {};
  editorState: any;
}
interface ModelType {
  namespace: string;
  state: StateType;
  reducers: {
    setCmd: Reducer<StateType>;
    setEditorState: Reducer<StateType>;
  };
  effects: {
    cmds: Effect;
  };
}
