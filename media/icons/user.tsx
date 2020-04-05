// Created by svgr
// Example npx @svgr/cli --icon --replace-attr-values "#063855=currentColor" check.svg

import * as React from 'react';

interface IUserProps {}

const User: React.FunctionComponent<IUserProps> = props => (
  <svg viewBox="0 0 14 14" width="1.6rem" height="1.6rem" {...props}>
    <g fill="#000" fillRule="nonzero">
      <path d="M7 3a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm0 4a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
      <path d="M7 0a7 7 0 100 14A7 7 0 007 0zM3.6 11.94a5.09 5.09 0 01.22-.54 3.58 3.58 0 016.37.09c.07.15.13.31.19.47A6.06 6.06 0 017 13a6 6 0 01-3.4-1.06zm7.58-.65c0-.08-.06-.18-.11-.27a4.57 4.57 0 00-8.07-.1 2.28 2.28 0 00-.15.36 6 6 0 118.38 0l-.05.01z" />
    </g>
  </svg>
);

export default User;
