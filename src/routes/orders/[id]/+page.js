import { findOrder } from '$lib/services/orderService';

export async function load({ params, fetch }) {
	const order = await findOrder(fetch, params.id);

	return {
		order: order
	};
}
