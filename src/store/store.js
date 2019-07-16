import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import carrinho from './modules/carrinho';
import parametros from './modules/parametros';

import * as getters from './getters';
//alternative:
//import {getNome, getSobrenome} from './getters';

export default new Vuex.Store({
    state : {
        nome: 'Caio',
        sobrenome: 'Bozato Aroca'
    },
    getters,
    //alternative:
    /*
    getters: {
        ...getters
    }
    */
    modules: { carrinho, parametros }
});