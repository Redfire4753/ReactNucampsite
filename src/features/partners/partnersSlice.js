import {PARTNERS} from '../../app/shared/PARTNERS'
import { createSlice } from '@reduxjs/toolkit/dist/createSlice';

const initialState = {
    partnersArray: PARTNERS
};

const partnersSlice = createSlice({
    name: 'partners',
    initialState
});

const partnersReducer = partnersSlice.reducer;

export const selectAllPartners = () => {
    return PARTNERS;
}
export const selectFeaturedPartner = () => {
    return PARTNERS.find(partner => partner.featured);
}