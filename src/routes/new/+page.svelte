<script lang="ts">
	import { createOrder } from '$lib/services/orderService';

	let vendor_id: number = null;
	let chain_id: number = null;
	let city_id: number = null;
	let successful_orders: number = null;
	let fail_orders: number = null;

	async function handleSubmit() {
		const order = {
			vendor_id: vendor_id,
			chain_id: chain_id,
			city_id: city_id,
			successful_orders: successful_orders,
			fail_orders: fail_orders
		};

		const status = await createOrder(order);

		if (status === 200) {
			vendor_id = null;
			chain_id = null;
			city_id = null;
			successful_orders = null;
			fail_orders = null;
		}
	}
</script>

<div class="flex flex-col items-center justify-center gap-2">
	<h3 class="text-3xl font-bold dark:text-white">Add new order</h3>

	<form on:submit|preventDefault={handleSubmit} class="flex flex-col gap-2">
		<input
			type="number"
			bind:value={vendor_id}
			placeholder="Vendor id"
			class="input input-bordered w-full max-w-xs"
		/>
		<input
			type="number"
			bind:value={chain_id}
			placeholder="Chain id"
			class="input input-bordered w-full max-w-xs"
		/>
		<input
			type="number"
			bind:value={city_id}
			placeholder="City id"
			class="input input-bordered w-full max-w-xs"
		/>
		<input
			type="number"
			bind:value={successful_orders}
			placeholder="Successful orders"
			class="input input-bordered w-full max-w-xs"
		/>
		<input
			type="number"
			bind:value={fail_orders}
			placeholder="Fail orders"
			class="input input-bordered w-full max-w-xs"
		/>
		<button type="submit" class="btn btn-primary">Add</button>
	</form>
</div>
