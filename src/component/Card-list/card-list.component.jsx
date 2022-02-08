import React from "react";
import  './card-list.styles.css';
import { Card } from "../Card/card.component";


export const CardList = (props) => {
    return (
        <div className="card-list">
            {props.name.map(monster=>(
                <Card key={monster.id} monsters={monster}/>
          ))
        }
        </div>
    )
}