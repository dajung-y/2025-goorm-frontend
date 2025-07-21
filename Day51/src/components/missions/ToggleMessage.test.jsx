import { fireEvent, render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import ToggleMessage from "./ToggleMessage";

test('메시지 토글', () => {
  // 렌더링 할 컴포넌트
  render(<ToggleMessage />);
  const button = screen.getByRole('button',{ name: '클릭'});
  // 처음에 없음
  expect(screen.queryByText('안녕하세요')).not.toBeInTheDocument();
  // 이벤트 발생 후 텍스트 보임
  fireEvent.click(button);
  expect(screen.getByText('안녕하세요')).toBeInTheDocument();
  // 한번 더 클릭하면 사라짐
  fireEvent.click(button);
  expect(screen.queryByText('안녕하세요')).not.toBeInTheDocument();
})

// getByText는 찾지 못하면 바로 error를 던지기 때문에
// 없는 요소는 queryByText로 검증해야함