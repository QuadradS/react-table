import {
    ITEM_TABLE_DATA_REQUEST,
    ITEM_TABLE_DATA_SUCCESS,
    ITEM_TABLE_DATA_FAIL,
    SELECT_ITEM,
    SELECT_ALL,
    RESELECT_ALL,
    ON_GLOBAL_SELECT
} from '../constants/itemTable'

let initialItemTableState = {
    items: [],
    itemsRequesting: false,
    itemsFail: '',
    selectedItems: [],
    globalSelectState:false
};

export function itemTable(state, action) {
    if (typeof state === 'undefined') {
        return initialItemTableState
    }
    switch (action.type) {
        case ITEM_TABLE_DATA_REQUEST:
            return Object.assign({}, state, {
                itemsRequesting: true
            });
        case ITEM_TABLE_DATA_SUCCESS:
            return Object.assign({}, state, {
                itemsRequesting: false,
                items: action.items
            });
        case ITEM_TABLE_DATA_FAIL:
            return Object.assign({}, state, {
                itemsRequesting: false,
                items: [],
                error: action.error
            });
        case SELECT_ITEM:
            return Object.assign({}, state, {
                selectedItems: state.items.filter((item) => item.id === action.id),
                items: state.items.map((item) => {
                    if (item.id === action.id) {
                        item.selected = !item.selected;
                        return item
                    }
                    return item
                })
            });
        case SELECT_ALL:
            return Object.assign({}, state, {
                items: state.items.map((item) => {
                    item.selected = true;
                    return item
                })
            });

        case RESELECT_ALL:
            return Object.assign({}, state, {
                items: state.items.map((item) => {
                    item.selected = false;
                    return item
                })
            });
        case ON_GLOBAL_SELECT:
            return Object.assign({}, state, {
                globalSelectState:!action.state
            });
    }

    return state
}