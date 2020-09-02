import React, {useContext, useState} from 'react';
import './App.css';
import { City } from './Context';
import dayjs from "dayjs";

function App() {
  const {food , population, money, farms, houses, setFood, setPopulation, setMoney, setFarms, setHouses} = useContext(City)
  let [today, setToday] = useState(dayjs())

  const incDays = () =>{
    setToday(today.add('1', 'day'))
    updateFood();
    updatePopulation();
  }
  const buyFarm = () =>{
    setFarms(farms+1);
    setMoney(money-20);
  }
  const buyHouse = () =>{
    setHouses(houses+1);
    setMoney(money-10);
  }

  const updateFood = () =>{
    setFood(food + ((farms*5) + (houses * -2)))
  }
  const updatePopulation = () =>{
    setPopulation(population + (houses*1))
  }

  return (
    <div className="app">
      <div className="stocks">
        <p className="stocks__item">Żywność<span>{food}</span></p>
        <p className="stocks__item">Populacja<span>{population}</span></p>
        <p className="stocks__item">Pieniądze<span>{money} zł</span></p>
      </div>
      <div className="investments">
        <ul className="investments__list">
          <h2 className="invesments__list__header">Inwestycje</h2>
          <li className="investments__list__item">
            Farma
            <span>Ilość: {farms}</span>
            <span>+5 żywności/dzień</span>
            <span>Koszt: 20zł</span>
            <button className="btn" onClick={buyFarm}>Kup</button>
          </li>
          <li className="investments__list__item">
            Dom
            <span>Ilość: {houses}</span>
            <span>+1 populacja/dzień</span>
            <span>-2 żywności/dzień</span>
            <span>Koszt: 10zł</span>
            <button className="btn" onClick={buyHouse}>Kup</button>
          </li>
        </ul>
      </div>
      <div className="date__container">
      <span>{today.format('DD-MM-YYYY')}</span>
        <button onClick={incDays}>Zakończ dzień</button>
      </div>
    </div>
  );
}

export default App;
