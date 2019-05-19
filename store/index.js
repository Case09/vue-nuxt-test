import axios from '../plugins/axios';

export const state = () => ({
	ids: [],
	items: []
})

export const mutations = {
	setIds(state, ids) {
		state.ids = ids;
	},
	setItems(state, items) {
		state.items = items;
	}
}

export const actions = {
	async LOAD_ITEMS({ commit }, dataUrl) {
		const response = await axios.get(dataUrl);
		const ids = response.data;
		const tenIds = ids.slice(0, 10);

		const itemsPromises = tenIds.map(id => axios.get(`item/${id}.json`));
		const itemsResponses = await Promise.all(itemsPromises);
		const items = itemsResponses.map(res => res.data);

		const realItems = items.map(i => i ? i : { title: 'Failed to load', id: 0 });

		// commit('setIds', ids);
		commit('setItems', realItems);
	}
}