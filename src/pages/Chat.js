import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../dist/Chat.min.css';

export default function Chat() {
  const [users, setUsers] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [test, setTest] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 users 를 초기화하고
        setError(null);
        setUsers(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);
        const response = await axios.get(
          // 'https://jsonplaceholder.typicode.com/users'
          '/api/chat'
        );
        setUsers(response.data); // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchUsers();
  }, [test]);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!users) return null;

  const createChat = () => {
    const data = inputValue;
    axios.post('/api/chat', { title: data }).then((req) => {
      console.log('created');
    });
    setInputValue('');
    setTest(!test);
  };

  const deleteChat = (id) => {
    const data = users.filter((user) => id !== user.id);
    setUsers(data);
    axios.delete(`/api/chat/${id}`).then((req) => {
      console.log('deleted');
    });
  };

  return (
    <>
      <div className="container">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        ></input>
        <button onClick={createChat}>만들기</button>
      </div>
      <div className="container mt-4">
        <div className="row">
          {users.map((user) => {
            return (
              <div className="col-6">
                <div className="moyaCard-bottom mt-4" key={user.id}>
                  <p>{user.title} </p>
                  <p>{user.workdate.slice(0, 10)}</p>
                  <p>{user.workdate.slice(11, 16)}</p>
                  <button
                    onClick={function () {
                      deleteChat(user.id);
                    }}
                  >
                    삭제
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
