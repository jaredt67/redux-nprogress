import React, { PropTypes } from 'react';
import classNames from 'classnames/bind';

import styles from './Github.scss';

const cn = classNames.bind(styles);

export default function Github({ className }) {
  return (
    <a href="https://github.com/jaredt67/redux-nprogress"
       className={ cn('body', className) }>
      <svg className={ styles.svg } width="32" height="32" viewBox="0 0 32 32">
        <path fill="#000" d="M16.105 0.441c-8.721 0-15.794 7.072-15.794 15.796 0 6.979 4.526 12.899 10.802 14.988 0.79 0.145 1.078-0.342 1.078-0.761 0-0.374-0.014-1.368-0.021-2.686-4.394 0.954-5.321-2.118-5.321-2.118-0.719-1.825-1.754-2.311-1.754-2.311-1.434-0.979 0.109-0.96 0.109-0.96 1.585 0.111 2.419 1.628 2.419 1.628 1.409 2.414 3.697 1.716 4.597 1.312 0.143-1.020 0.552-1.716 1.003-2.111-3.507-0.399-7.195-1.754-7.195-7.807 0-1.724 0.616-3.135 1.626-4.239-0.163-0.399-0.705-2.006 0.155-4.18 0 0 1.326-0.425 4.343 1.619 1.26-0.351 2.611-0.526 3.954-0.532 1.342 0.007 2.693 0.181 3.954 0.532 3.016-2.044 4.339-1.619 4.339-1.619 0.862 2.174 0.32 3.781 0.158 4.18 1.012 1.104 1.623 2.514 1.623 4.239 0 6.068-3.694 7.404-7.212 7.794 0.566 0.488 1.072 1.452 1.072 2.926 0 2.111-0.019 3.815-0.019 4.333 0 0.423 0.285 0.914 1.086 0.76 6.272-2.094 10.794-8.010 10.794-14.987 0-8.724-7.073-15.796-15.797-15.796z"></path>
      </svg>
    </a>
  );
};

Github.propTypes = {
  className: PropTypes.string
};
