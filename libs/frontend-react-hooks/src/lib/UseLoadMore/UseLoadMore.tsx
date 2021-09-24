import _ from 'lodash';
import React from 'react';

export function useLoadMore<T>(
  data: Array<T>,
  loadLimit: number,
  deps?: unknown[]
) {
  const [visibleData, setVisibleData] = React.useState<T[]>([]);
  const [fullData, setFullData] = React.useState<T[][]>([]);
  const [activeIndex, setActiveIndex] = React.useState<number>(0);
  const [fullyLoaded, setFullyLoaded] = React.useState<boolean>(false);
  const [fullDataFlatLength, setFullDataFlatLength] = React.useState<number>(0);

  const dataCopy = React.useMemo(() => [...data], [data]);

  React.useEffect(() => {
    const dataChunks = _.chunk(dataCopy, loadLimit);
    const dataFlatLength = _.flatten(dataChunks).length;

    setFullData(dataChunks);
    setFullDataFlatLength(dataFlatLength);
  }, [loadLimit, dataCopy]);

  React.useEffect(() => {
    if (fullData.length > 0) {
      setVisibleData(fullData[0]);
    }
  }, [fullData]);

  const loadMoreData = React.useCallback(() => {
    if (visibleData && fullDataFlatLength !== visibleData.length) {
      setVisibleData((prevState) =>
        _.concat(prevState, ...fullData[activeIndex + 1])
      );
      setActiveIndex((prevIndex) => prevIndex + 1);
    } else {
      setFullyLoaded(true);
      _.noop();
    }
  }, [activeIndex, fullData, fullDataFlatLength, visibleData]);

  return {
    visible: visibleData,
    fullData: fullData,
    loadMore: loadMoreData,
    fullyLoaded: fullyLoaded,
  };
}

export default useLoadMore;
