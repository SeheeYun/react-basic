import React, { useCallback, useState } from 'react';
import './app.css';
import Habits from './components/habits';
import Nav from './components/nav';
import Add from './components/add';
import Reset from './components/reset';

const App = () => {
  const [habits, setHabits] = useState([
    { id: 1, name: 'Reading', count: 0 },
    { id: 2, name: 'Running', count: 0 },
    { id: 3, name: 'Coding', count: 0 },
  ]);

  const handleIncrement = useCallback(habit => {
    setHabits(habits =>
      habits.map(item => {
        if (item.id === habit.id) {
          return { ...habit, count: habit.count + 1 };
        }
        return item;
      })
    );
  }, []);

  const handleDecrement = useCallback(habit => {
    setHabits(habits =>
      habits.map(item => {
        if (item.id === habit.id) {
          return { ...habit, count: habit.count <= 0 ? 0 : habit.count - 1 };
        } else {
          return item;
        }
      })
    );
  }, []);

  const hanledAdd = useCallback(value => {
    setHabits(habits => [
      ...habits,
      {
        id: habits.length > 0 ? habits[habits.length - 1].id + 1 : 0,
        name: value,
        count: 0,
      },
    ]);
  }, []);

  const handleDelet = useCallback(habit => {
    setHabits(habits => habits.filter(item => item.id !== habit.id));
  }, []);

  const hanledReset = useCallback(() => {
    setHabits(habits =>
      habits.map(habit => {
        if (habit.count !== 0) {
          return { ...habit, count: 0 };
        }
        return habit;
      })
    );
  }, []);

  return (
    <div>
      <Nav habitCount={habits.filter(item => item.count > 0).length} />
      <Add onAdd={hanledAdd} />
      <Habits
        habitsProps={habits}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onDelet={handleDelet}
      />
      <Reset onReset={hanledReset} />
    </div>
  );
};

export default App;
