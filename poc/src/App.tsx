import React from 'react';
import { NpcRank } from './components/npc/NpcRank';
import { populateRanks } from './engine/populateRanks';
import { NpcModel } from './models/NpcModel';

function App() {
  const rankPopulationRatio = 3;
  const numberOfTraits = 3;
  const npcs: NpcModel[][] = populateRanks(rankPopulationRatio, numberOfTraits);

  return (
    <div className="npc-ranks">
      {npcs.map(npcRank => <NpcRank npcs={npcRank}/>)}
    </div>
  );
}

export default App;
