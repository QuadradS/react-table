import ItemTable from '../../components/ItemTable/ItemsTable'
import {connect} from 'react-redux'
import {getTableItems,getItemsKeys,getSourceItems} from '../../state/selectors/itemTable'
import {getItems,selectItem,selectAll,reSelectAll,globalSelect} from '../../state/actions/itemTable'

export function mapStateToProps(state) {
    console.log('state', state);
    return {
        sourceItems: getSourceItems(state),
        items: getTableItems(state),
        isItemsFetching: state.itemTable.itemsRequesting,
        itemsError: state.itemTable.error,
        keys: getItemsKeys(state),
        globalSelectState:state.itemTable.globalSelectState
    }
}

export function mapDispatchToProps(dispatch) {
    return {
        getItems: () => dispatch(getItems()),
        selectItem: (id) => dispatch(selectItem(id)),
        selectAll: () =>  dispatch(selectAll()),
        reSelectAll: () =>  dispatch(reSelectAll()),
        globalSelect: (state) =>  dispatch(globalSelect(state))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemTable)