import data from "./receitas.json"

const dados = data.map(valor => console.log(valor) );

function UserReceitas() {

    return 
    
        <>
            
            <div>Nome: {dados}</div>

        </>
    
}

export default UserReceitas;