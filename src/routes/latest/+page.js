import { fetchLatestOrders } from '$lib/services/orderService';

export async function load({ fetch }) {
	const orders = await fetchLatestOrders(fetch);

	return {
		orders: orders
	};
}
