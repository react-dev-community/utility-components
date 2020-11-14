import React from 'react';

const useDidMount = (
  func: React.EffectCallback,
  deps?: React.DependencyList | undefined
) => {
  const mountRef = React.useRef<boolean>(false);

  React.useEffect(() => {
    if (mountRef.current) {
      func();
    }
    mountRef.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};

export default useDidMount;
