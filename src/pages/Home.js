import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <h1>[Home - Login]</h1>
      <nav>
        <Link to="user">
          [회원 관리]
          <br />
          <br />
        </Link>
        <Link to="board">
          [게시판 관리]
          <br />
          <br />
        </Link>
        <Link to="chat">
          [채팅방 관리]
          <br />
        </Link>
      </nav>
    </>
  );
}
