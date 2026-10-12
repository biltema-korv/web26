<script>
    import {login} from "./remote.ts"
</script>

<form {...login}>
    <input {...login.fields.username.as("text")}/>,
    <input {...login.fields.password.as("password")}/>,
    <p>No account? Go to the <a href="/register">register page!</a></p>
        <button>sigma</button>
</form>