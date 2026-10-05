<script lang="ts">
    import { addName, getPosts, deleteName } from "./clicks.remote";


</script>

<ul>
	{#each await getPosts() as title, clicks }
        {const del=deleteName.for(clicks)}
        <form {...del}>
            <input {...del.fields.index.as("hidden",clicks)} />
            <li>{title}</li>
            <button disabled={!!del.pending}>delete</button>
        </form>
	{/each}
</ul>

<form {...addName}>
    <input {...addName.fields.text.as("text")}/>,
    <button>click</button>
</form>