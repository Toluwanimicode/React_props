import React from 'react'
import PlayerCard from './PlayerCard'
import player from '../player.js'
import"../App.css"

const PlayerList = () => {
    console.log(player)
  return (
    <div className='container'>
        <div className='grid'>
            {player.map((item) => (
                    <PlayerCard
                          key={item.name}       
                          name={item.name}
                          age={item.age}
                          jersey_number={item. jersey_number}
                          team={item.team}
                          nationality={item.nationality}             
                          image_url={item.image_url}
                    />    ) )}
        </div>
    </div>
  )
}

export default PlayerList