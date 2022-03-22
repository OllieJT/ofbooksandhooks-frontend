<script lang="ts">
	export let href: string;
</script>

<a
	{href}
	class="flex min-w-max items-center text-sm font-semibold text-mono-700 hover:text-primary-500"
>
	<slot />
</a>
