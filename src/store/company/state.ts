import { COMPANY_DATA, COMPANY_DATA_TYPE } from '@/constants/companyData'

export type CompanyState = COMPANY_DATA_TYPE

export const state: CompanyState = { ...COMPANY_DATA }
