export const useDebounce = (fnc: CallableFunction, timeout: number) => {
  let timer: NodeJS.Timeout;

  return (...args: unknown[]): void => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fnc(args);
    }, timeout);
  };
};

export default useDebounce;
