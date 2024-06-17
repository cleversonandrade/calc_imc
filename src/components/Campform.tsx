interface CampformProps {
    label: string,
    state: any,
    funcState: any
}


export default function Campform(props:CampformProps) {
    return(
        <div className="">
            <div className="flex flex-col mx-2">
                <label className="w-[600px]">{props.label}</label>
                <input className="border border-black p-1  w-full rounded-lg" value={props.state} onChange={(e) => props.funcState(e.target.value)} />
            </div>
        </div>
    )
}