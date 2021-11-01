import Vue, { ComponentCustomProperties } from 'vue'

import { RootState } from '../src/store/index'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
   $store: RootState;
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $vuex: RootState;
  }
}
