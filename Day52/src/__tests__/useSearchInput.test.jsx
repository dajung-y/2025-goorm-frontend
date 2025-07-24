import { act, renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, it, test } from "vitest";
import { useInputWithSearch } from "../hooks/useInputwithSearch";

describe('useInputWithSearch커스텀훅', () =>{

  let result;
  // 각 테스트 실행전 먼저 실행
  beforeEach(() => {
    ({result} = renderHook(() =>{useInputWithSearch()}))
  })
  test('초기값이 빈 문자열', () => {
    expect(result.current.inputValue).toBe('');
    expect(result.current.searchValue).toBe('');
  })
  test('입력값을 변경하면 inputValue, searchValue 값변경', () => {
    // 훅 안에서 상태를 바꾸는 함수
    act(() => {
      result.current.handleInputChange({target: {value: 'react'}});
    })
    expect(result.current.inputValue).toBe('react');
    expect(result.current.searchValue).toBe('react');
  })
  test('resetInput호출시 inputValue,searchValue 초기화', () => {
    act(() => {
      result.current.handleInputChange({target: {value: 'test'}});
    })
    act(() => {
      result.current.resetInput();
    })
    expect(result.current.inputValue).toBe('');
    expect(result.current.searchValue).toBe('');
  })
})

/**
 renderHook() 
 리액트의 훅을 테스트할 수 있는 함수
 컴포넌트 안에서 훅 실행하는 것 처럼 테스트
 */