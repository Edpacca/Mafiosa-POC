import { NpcModel } from "../../models/NpcModel";

export function Npc(props: {data: NpcModel}) {

    const data: NpcModel = props.data;
    const rankStyle = `rank ${data.rank}`

    return (   
        <div className="npc-wrapper">
            <div className="npc-header">
                <div className={rankStyle}>{data.rank}</div>
                <div className="name">{data.name}</div>
            </div>

            <div className="traits">{data.traits.map(trait => <div className="trait">{trait}</div>)}</div>
        </div>
    )    
}