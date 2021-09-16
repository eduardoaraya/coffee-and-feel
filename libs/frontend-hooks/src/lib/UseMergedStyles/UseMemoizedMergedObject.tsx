import React from 'react';
import _ from 'lodash';
/* eslint-disable-next-line */

export function useMemoizedMergedObject<T, R>(
  defaultStyles: T,
  incomingStyles: R,
  deps?: React.DependencyList | undefined
) {
  return React.useMemo(
    () => _.merge(defaultStyles, incomingStyles ?? {}),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [defaultStyles, incomingStyles, ...(deps ?? [])]
  );
}

export default useMemoizedMergedObject;
