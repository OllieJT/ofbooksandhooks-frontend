<script lang="ts">
	export let size: `prose-${"xl" | "lg" | "sm" | "base"}` = "prose-lg";
	export let fullWidth: boolean = false;
</script>

<div
	class:max-w-3xl={!fullWidth}
	class:max-w-none={fullWidth}
	class="prose {size} over:prose-a:decoration-2 prose-slate mx-auto prose-headings:font-semibold prose-headings:text-mono-900 prose-p:font-sans prose-a:text-primary-600 hover:prose-a:text-primary-800 hover:prose-a:decoration-primary-800 prose-blockquote:font-serif prose-blockquote:font-light"
	{...$$props}
>
	<slot />
</div>

<!-- <div
	class:max-w-4xl={!fullWidth}
	class:max-w-none={fullWidth}
	class="prose {size} rose-headings:font-semibold over:prose-a:decoration-2 prose-zinc mx-auto prose-headings:font-serif prose-p:font-sans prose-a:text-primary-600 hover:prose-a:text-primary-800 hover:prose-a:decoration-primary-800 prose-blockquote:font-serif prose-blockquote:font-light"
	{...$$props}
>
	<slot />
</div> -->
