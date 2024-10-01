import React from 'react';
import ContentLoader from 'react-content-loader';

const Sceleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={499}
    viewBox="0 0 280 499"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <rect x="33" y="12" rx="54" ry="54" width="238" height="478" />
  </ContentLoader>
);

export default Sceleton;
