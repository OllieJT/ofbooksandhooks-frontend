<script lang="ts">
	console.log({
		[$$props?.portableText?.mark?._type || $$props?.portableText?.block?._type]:
			$$props?.portableText?.mark || $$props?.portableText?.block,
	});
	//console.log($$props);

	//export let portableText: any;

	//$: thing = portableText;
</script>

<span class="inline-block border border-red-500 p-2 text-red-500">
	<slot />
</span>
