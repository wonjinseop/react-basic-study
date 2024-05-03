import { useState } from 'react';
import './App.css';
import CourseInput from './components/CourseGoals/CourseInput';
import CourseList from './components/CourseGoals/CourseList';

const DUMMY_DATA = [
  {
    id: 'g1',
    text: '리액트 컴포넌트 스타일 마스터하기',
  },
  {
    id: 'g2',
    text: 'UI 프로그래밍 삽고수 되기',
  },
];

const App = () => {
  const [goals, setGoals] = useState(DUMMY_DATA);

  // Input에게 전달할 함수
  const addGoalHandler = (text) => {
    console.log('전달받은 텍스트: ', text);
    const newGoal = {
      id: Math.random().toString(),
      text,
    };

    // 상태변수(배열) 수정
    // setGoals([...goals, newGoal]);
    setGoals((prevGoals) => [...prevGoals, newGoal]);
  };

  // CourseList 조건부 렌더링
  let listContent = (
    <p
      style={{
        color: 'red',
        fontSize: '2em',
        textAlign: 'center',
      }}
    >
      목표를 등록해 주세요!
    </p>
  );

  // 삭제 이벤트 핸들러를 CourseItem까지 내려보내야 함.
  const deleteGoalHandler = (id) => {
    // console.log('전달된 id: ', id);
    // const updateGoals = [...goals]; // 상태배열 그대로 복사해서 가져옴.
    // const index = updateGoals.findIndex((goal) => goal.id === id);
    // updateGoals.splice(index, 1);
    // setGoals(updateGoals);

    // const updateGoals = goals.filter((goal) => goal.id !== id);

    setGoals(goals.filter((goal) => goal.id !== id));
  };

  if (goals.length > 0) {
    listContent = <CourseList items={goals} onDelete={deleteGoalHandler} />;
  }

  return (
    <div>
      <section id="goal-form">
        <CourseInput onAdd={addGoalHandler} />
      </section>
      <section id="goals">{listContent}</section>
    </div>
  );
};

export default App;
