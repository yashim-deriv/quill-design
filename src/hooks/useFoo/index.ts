import { useState } from "react";

export const useFoo = () => {
  const [foo, setFoo] = useState<number>(0);
  return foo;
};
