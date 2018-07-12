import {fetchData} from '../../server/'
import {
    ITEM_TABLE_DATA_REQUEST,
    ITEM_TABLE_DATA_SUCCESS,
    ITEM_TABLE_DATA_FAIL,
    SELECT_ITEM,
    SELECT_ALL,
    RESELECT_ALL,
    ON_GLOBAL_SELECT
} from '../constants/itemTable'

function getItemsRequest() {
    return {
        type: ITEM_TABLE_DATA_REQUEST
    }
}

function getItemsSuccess(items) {
    return {
        type: ITEM_TABLE_DATA_SUCCESS,
        items
    }
}

function getItemsFail(error) {
    return {
        type: ITEM_TABLE_DATA_FAIL,
        error
    }
}

export const getItems = () => {
    return (dispatch) => {
        dispatch(getItemsRequest());
        fetchData()
            .then((items) => dispatch(getItemsSuccess(items)))
            .catch((error) => dispatch(getItemsFail(error)))
    }
};

export const selectItem = (id) => {
    return {
        type: SELECT_ITEM,
        id
    }
};

export const selectAll = () => {
    return {
        type: SELECT_ALL
    }
};

export const reSelectAll = () => {
    return {
        type: RESELECT_ALL
    }
};

export const globalSelect = (state) => {
    return {
        type: ON_GLOBAL_SELECT,
        state
    }
};