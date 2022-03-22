<script lang="ts">
	import type { Person } from "$lib/api/sanity/schema";
	import PeopleList from "./people-list.svelte";

	export let people: Person[];
</script>

<div class="bg-white">
	<div class="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
		<div class="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
			<div class="space-y-5 sm:space-y-4">
				<h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">Our Team</h2>
				<p class="text-xl text-gray-500">
					Nulla quam felis, enim faucibus proin velit, ornare id pretium. Augue
					ultrices sed arcu condimentum vestibulum suspendisse. Volutpat eu faucibus
					vivamus eget bibendum cras.
				</p>
			</div>
			<div class="lg:col-span-2">
				<PeopleList {people} />
			</div>
		</div>
	</div>
</div>
