<script lang="ts">
    import { createMessage, getMessages } from "./remote.ts";
    let { params } = $props();
</script>

<ul>
    {#each await getMessages(params.id) as message}
        <li>{message.text}</li>
    {/each}
</ul>

<form {...createMessage}>
    <input {...createMessage.fields.message.as("text")}/>,
    <input {...createMessage.fields.id.as("hidden", params.id)} />
    <button>click</button>
</form>