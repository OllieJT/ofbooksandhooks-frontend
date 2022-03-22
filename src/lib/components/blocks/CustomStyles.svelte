<script lang="ts">
	console.log({ [$$props?.portableText.mark._type]: $$props?.portableText.mark });

	export let portableText: any;

	$: thing = portableText;
</script>

{JSON.stringify(thing)}
