<script lang="ts">
	import Instagram from "@inqling/svelte-icons/brand/instagram.svelte";
	import Etsy from "@inqling/svelte-icons/brand/etsy.svelte";
	import TikTok from "@inqling/svelte-icons/brand/tiktok.svelte";
</script>

<div class="space-y-4">
	<div class="aspect-w-3 aspect-h-2">
		<img
			class="rounded-lg object-cover shadow-lg"
			src="https://ofbooksandhooks.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fwasyg3ri%2Fproduction%2F3247c1c099e394a347da3a297ebaa996dd594f32-4032x3024.png%3Frect%3D794%2C0%2C3238%2C2614%26max-h%3D240%26max-w%3D240%26auto%3Dformat&w=300&q=75"
			alt=""
		/>
	</div>
	<div class="space-y-1 text-lg font-semibold leading-6">
		<h3>Madeline Farquharson</h3>
		<p class="text-primary-600">Of Books & Hooks</p>
	</div>
	<div class="text-base">
		<p class="text-mono-500">
			As both an avid reader and passionate crafter, I aim to combine my passions and
			share them with the world through ofbooksandhooks.
			<br />
			<br />
			Here, you'll find book and crochet pairings, season's readings, and more. Please feel
			free to reach out to me directly on Instagram if you have any questions. Enjoy!
		</p>
	</div>

	<ul role="list" class="flex space-x-5">
		<li>
			<a
				href="https://www.instagram.com/ofbooksandhooks/"
				class="text-mono-400 hover:text-mono-500"
			>
				<span class="sr-only">Instagram</span>
				<Instagram class="h-5 w-5" />
			</a>
		</li>
		<li>
			<a
				href="https://www.etsy.com/shop/OfBooksAndHooksUK"
				class="text-mono-400 hover:text-mono-500"
			>
				<span class="sr-only">Etsy</span>
				<Etsy class="h-5 w-5" />
			</a>
		</li>
		<li>
			<a
				href="https://vm.tiktok.com/ZMLacvxNq/"
				class="text-mono-400 hover:text-mono-500"
			>
				<span class="sr-only">TikTok</span>
				<TikTok class="h-5 w-5" />
			</a>
		</li>
	</ul>
</div>
