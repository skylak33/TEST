import { Button } from '@salutejs/plasma-ui';
import React, { useState, useEffect } from 'react';
import './App.css';

const MyTable = () => {
  const [data, setData] = useState([]); // Инициализируем пустым массивом

  useEffect(() => {
    // Функция, которая получает данные с сервера
    const fetchDataFromAPI = async () => {
      try {
        // Выполняем запрос к серверу и получаем данные
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const fetchedData = await response.json();
        
        // Устанавливаем полученные данные в состояние
        setData(fetchedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Вызываем функцию для получения данных при загрузке компонента
    fetchDataFromAPI();
  }, []); // Пустой массив зависимостей, чтобы вызвать useEffect только один раз

  // Рендер компонента с использованием данных из состояния
  return (
    <div>
      
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <Button view=''>{item.name}</Button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyTable;
