import {useRef} from 'react'

function Login(){

/*Hook- useRef - retorna um elemento ou componentte no DOM */
const usuario =useRef();
const senha = useRef();

/*criando a estrutura do sessionStorage para os dados digitados */
// pegando dados do sessionStorage 
const getUser = sessionStorage.getItem('userData');
const getSenha = sessionStorage.getItem('userSenha');

/*criando as funções */
// declarando a senha e o user para validacao 
const handleSubmit =()=>{
    if(usuario.current.value ==='admin' && senha.current.value ==='123456')
    {
        sessionStorage.setItem('userData','admin');
        sessionStorage.setItem('userSenha','123456');

    } else{
        alert("Usuario e senha invalidos")
    }
};

    return(
        <>
        {/* if e else dentro do return  */}
            { getUser && getSenha ? (
                <Conteudo/>
             ):(
                // handle submit para aplicar o if e puxar o conteudo caso true 
                  <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <label htmlFor="usuario">Usuario</label>
                    <input type="text" ref={usuario} />

                    <label htmlFor="senha">Senha</label>
                    <input type="password" ref={senha} />

                    <input type="submit" value="login" />
                  </form>  
             )}

        </>
    )
}
export default Login;