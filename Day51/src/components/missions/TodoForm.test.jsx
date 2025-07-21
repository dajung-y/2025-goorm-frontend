import { fireEvent, render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import TodoForm from "./TodoForm";

test('todo 작성 확인', async () => {
  render(<TodoForm />);
  const button = screen.getByRole('button',{name: '추가'});
  const input = screen.getByPlaceholderText('할 일을 입력하세요');
  fireEvent.change(input, {target: {value:'배운내용 정리'}});
  fireEvent.click(button);
  expect(await screen.findByText('배운내용 정리')).toBeInTheDocument();
})