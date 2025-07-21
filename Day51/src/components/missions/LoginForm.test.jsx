import { fireEvent, render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import LoginForm from "./LoginForm";

test('로그인성공 확인', async () => {
  render(<LoginForm />);
  const button = screen.getByRole('button',{name: '로그인'});
  const id = screen.getByPlaceholderText('아이디를 입력하세요');
  const pw = screen.getByPlaceholderText('비밀번호를 입력하세요');
  // 존재 아이디
  fireEvent.change(id,{target: {value: 'hello'}});
  fireEvent.change(pw, {target: {value: '1234'}});
  fireEvent.click(button);
  expect(await screen.findByText('로그인 성공')).toBeInTheDocument();
})

test('로그인실패 확인', async () => {
  render(<LoginForm />);
  const button = screen.getByRole('button',{name: '로그인'});
  const id = screen.getByPlaceholderText('아이디를 입력하세요');
  const pw = screen.getByPlaceholderText('비밀번호를 입력하세요');
  // 존재 아이디
  fireEvent.change(id,{target: {value: 'hello'}});
  fireEvent.change(pw, {target: {value: '1111'}});
  fireEvent.click(button);
  expect(await screen.findByText('아이디 또는 비밀번호가 다릅니다')).toBeInTheDocument();
})