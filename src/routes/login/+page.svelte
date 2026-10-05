<script>
    import {login} from "./remote.ts"
</script>

<form {...login}>
    <input {...login.fields.username.as("text")}/>,
    <input {...login.fields.password.as("password")}/>,

    <button>login</button>
</form>