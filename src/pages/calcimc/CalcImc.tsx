import { useState, useEffect } from "react"
import Campform from "@/components/Campform"
import Tabelaimc from "@/components/Tabelaimc"

export default function CalcIMC() {

    const [peso, setPeso] = useState<number>(0)
    const [altura, setAltura] = useState<number>(0)
    const [imc, setImc] = useState<number>(0)

    function calcular() {
        let res = peso/(altura*altura)
        setImc(res)
    }
    

    return(
        <div className="flex flex-col border border-black rounded-lg w-80 gap-5 ">
            <p className="w-full text-center bg-zinc-400 font-bold text-lg p-2 rounded-lg">Cálculo IMC</p>
            <Campform label="Peso: " state={peso} funcState={setPeso}/>
            <Campform label="Altura: " state={altura} funcState={setAltura}/>
            <button className="bg-indigo-900 text-white mx-10 rounded-md cursor-pointer" onClick={calcular}>Calcular</button>
            <p className="bg-zinc-100 mx-2 p-1 border border-black">Resultado: {imc.toFixed(2)}</p>
            <Tabelaimc imc={imc} />
        </div>
    )
}