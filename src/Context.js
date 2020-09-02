import React, {createContext, useState} from 'react'
import App from './App'
export const City = createContext({})

const CityContext = () =>{
    const [food, setFood] = useState(0)
    const [population, setPopulation] = useState(0)
    const [money, setMoney] = useState(200)
    const [farms, setFarms] = useState(0)
    const [houses, setHouses] = useState(0)
    
    return(
        <City.Provider value={{ food , population, money, farms, houses, setFood, setPopulation, setMoney, setFarms, setHouses}}>
            <App />
        </City.Provider>
    )
}
export default CityContext