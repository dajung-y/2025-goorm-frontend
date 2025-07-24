import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import TodoApp from "../components/TodoApp";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe('TodoApp 전체 통합테스트', () => {

  // test('할일 추가 및 토글 변경', async () => {
  //   const user = userEvent.setup();
  //   render(<TodoApp />);
  //   const input = screen.getByPlaceholderText('할 일을 입력하세요');
  //   const button = screen.getByText('추가');
  //   await user.type(input, '테스트 할 일');
  //   await user.click(button);

  //   expect(screen.getByText('테스트 할 일')).toBeInTheDocument();
  //   // 상태변경(클릭 시 취소선)
  //   await user.click(screen.getByText('테스트 할 일'));
  //   expect(screen.getByText('테스트 할 일'))
  //               .toHaveStyle('text-decoration:line-through');
  // })
  it('할 일 추가 기능테스트', async() => {
    render(<App />);
  })
})
// userEvent
// - 실제 사용자의 동작과 최대한 유사하게 테스트
// - 복잡한 이벤트 체인 처리
// - 사용성 테스트에 적합