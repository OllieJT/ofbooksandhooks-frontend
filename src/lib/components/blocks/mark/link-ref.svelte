<script lang="ts">
	import type { MarkProps } from "@portabletext/svelte";
	import { resolvePath } from "$util/resolve-path";

	type REF_LINK = {
		_type: string;
		reference: {
			label?: null | string;
			title?: null | string;
			slug: string;
			_id: string;
			_type: string;
		};
	};

	export let portableText: MarkProps<Sanity.Keyed<REF_LINK>>;

	$: doc = portableText.mark.reference;

	$: href = resolvePath({ slug: doc.slug, type: doc._type });
</script>

<a {href}>
	<slot />
</a>
