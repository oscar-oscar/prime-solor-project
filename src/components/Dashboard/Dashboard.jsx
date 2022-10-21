import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

//this is the main page of the app
//user should see a list of their games played
// using state to test
function Dashboard() {

    let [gameList, setGameList] = useState([]);

    const getGames = () => {
        axios.get('/dashboard').then(response => {
            console.log(response.data);
            setGameList(response.data);
        }).catch(e => {
            console.log(e);
            alert('something went wrong in axios GET getGames');
        })
    }

    useEffect(() => {
        getGames();
    }, []);


    return (
        <div>
            <h3>Game List</h3>
            <ul>
                {gameList.map(game => {
                    return (
                        <li key={game.id}>
                            <div>Game Date: {game.played_at}</div><br/>
                            <div>Location: {game.location}</div>
                            <div>Game Notes: {game.notes}</div>
                            <div>My Partner: {game.partner}</div>
                            <div>Played against: {game.opponent_1} and {game.opponent_2}</div><br/>


                        </li>
                    )
                })}
            </ul>
        </div>
    )







}




export default Dashboard;
