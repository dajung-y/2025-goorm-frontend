import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import Hello from "./Hello";

// test(이름/설명,실제테스트하는 코드)
test('hello 컴포넌트 올바르게 렌더링 되어야함',()=>{
  render(<Hello />); // 컴포넌트가 가짜 DOM에 마운트(mount)하는 함수

  expect(screen
        .getByText('Hello. React+vitest'))  // 텍스트를 가진 요소 찾기
        .toBeInTheDocument()                // 해당 요소가 DOM에 존재하는지 확인
})