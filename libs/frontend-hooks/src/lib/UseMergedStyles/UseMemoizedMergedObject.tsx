import React from 'react';
import _ from 'lodash';
/* eslint-disable-next-line */

export function useMemoizedMergedObject<T, R>(
  destinationObject: T,
  sourceObject: R,
  deps?: React.DependencyList | undefined
) {
  return React.useMemo(
    () => _.merge(destinationObject, sourceObject ?? {}),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [destinationObject, sourceObject, ...(deps ?? [])]
  );
}

export default useMemoizedMergedObject;
