<script>
    import {login,logout} from "./remote.ts"
</script>

<form {...login}>
    <input {...login.fields.username.as("text")}/>
    <input {...login.fields._password.as("password")}/>
    {#if login.result?.error}
    <p>{login.result.error}</p>
    {/if}
    <p>No account? Go to the <a href="/register">register page!</a></p>
    <button>sigma</button>
</form>

<form {...logout}>
    <button>Watch out, kid.</button>
</form>