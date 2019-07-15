<template>
    <Painel titulo="Loja Virtual" verde>
        <div class="loja">
            <span>Adicionar</span>
            <input type="number" v-model.number="quantidade">
            <span>itens de <strong>R$</strong></span>
            <input type="number" v-model.number="preco">
            <button @click="adicionar">Agora!</button>
        </div>
    </Painel>
</template>

<script>
//2nd method:
import { mapMutations } from 'vuex';

export default {
    data() {
        return {
            sequencia: 1
        }
    },
    computed: {
        quantidade() {
            return this.$store.state.quantidade;
        },
        preco() {
            return this.$store.state.preco;
        }
    },
    methods: {
        //2nd method:
        ...mapMutations(['adicionarProduto']),

        adicionar() {
            const produto = {
                id: this.sequencia,
                nome: `Produto ${this.sequencia}`,
                quantidade: this.quantidade,
                preco: this.preco
            }
            this.sequencia++
            // eslint-disable-next-line

            //1st method
            //this.$store.commit('adicionarProduto', produto);
            //Here I'm commiting the mutation into the state using 'commit' command, passing as parameters the mutation I created with name of 'adicionarProduto' and passing the 'produto' as the payload.

            //2nd method
            this.adicionarProduto(produto);
        }
    }
}
</script>

<style>
    .loja {
        display: flex;
        justify-content: center;
    }

    .loja > * {
        margin: 0px 10px;
    }

    input {
        font-size: 2rem;
        width: 90px;
    }
</style>
