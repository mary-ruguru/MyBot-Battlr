import React, {useEffect, useState} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
//import botCard from "./BotCard";

function BotsPage() {
    const [botCollection, setBotCollection] = useState([])
    const [botArmy, setBotArmy] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/bots')
            .then(res => res.json())
            .then(data => setBotCollection(data))
    }, [])
// delete bot from database
    function deleteBot(bot) {
        fetch(`http://localhost:3000/bots/${bot.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => {
            setBotCollection(botCollection.filter(({id}) => id !== bot.id));
            setBotArmy(botArmy.filter(({id}) => id !== bot.id));
            console.log(res)
        })
    }

    function addRemoveBot(bot, inArmy) {
        // army === true if bot in botArmy
        if (botArmy.includes(bot) && inArmy === true) {
            // remove bot from BotArmy state
            setBotArmy(botArmy.filter(({id}) => id !== bot.id));
        } else if (botArmy.includes(bot) === false) {
            // add bot to BotArmy state
            setBotArmy(botArmy => [...botArmy, bot])
        }
    }

    return (
        <div>
            <YourBotArmy botArmy={botArmy} addRemoveBot={addRemoveBot} deleteBot={deleteBot}/>
            <BotCollection botCollection={botCollection} addRemoveBot={addRemoveBot} deleteBot={deleteBot}/>
        </div>
    )
}

export default BotsPage;
