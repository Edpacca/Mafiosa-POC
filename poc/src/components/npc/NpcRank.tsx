import { NpcModel } from "../../models/NpcModel";
import { Npc } from "./Npc";

export function NpcRank(props: {npcs: NpcModel[]}) {
    return (
        <div className="npc-rank">
            {props.npcs.map(npc => <Npc data={npc}/>)}
        </div>
    )
}