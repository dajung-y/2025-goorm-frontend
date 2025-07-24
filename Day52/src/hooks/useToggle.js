import { useState } from "react";

export function useToggle(initial=false){
  const [flag, setFlag] = useState(initial);
  const toggle = () => {
    setFlag(prev => !prev);
  }
  return [flag, toggle];
}