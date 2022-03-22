<script lang="ts">
	import type { BlockProps } from "@portabletext/svelte";
	import type { InlinePeople } from "$lib/api/sanity/schema";
	import PeopleList from "$lib/components/people/people-list.svelte";

	export let portableText: BlockProps<InlinePeople>;
	$: people = portableText.block;
	console.log({ people });
</script>

<PeopleList people={people.people} />
