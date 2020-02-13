// Created by svgr
// Example npx @svgr/cli --icon --replace-attr-values "#063855=currentColor" check.svg

import * as React from 'react';

interface IBedProps {}

const Bed: React.FunctionComponent<IBedProps> = props => (
  <svg width="1em" height="1em" viewBox="0 0 14 12" {...props}>
    <g stroke="#262626" strokeWidth={0.6} fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11.395 5.615H3.196c-.912 0-1.734.736-1.734 1.736v2.61c0 .12.17.27.28.27h11.107c.11 0 .151-.15.151-.27V7.35c0-1-.692-1.736-1.605-1.736z" />
      <path d="M13 7.707c0-.136-.089-.245-.198-.245H1.66c-.11 0-.198.11-.198.245v2.279c0 .135.088.245.198.245h11.142c.11 0 .198-.11.198-.245v-2.28zM11.615 4.692v-3.52c0-.13-.047-.172-.153-.172H2.611c-.106 0-.226.042-.226.172v3.52M1.231 9.308v2.307M12.769 9.308v2.307" />
      <path d="M10.126 5.153c0-.767.105-1.575.105-1.575 0-.136-.07-.26-.158-.26 0 0-.49.157-.97.157s-1.022-.167-1.022-.167c-.087 0-.158.108-.158.245 0 0 .105.779.105 1.6M5.972 5.153c0-.767.105-1.575.105-1.575 0-.136-.07-.26-.157-.26 0 0-.49.157-.97.157-.482 0-1.023-.167-1.023-.167-.087 0-.158.108-.158.245 0 0 .105.779.105 1.6" />
    </g>
  </svg>
);

export default Bed;
