/*
 * @Description:
 * @Author: acsamson
 * @Date: 2021-06-24 02:21:37
 * @LastEditTime: 2021-07-09 02:25:12
 * @LastEditors: acsamson@foxmail.com
 * @FilePath: /SamEditor/src/pages/components/header/index.tsx
 */
import React, { useMemo, useState, useEffect } from 'react';
import switchProps from '../../configs/props';
import { v4 as uuidv4 } from 'uuid';
import { Button, Tooltip, Tag, Divider, Tabs, Select } from 'antd';
import language from '../language';
import _controllers from './data/controllers';
import styles from './index.less';
import { CharacterMetadata } from 'draft-js';
import { Key } from 'rc-select/lib/interface/generator';
import { connect } from 'dva';
import { BiCheck, BiX } from 'react-icons/bi';


const { TabPane } = Tabs;

interface HeaderProps {
  setEditorState: Function;
}


function Header(props: any,) {
  const { dispatch } = props;
  const { controls } = switchProps; // 载入默认配置开关
  const controllers = useMemo(() => {
    return _controllers(language['zh'], {}).map(item => item.filter((item2: { key: string; }) => controls.includes(item2.key)));
  }, [controls])
  const [cmd, setcmd] = useState({});
  const _onChange = (val: any) => {
    setcmd({ toggleInlineStyle: val.command.toString().toUpperCase() });
  };
  useEffect(() => {
    dispatch({
      type: 'SamEditor/setCmd',
      cmd
    });
  }, [cmd, dispatch]);
  const getContorllerContent = (item: any) => {
    if (item.type === 'select') {
      console.log(222);
      return <Select style={{ width: '100px' }}
        defaultValue={item.text}
        onChange={e => {
          const _current = item.children.find(val0 => val0.title === e);
          _onChange(_current);
        }}
      >
        {
          item.children.map((val0: { title: Key; }) => {
            return <Select.Option value={val0.title} key={uuidv4()}>{val0.title}</Select.Option>
          })
        }
      </Select>
    } else {
      return <div
        className={styles.text}
        onClick={e => {
          _onChange(item);
        }}>{item.text}</div>;
    }
  };
  const controllersView = useMemo(() => {
    const hasDown = [];
    const hasNotDown = [];
    controllers.forEach(val0 => {
      (val0 || []).forEach(val1 => {
        if (val1.isDown === true) {
          hasDown.push(val1);
        } else {
          hasNotDown.push(val1);
        }
      });
    });
    const _template = (data) => {
      return <div className={styles.toolsPart}>
        {data.map(val0 => {
          return <Tooltip placement="top" title={val0.title} key={uuidv4()}>
            {getContorllerContent(val0)}
          </Tooltip>
        })}
      </div>;
    }
    return <div className={styles.tools}>
      <div className={styles.hasDown}>
        <span style={{ color: 'green', fontSize: '32px' }}><BiCheck /></span>
        {_template(hasDown)}
      </div>
      <div className={styles.hasNotDown}>
        <span style={{ color: 'red', fontSize: '32px' }}><BiX /></span>
        {_template(hasNotDown)}
      </div>
    </div>
  }, [controllers, getContorllerContent]);
  return (
    <div className={styles.header}>
      <h1><strong>Tools</strong><span className={styles.desc}>（当前进度2%, 打钩✅代表已完成, 打叉❌代表未完成）</span></h1>
      {controllersView}
    </div>
  )
}
export default connect(({ SamEditor }) => ({}))(Header);
