export const PHARMACIE_REQUEST = 'DASHBOARD_REQUEST';
export const PHARMACIE_SUCCESS = 'DASHBOARD_SUCCESS';
export const PHARMACIE_FAILURE = 'DASHBOARD_FAILURE';


export function pharmacieRequest(pharmacie) {
    return {type: PHARMACIE_REQUEST, payload: {dashboard: pharmacie}};
}

export function pharmacieSuccess(pharmacie) {
    return {type: PHARMACIE_SUCCESS, payload: {dashboard: pharmacie}};
}

export function pharmacieFailure(pharmacie) {
    return {type: PHARMACIE_FAILURE, payload: {dashboard: pharmacie}};
}