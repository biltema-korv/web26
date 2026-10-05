<script lang="ts">
    import { addName, getPosts, deleteName } from "./remote";
</script>

<ul>
	{#each await getPosts() as title }
        {@const del=deleteName.for(title.id)}
        <li>
            {title.text}
            <form {...del}>
                <button>❌</button>
            </form>
        </li>
	{/each}
</ul>

<form {...addName}>
    <input {...addName.fields.text.as("text")}/>,
    <button>click</button>
</form>