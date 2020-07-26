import * as actionTypes from "./actionTypes";

export const getSneakerStart = (pageSize, pageIndex) => {
    return {
        type: actionTypes.GET_SNEAKER_START,
        payload: { pageSize, pageIndex },
    };
};

export const getSneakerSucess = (sneakers, total) => {
    return {
        type: actionTypes.GET_SNEAKER_SUCCESS,
        payload: { sneakers, total },
    };
};

export const getSneakerFailure = (errs) => {
    return {
        type: actionTypes.GET_SNEAKER_FAILURE,
        payload: errs,
    };
};

export const getClothingStart = (pageSize, pageIndex) => {
    return {
        type: actionTypes.GET_CLOTHING_START,
        payload: { pageSize, pageIndex },
    };
};
export const getClothingSuccess = (clothings, total) => {
    return {
        type: actionTypes.GET_CLOTHING_SUCCESS,
        payload: { clothings, total },
    };
};
export const getClothingFailure = (err) => {
    return {
        type: actionTypes.GET_CLOTHING_FAILURE,
        payload: err,
    };
};

export const getAdminStart = (pageSize, pageIndex) => {
    return {
        type: actionTypes.GET_ADMIN_START,
        payload: { pageSize, pageIndex },
    };
};

export const getAdminSuccess = (adminProducts, total) => {
    return {
        type: actionTypes.GET_ADMIN_SUCCESS,
        payload: { adminProducts, total },
    };
};

export const getAdminFailure = (err) => {
    return {
        type: actionTypes.GET_ADMIN_FAILURE,
        payload: err,
    };
};

export const getCateStart = () => {
    return {
        type: actionTypes.GET_CATE_START,
    };
};

export const getCateSuccess = (categories) => {
    return {
        type: actionTypes.GET_CATE_SUCCESS,
        payload: categories,
    };
};
export const getCateFailure = (err) => {
    return {
        type: actionTypes.GET_CATE_FAILURE,
        payload: err,
    };
};

export const createAdminStart = (newProduct) => {
    return {
        type: actionTypes.CREATE_ADMIN_START,
        payload: newProduct,
    };
};

export const createAdminSuccess = (newAdminProduct) => {
    return {
        type: actionTypes.CREATE_ADMIN_SUCCESS,
        payload: newAdminProduct,
    };
};

export const createAdminFailure = (error) => {
    return {
        type: actionTypes.CREATE_ADMIN_FAILURE,
        payload: error,
    };
};

export const getSneakerDetailStart = () => {
    return {
        type: actionTypes.GET_SNEAKER_DETAIL_START,
    };
};
export const getSneakerDetailSuccess = (sneakerDetail) => {
    return {
        type: actionTypes.GET_SNEAKER_DETAIL_SUCCESS,
        payload: sneakerDetail,
    };
};

export const getSneakerDetailFailure = (err) => {
    return {
        type: actionTypes.GET_SNEAKER_DETAIL_FAILURE,
        payload: err,
    };
};

export const clearProductDetail = () => (dispatch) => {
    dispatch({ type: actionTypes.CLEAR_PRODUCT_DETAIL });
};
