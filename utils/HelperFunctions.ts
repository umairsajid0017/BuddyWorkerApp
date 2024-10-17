// utils/helperfunctions.ts

type DebouncedFunction<T extends (...args: any[]) => any> = (...args: Parameters<T>) => void;

export const debounce = <T extends (...args: any[]) => any>(func: T, delay: number): DebouncedFunction<T> => {
  let timeoutId: ReturnType<typeof setTimeout>;

  return (...args: Parameters<T>) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};
