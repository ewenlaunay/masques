export const PHARMACIE_REQUEST = 'PHARMACIE_REQUEST';
export const PHARMACIE_SUCCESS = 'PHARMACIE_SUCCESS';
export const PHARMACIE_FAILURE = 'PHARMACIE_FAILURE';


export function pharmacieRequest() {
    return {type: PHARMACIE_REQUEST};
}

export function pharmacieSuccess(pharmacies) {
    return {type: PHARMACIE_SUCCESS, payload: pharmacies};
}

export function pharmacieFailure(error) {
    return {type: PHARMACIE_FAILURE, payload: error};
}

export function fetchPharmacies() {
    return function(dispatch) {
        dispatch(pharmacieRequest());
        console.log(process.env.API_URL);
        return fetch('http://192.168.1.17:4000/pharmacies')
            .then(
                response => response.json(),
                error => dispatch(pharmacieFailure(error))
            )
            .then(data => {
                dispatch(pharmacieSuccess(data));
            })
            ;
    }
}