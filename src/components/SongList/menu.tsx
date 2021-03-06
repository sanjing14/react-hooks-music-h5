import React, { FC, memo, ReactElement } from 'react';

import { formatCount } from '@/utils/filters';

import styles from './menu.module.scss';
import { IMenuProps } from './typing';

const ListMenu: FC<IMenuProps> = ({
  songCount = 0, 
  subscribedCount, 
  showCollect,
  onClickPlayAll
}): ReactElement => {
  return (
    <div className={styles['list-menu']}>
      <div className={styles['play-btn']} onClick={onClickPlayAll}>
        <i className="iconfont icon-play-circle"></i>
        <span className={styles['play-text']}>播放全部</span>
        <span className={styles['song-count']}>(共{ songCount }首)</span>
      </div>
      {showCollect && (
        <button className={styles['collect']}>
          <i className="iconfont icon-plus"></i>
          <span className={styles['collect-count']}>收藏({ formatCount(subscribedCount) })</span>
        </button>
      )}
    </div>
  );
};

export default memo(ListMenu);
