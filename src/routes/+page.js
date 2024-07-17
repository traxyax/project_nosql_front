import { fetchOrders } from '$lib/services/orderService';

export async function load({ fetch }) {
	const orders = await fetchOrders(fetch);

	return {
		orders: orders
	};
}
