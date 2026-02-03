import type { JSX } from "react";

interface IDados {
    nome: string
    sobrenome: string
    idade: string
    cidade: string
}


export function Dados(props: IDados): JSX.Element {
    let { nome, sobrenome, idade, cidade } = props
    if (nome == "") {
        nome = "Informação não validada"
    }
    if (sobrenome == "") {
        sobrenome = "Informação não validada"
    }
    if (idade == "") {
        idade = "Informação não validada"
    }
    if (cidade == "") {
        cidade = "Informação não validada"
    }
    return (
        <>
            <div>
                <p>{nome}</p>
                <p>{sobrenome}</p>
                <p>{idade}</p>
                <p>{cidade}</p>
            </div>
        </>
    )
}

