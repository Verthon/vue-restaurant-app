import { createMapper, Module } from 'vuex-smart-module'

import state from './state'

export const company = new Module({
  state
})

export const companyMapper = createMapper(company)
