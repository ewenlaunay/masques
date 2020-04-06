import { PHARMACIE_REQUEST, PHARMACIE_SUCCESS, PHARMACIE_FAILURE  } from "../action";

const initialState = { items: [] };

function pharmacie(state = initialState, action) {
    switch(action.type) {
        case PHARMACIE_REQUEST:
            return { ...state, loading: true };
        case PHARMACIE_SUCCESS:
            return {
                ...state,
                pharmacies: action.payload.pharmacies,
                loading: false
            };
        case PHARMACIE_FAILURE:
            return { ...state, error: action.payload, loading: false };
        default:
            return state;
    }
}

export default pharmacie;

