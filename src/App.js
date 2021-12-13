import { useState } from 'react/cjs/react.development';
import Expenses from './componenets/Expenses/Expenses';
import NewExpense from './componenets/NewExpense/NewExpense';
function App() {
  let DUMMY_EXPENSE = [
    {
      id:"e1",
      title:"School Fee",
      amount:250,
      date :new Date(2021,5,5)
    },
    {
      id:"e2",
      title:"Tuter Fee",
      amount:220,
      date :new Date(2021,11,6)
    },
    {
      id:"e3",
      title:"Cabel Fee",
      amount:200,
      date :new Date(2021,12,25)
    },
    {
      id:"e4",
      title:"Book",
      amount:150,
      date :new Date(2021,5,12)
    },
    {
      id:"e5",
      title:"Study",
      amount:2220,
      date :new Date(2021,10,10)
    }
  ];
  const [expenses,setExpenses] = useState(DUMMY_EXPENSE)
  const addExpenseHandler = (expense) => {
    const updatedExpense = [expense ,...expenses];
    setExpenses(updatedExpense);
  }
  return (
    <div className="App">

      <NewExpense  onAddExpense={addExpenseHandler}/>
      <Expenses item={expenses} />
      
    </div>
  );
}

export default App;
