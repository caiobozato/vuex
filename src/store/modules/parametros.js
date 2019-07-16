export default {
    state: {
        quantidade: 1,
        preco: 9.99
    },
    mutations: {
        adicionarQuantidade(state, payload){
            state.quantidade = payload;
        },
        adicionarPreco(state, payload){
            state.preco = payload;
        }
        //payload is the argument we want to pass through the mutation
    }
}