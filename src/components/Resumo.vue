<template>
    <Painel titulo="Resumo" roxo>
        <div class="resumo">
            <span>Total: <strong>{{ /*2nd form: valorTotal*/ total | dinheiro }}</strong></span>
            <hr>
            <button>Finalizar!</button>
        </div>
    </Painel>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    //3rd and recommended form:
    computed: mapGetters({
        total: 'valorTotal'
    })

    //1st form:
    // computed: {
    //     total() {
    //         return this.$store.getters.valorTotal;
    //     }
    // }

    //2nd form:
    // computed: mapGetters(['valorTotal'])
    
}
</script>

<style>
    table {
        width: 100%;
    }

    td {
        border-top: 1px solid #EEE;
        width: 33%;
    }
</style>
