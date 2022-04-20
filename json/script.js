const objs = [
    {
        nome: "João",
        idade: 37,
        esta_trabalhando: false,
        detalhes_profissão:  {
            "profissão": "programador",
            "empresa": "Empresa X"
        },
        hobbies: ["Programar", "Correr", "Ler"]
    },
    {
        nome: "Mateus",
        idade: 30,
        esta_trabalhando: true,
        detalhes_profissão:  {
            "profissão": "programador",
            "empresa": "Empresa X"
        },
        hobbies: ["Programar", "Correr", "Ler"]
    }
]

const jsonData = JSON.stringify(objs)
console.log(jsonData)

const objData = JSON.parse(jsonData)
console.log(objData)

objData.map((pessoa)=>{
    console.log(pessoa.nome)
})