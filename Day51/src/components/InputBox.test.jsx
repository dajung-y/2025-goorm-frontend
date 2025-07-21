import { fireEvent, render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import InputBox from "./InputBox";

test('입려한 텍스트 반영돼야함',() => {
  render(<InputBox />);

  // 텍스트로 요소 찾기
  const input = screen.getByPlaceholderText('텍스트 입력');

  // input요소에 'hello' 값 입력하면 시뮬레이션 돌려서 확인
  fireEvent.change(input,{target: {value: 'hello'}});

  expect(screen.getByText('입력된 값: hello'))
               .toBeInTheDocument();

})