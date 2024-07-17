import { error } from '@sveltejs/kit';
import { PUBLIC_BASE_URL } from '$env/static/public';

export async function fetchOrders(customFetch) {
	const res = await customFetch(`${PUBLIC_BASE_URL}/orders`);

	if (!res.ok) {
		let errorMsg = await res.text();
		throw error(500, { message: errorMsg });
	}

	return res.json();
}

export async function fetchLatestOrders(customFetch) {
	const res = await customFetch(`${PUBLIC_BASE_URL}/orders/latest`);

	if (!res.ok) {
		let errorMsg = await res.text();
		throw error(500, { message: errorMsg });
	}

	return res.json();
}

export async function findOrder(customFetch, id: number) {
	const res = await customFetch(`${PUBLIC_BASE_URL}/orders/${id}`);

	if (!res.ok) {
		let errorMsg = await res.text();
		throw error(500, { message: errorMsg });
	}

	return res.json();
}

export async function createOrder(order) {
	const res = await fetch(`${PUBLIC_BASE_URL}/orders`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(order)
	});

	return res.status;
}

export async function deleteOrder(id: number) {
	const res = await fetch(`${PUBLIC_BASE_URL}/orders/${id}`, {
		method: 'DELETE'
	});

	if (!res.ok) {
		let errorMsg = await res.text();
		throw error(500, { message: errorMsg });
	}

	return res.status;
}
