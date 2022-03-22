<script lang="ts">
	import type { BlockProps } from "@portabletext/svelte";
	import type { InlineCta } from "$lib/api/sanity/schema";
	import Notify from "@inqling/svelte-icons/outline/speakerphone.svelte";

	export let portableText: BlockProps<InlineCta>;
	$: cta = portableText.block;
</script>

<div class="not-prose my-2 mx-auto">
	<div class="rounded-lg border border-alt-300 bg-alt-100 p-2 sm:p-3">
		<div class="flex flex-wrap items-center justify-between">
			<div class="flex flex-1 items-center">
				<span class="flex rounded-lg bg-alt-300 p-2">
					<Notify class="h-6 w-6 text-alt-700" />
				</span>
				<p class="ml-3 truncate font-medium text-alt-700">
					{cta.title}
				</p>
			</div>
			<div class="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
				<a
					href={cta.url}
					class="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-alt-500 shadow-sm hover:bg-alt-50"
				>
					Learn more
				</a>
			</div>
		</div>
	</div>
</div>
