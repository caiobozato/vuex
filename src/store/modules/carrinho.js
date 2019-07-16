export default {
    state: {
        produtos: []
    },
    getters: {
        valorTotal(state){
            return state.produtos.map(p => p.quantidade * p.preco).reduce((total, atual) => total + atual, 0);
        }
    },
    mutations: {
        adicionarProduto(state, payload) {
            state.produtos.push(payload);
        }
        //payload is the argument we want to pass through the mutation
    },
    actions: {
        adicionarProduto( { commit }, payload){
            setTimeout(() => {
                commit('adicionarProduto', payload)
            }, 1000);
        }
    }
}