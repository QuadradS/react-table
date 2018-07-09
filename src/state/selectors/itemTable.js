import {createSelector} from 'reselect';

const items = (state) => state.itemTable.items;
export const getSourceItems = createSelector(
    items,
    (items) => items
);

export const getTableItems = createSelector(
    items,
    (items) => (
        items[0] ? (
            Object.keys(items[0]).map((i, key) => ({
                id: key,
                rowId: 1,
                items: items.map((item, key) => item[i])
            }))
        ) : ([])
    )
);

export const getItemsKeys = createSelector(
    items,
    (items) => items[0] ? Object.keys(items[0]) : []
);