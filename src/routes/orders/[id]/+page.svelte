<script lang="ts">
	import { deleteOrder } from '$lib/services/orderService.js';

	export let data;

	let order = data.order;

	async function delOrder(order) {
		const status = await deleteOrder(order._id);

		if (status === 200) {
			window.location.href = '/';
		}
	}
</script>

<div class="flex flex-wrap justify-center gap-2">
	<div class="card bg-base-100 w-96 shadow-xl">
		<div class="card-body">
			<h2 class="card-title">{order._id}</h2>
			<p>Vendor id: {order.vendor_id}</p>
			<p>Chain id: {order.chain_id}</p>
			<p>City id: {order.city_id}</p>
			<p>Successful: {order.successful_orders}</p>
			<p>Fail: {order.fail_orders}</p>
			<p>Date: {order.date}</p>
			<div class="card-actions justify-end">
				<button class="btn btn-warning" on:click={() => delOrder(order)}>Delete</button>
			</div>
		</div>
	</div>
</div>
