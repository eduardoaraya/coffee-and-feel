import React from 'react';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { getReadingTime } from '@atlascode/coffee-shared-helpers';

export function useReadingTime(
  readingTime: boolean | number,
  content?: string
) {
  const [readingTimeState, setReadingTimeState] = React.useState<
    ReturnType<typeof getReadingTime> | number
  >(0);

  React.useEffect(() => {
    if (typeof readingTime === 'number') {
      setReadingTimeState(readingTime);
    } else {
      if (content) {
        let readingTimeLocal = getReadingTime(content).readTime;

        readingTimeLocal < 1
          ? (readingTimeLocal = Math.ceil(readingTimeLocal))
          : (readingTimeLocal = Math.floor(readingTimeLocal));

        setReadingTimeState(readingTimeLocal);
      }
    }
  }, [content, readingTime]);

  return readingTimeState;
}

export default useReadingTime;
