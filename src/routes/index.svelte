<script lang="ts">
	import Prose from "$components/container/Prose.svelte";
	import Wrapper from "$components/container/Wrapper.svelte";
	import SvelteSeo from "svelte-seo";
</script>

<SvelteSeo title="Homepage" />

<Wrapper constrain gutter>
	<Prose>
		<h1>A multi-line demo <br />for Heading 1</h1>

		<hr />
	</Prose>
</Wrapper>
