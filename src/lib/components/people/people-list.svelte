<script lang="ts">
	import type { Person } from "$lib/api/sanity/schema";
	import PersonCard from "./person-card.svelte";

	export let people: Person[];
</script>

<section class="not-prose">
	<ul
		class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8"
	>
		{#each people as person}
			<li>
				<PersonCard {person} />
			</li>
		{/each}
	</ul>
</section>
