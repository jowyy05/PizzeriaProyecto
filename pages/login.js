export default function Login() {
    async function handlerSubmit(ev){
        ev.preventDefault();
        const user ={
            email:ev.target.email.value,
            password:ev.target.password.value
        }
        const response = await fetch('/api/login',{
            method:"POST",
            headers:{
                "content-type":'application/json'
            },
            body:JSON.stringify(user)
        })
        console.log(await response.json())
    }
    return (
        <form onSubmit={handlerSubmit}>
            <label>
                Email*:
                <input id="email" name="email" />
            </label>
            <label>
                Password*:
                <input id ="password" type="password" name="password" />
            </label>
            <button type="submit">Login</button>
            <button type="button" onClick={() => location.href='/register'}>Create an account</button>
        </form>
    )
}