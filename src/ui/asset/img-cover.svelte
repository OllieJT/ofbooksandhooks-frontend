<script lang="ts">
	export let src: string;
	export let alt: string | undefined = undefined;
</script>

<img {src} {alt} class="h-full w-full object-cover object-center" />
