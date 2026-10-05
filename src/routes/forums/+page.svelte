<script lang="ts">
    import { addName, getPosts, deleteName } from "./remote";
</script>

<ul>
	{#each await getPosts() as forum }
        {@const del=deleteName.for(forum.id)}
        <li>
            {forum.name}
            <a href="/forums/{forum.id}">{forum.name}</a>
        </li>
	{/each}
</ul>

<form {...addName}>
    <input {...addName.fields.text.as("text")}/>,
    <button>click</button>
</form>