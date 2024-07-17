<script lang="ts">
	import { deleteOrder } from '$lib/services/orderService.js';

	export let data;

	let orders = data.orders;

	async function delOrder(order) {
		const status = await deleteOrder(order._id);

		if (status === 200) {
			const index = orders.findIndex((o) => (o._id = order._id));

			if (index !== -1) {
				orders.splice(index, 1);
				orders = orders;
			}
		}
	}
</script>

<div class="flex flex-wrap justify-center gap-2">
	{#each orders as order (order._id)}
		<div class="card bg-base-100 w-96 shadow-xl">
			<div class="card-body">
				<h2 class="card-title">{order._id}</h2>
				<p>Vendor id: {order.vendor_id}</p>
				<p>Chain id: {order.chain_id}</p>
				<div class="card-actions justify-end">
					<button class="btn btn-warning" on:click={() => delOrder(order)}>Delete</button>
					<a class="btn btn-primary" href="/orders/{order._id}">Details</a>
				</div>
			</div>
		</div>
	{/each}
</div>
