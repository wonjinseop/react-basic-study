import React, { useState } from 'react';
import Input from '../../../UI/Input/Input';
import styles from './MealItemForm.module.scss';

const MealItemForm = ({ id, onAddToCart }) => {
  // 수량의 상태를 관리하는 변수
  const [amount, setAmount] = useState(1);

  // 수량이 변경될 때마다 발동하는 함수
  const amountHandler = (amt) => {
    // console.log('선택된 수량: ', amt);
    setAmount(amt);
  };

  // 담기 버튼을 누르면 발동하는 함수
  const formSubmitHandler = (e) => {
    e.preventDefault();
    onAddToCart(amount);
    setAmount(1);
  };

  return (
    <form className={styles.form} onSubmit={formSubmitHandler}>
      <Input
        onAdd={amountHandler}
        label="수량"
        input={{
          id: 'amount_' + id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          value: amount,
        }}
      />
      <button>담기</button>
    </form>
  );
};

export default MealItemForm;
