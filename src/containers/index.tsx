import React, { memo } from 'react';

import dashboard from './dashboard';

const listContainers = [dashboard];

export default function containers(WrappedComponent: React.FC): React.FC {
  const WithContainers = (props: any) => {
    let CompleteComponent: any = null;

    listContainers.forEach(withContainer => {
      CompleteComponent = withContainer(CompleteComponent || WrappedComponent);
    });

    return <CompleteComponent {...props} />;
  };

  return memo(WithContainers);
}
