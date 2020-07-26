import * as actionTypes from "./actionTypes";

const INITIAL_STATE = {
    sneakers: [],
    total: 0,
    isLoading: false,
    isCreating: false,
    clothings: [],
    adminProducts: [],
    categories: [],
    sneakerProduct: {},
    errs: {},
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case actionTypes.GET_SNEAKER_START:
            return {
                ...state,
                isLoading: true,
            };
        case actionTypes.GET_SNEAKER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                sneakers: action.payload.sneakers,
                total: action.payload.total,
            };
        case actionTypes.GET_SNEAKER_FAILURE:
            return {
                ...state,
                isLoading: false,
                errs: action.payload,
            };
        case actionTypes.GET_CLOTHING_START:
            return {
                ...state,
                isLoading: true,
            };
        case actionTypes.GET_CLOTHING_SUCCESS:
            return {
                ...state,
                isLoading: false,
                clothings: action.payload.clothings,
                total: action.payload.total,
            };
        case actionTypes.GET_CLOTHING_FAILURE:
            return {
                ...state,
                isLoading: true,
                errs: action.payload,
            };
        case actionTypes.GET_ADMIN_START:
            return {
                ...state,
                isLoading: true,
            };
        case actionTypes.GET_ADMIN_SUCCESS:
            const adminProducts = action.payload.adminProducts.map((product) => {
                product.key = product.id;
                return product;
            });
            return {
                ...state,
                isLoading: false,
                adminProducts,
                total: action.payload.total,
            };
        case actionTypes.GET_ADMIN_FAILURE:
            return {
                ...state,
                isLoading: true,
                errs: action.payload.err,
            };
        case actionTypes.GET_CATE_START:
            return {
                ...state,
                isLoading: true,
            };
        case actionTypes.GET_CATE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                categories: action.payload,
            };
        case actionTypes.GET_CATE_FAILURE:
            return {
                ...state,
                isLoading: true,
                err: action.payload,
            };
        case actionTypes.CREATE_ADMIN_START:
            return {
                ...state,
                isCreating: true,
            };
        case actionTypes.CREATE_ADMIN_SUCCESS:
            return {
                ...state,
                isCreating: false,
                adminProducts: [action.payload].concat(state.adminProducts),
            };
        case actionTypes.CREATE_ADMIN_FAILURE:
            return {
                ...state,
                isCreating: true,
                err: action.payload,
            };
        case actionTypes.GET_SNEAKER_DETAIL_START:
            return {
                ...state,
                isLoading: true,
            };
        case actionTypes.GET_SNEAKER_DETAIL_SUCCESS:
            return {
                ...state,
                isLoading: false,
                sneakerProduct: action.payload,
            };
        case actionTypes.GET_SNEAKER_DETAIL_FAILURE:
            return {
                ...state,
                isLoading: true,
                errs: action.payload,
            };
        case actionTypes.CLEAR_PRODUCT_DETAIL:
            return {
                ...state,
                sneakerProduct: {},
            };
        default:
            return state;
    }
}
