import React from 'react'
import BoardItem from './BoardItem';

export type Board = {
  id: number;
  title: string;
  content: string;
  readConunt: number;
}

export default function TotalExample() {

  const board1: Board = {
    id: 1,
    title: "제목",
    content: "내용",
    readConunt: 0
  }

  const board2: Board = {
    id: 2,
    title: "제목22",
    content: "내용22",
    readConunt: 0
  }

  const board3: Board = {
    id: 3,
    title: "제목333",
    content: "내용333",
    readConunt: 0
  }

  const boardList = [board1, board2, board3];

  return (
    <div>
      {
        boardList.map((board) => (
          <BoardItem key={board.id}
                     board={board} />
        ))
      }
    </div>
  )
}
