<script lang="ts">
	//import Search from "@inqling/svelte-icons/outline/search.svelte";
	import QuickLinks from "@inqling/svelte-icons/outline/identification.svelte";
	import ShoppingBag from "@inqling/svelte-icons/outline/shopping-bag.svelte";
</script>

<header class="sticky top-0 z-30 border-b border-mono-200 bg-white ">
	<nav aria-label="Top" class="mx-auto max-w-7xl sm:px-6 lg:px-8">
		<div class="px-4 pb-14 sm:px-0 sm:pb-0">
			<div class="flex h-16 items-center justify-between">
				<!-- Logo -->
				<div class="flex flex-1">
					<a href="/">
						<span class="sr-only">Of Books & Hooks</span>
						<img class="h-8 w-auto" src="/img/logo.svg" alt="" />
					</a>
				</div>

				<!-- Menu -->
				<div class="absolute inset-x-0 bottom-0 sm:static sm:flex-1 sm:self-stretch">
					<div
						class="flex h-14 space-x-8 overflow-x-auto border-t px-4 pb-px sm:h-full sm:justify-center sm:overflow-visible sm:border-t-0 sm:pb-0"
					>
						<a
							href="#"
							class="flex min-w-max items-center text-sm font-medium text-mono-700 hover:text-mono-800"
						>
							Of Books
						</a>

						<a
							href="#"
							class="flex min-w-max items-center text-sm font-medium text-mono-700 hover:text-mono-800"
						>
							Of Hooks
						</a>

						<a
							href="/timeline"
							class="flex min-w-max items-center text-sm font-medium text-mono-700 hover:text-mono-800"
						>
							Timeline
						</a>

						<a
							href="#"
							class="flex min-w-max items-center text-sm font-medium text-mono-700 hover:text-mono-800"
						>
							Shop
						</a>
					</div>
				</div>

				<div class="flex flex-1 items-center justify-end">
					<!--
						Search:
						<a href="#" class="p-2 text-mono-400 hover:text-mono-500">
							<span class="sr-only">Search</span>
							<Search class="h-6 w-6" />
						</a>
					-->
					<a href="/links" class="p-2 text-mono-400 hover:text-mono-500">
						<span class="sr-only">Quick Links</span>
						<QuickLinks class="h-6 w-6" />
					</a>

					<!-- Cart -->
					<div class="ml-4 flow-root lg:ml-8">
						<a href="#" class="group -m-2 flex items-center p-2">
							<ShoppingBag
								class="h-6 w-6 flex-shrink-0 text-mono-400 group-hover:text-mono-500"
							/>
							<span
								class="ml-2 text-sm font-medium text-mono-700 group-hover:text-mono-800"
							>
								0
							</span>
							<span class="sr-only">items in cart, view bag</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	</nav>
</header>
