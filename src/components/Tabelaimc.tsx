interface ITabelaimcProps {
    imc: number,

}

export default function Tabelaimc(props:ITabelaimcProps) {
    return(
        <div className="mx-3 mb-3 text-center">
            <div className="flex">
                <div className="w-1/2 border border-black font-bold">Classificação</div>
                <div className="w-1/2 border border-black font-bold">IMC</div>
            </div>
            <div className={"flex " + (props.imc < 18.5?"destaque":"")}>
                <div className="w-1/2 border border-black">Abaixo do Peso</div>
                <div className="w-1/2 border border-black">Abaixo de 18,5</div>
            </div>
            <div className={"flex " + (props.imc >= 18.5 && props.imc <= 24.9?"destaque":"")}>
                <div className="w-1/2 border border-black">Peso Normal</div>
                <div className="w-1/2 border border-black">Entre 18,5 e 24,9</div>
            </div>
            <div className={"flex " + (props.imc >= 25 && props.imc <= 29.9?"destaque":"")}>
                <div className="w-1/2 border border-black">Sobrepeso</div>
                <div className="w-1/2 border border-black">Entre 25 e 29,9</div>
            </div>
            <div className={"flex " + (props.imc >= 30 && props.imc <= 34.9?"destaque":"")}>
                <div className="w-1/2 border border-black">Obesidade Grau I</div>
                <div className="w-1/2 border border-black">Entre 30 e 34,9</div>
            </div>
            <div className={"flex " + (props.imc >= 35 && props.imc <= 39.9?"destaque":"")}>
                <div className="w-1/2 border border-black">Obesidade Grau II</div>
                <div className="w-1/2 border border-black">Entre 35 e 39,9</div>
            </div>
            <div className={"flex " + (props.imc > 40?"destaque":"")}>
                <div className="w-1/2 border border-black">Obesidade Grau III</div>
                <div className="w-1/2 border border-black">Maior que 40</div>
            </div>
        </div>
    )
}