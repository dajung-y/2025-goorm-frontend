import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import LoginStatus from "./LoginStatus";

test('로그인상태일 때 "로그인됨" 보여야함', () => {
  render(<LoginStatus isLoginedIn={true} />);
  expect(screen.getByText('로그인됨'))
                .toBeInTheDocument();
});

test('로그인상태일 때 "로그인됨" 보여야함', () => {
  render(<LoginStatus isLoginedIn={false} />);
  expect(screen.getByText('로그아웃됨'))
                .toBeInTheDocument();
});