import React from "react";
import BotCard from "./BotCard";

//add and remove the bots
function BotCollection({botCollection, addRemoveBot, deleteBot}) {

    return (
        <div className="ui four column grid">
            <div className="row">
                {botCollection.map(bot => (
                    <BotCard
                        key={bot.id}
                        bot={bot}
                        addRemoveBot={addRemoveBot}
                        inArmy={false}
                        deleteBot={deleteBot}
                    />
                ))}
            </div>
        </div>
    );
}

export default BotCollection;
