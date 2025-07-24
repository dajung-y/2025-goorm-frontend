// 입력필드 값 관리
// 검색필드 값 관리
// 입력필드 onChange

import { useState } from "react";

export function useInputWithSearch(initialValue=''){
  const [inputValue, setInputValue] = useState(initialValue);
  const [searchValue, setSearchValue] = useState(initialValue);

  // 입력시 값 변경
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setSearchValue(value);
  }

  // 값 초기화
  const resetInput = () => {
    setInputValue(initialValue);
    setSearchValue(initialValue);
  }
  
  return{
    inputValue,
    searchValue,
    handleInputChange,
    resetInput
  }
}
