<script lang="ts">
    import { redirect } from "@sveltejs/kit";
    import { register } from "./remote.ts"
</script>

<form {...register}>
    <input {...register.fields.username.as("text")}/> 
    {#each register.fields.username.issues() ?? [] as issue}
        <p>{issue.message}</p>
    {/each},
    <input {...register.fields._password.as("password")}/>,
    <p>Already have an account? Go to the <a href="/login">login page!</a></p>
    <button>sigma</button>
</form>