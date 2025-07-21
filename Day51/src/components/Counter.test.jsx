import { fireEvent, render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import Counter from "./Counter";

test('버튼 클릭시 카운트 증가', () => {
  render(<Counter />);

  const button = screen.getByText('+1');
  fireEvent.click(button);

  expect(screen.getByText('Count: 1'))
               .toBeInTheDocument()
})