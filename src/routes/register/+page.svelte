<script lang="ts">
    import { redirect } from "@sveltejs/kit";
    import { register } from "./remote.ts"
</script>

<form {...register}>
    <input {...register.fields.username.as("text")}/> 
    <input {...register.fields._password.as("password")}/>
    {#each register.fields.username.issues() ?? [] as issue}
        <p>{issue.message}</p>
    {/each}
    {#each register.fields._password.issues() ?? [] as issue}
        <p>{issue.message}</p>
    {/each}
    <p>Already have an account? Go to the <a href="/login">login page!</a></p>
    <button>sigma</button>
</form>