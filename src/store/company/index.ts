import { Module } from 'vuex'
import { RootState } from '../types'
import { CompanyState, state } from './state'

const company: Module<CompanyState, RootState> = {
  state
}

export default company
