import React, { FC, memo, ReactElement } from 'react';
import { IFullBackProps } from '../typing';

import styles from './background.module.scss';

const Background: FC<IFullBackProps> = ({ 
  picUrl 
}): ReactElement => {
  return (
    <div className={styles['background']}>
      <div className={styles['layer']}></div>
      <img src={picUrl + '?param=400x400'} width="100%" height="100%" alt="歌曲图片"></img>
    </div>
  );
};

export default memo(Background);
