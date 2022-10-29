import * as React from "react";

export function useSeq(start = 0) {
  const i = React.useRef(start);
  const next = React.useCallback(() => {
    i.current++;
    return i.current;
  }, []);
  const seq = React.useMemo(() => ({ next }), [next]);
  return seq;
}
