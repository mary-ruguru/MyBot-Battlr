import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({botArmy, addRemoveBot, deleteBot}) {
  //code for the bot army

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
            {botArmy.map(bot => (
                <BotCard
                    key={bot.id}
                    bot={bot}
                    addRemoveBot={addRemoveBot}
                    inArmy={true}
                    deleteBot={deleteBot}
                />
            ))}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
