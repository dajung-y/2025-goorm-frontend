import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import UserForm from "./UserForm";
import { uesUserStore } from "../../stores/userStore";
import UserDisplay from "./UserDisplay";

/**
 describe()
 - 관련된 테스트를 그룹으로 묶어서 테스트하는 함수
 - 테스트 설명 단위, 가독성을 높임
 - 내부 test() 또는 it()들을 포함
 */
describe('사용자 등록 흐름 테스트', () => {
  test('이름 입력 후 저장되면 상태에 반영되어야함', async() => {
    render(<>
            <UserForm />
            <UserDisplay />
          </>);
    const input = screen.getByPlaceholderText('이름을 입력하세요');
    fireEvent.change(input,{target: {value: 'dajung'}});
    fireEvent.click(screen.getByText('확인'));
    await waitFor(() => {
      expect(screen.getByText('입력된 이름: dajung'))
      .toBeInTheDocument();
    });
  });
});

// expect(값).toBe(기대값)
// 두 값이 정확히 같은지 비교