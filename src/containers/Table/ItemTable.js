import ItemTable from '../../components/ItemTable/ItemsTable'
import {connect} from 'react-redux'
import {getTableItems,getItemsKeys,getSourceItems} from '../../state/selectors/itemTable'
import {getItems,selectItem,selectAll} from '../../state/actions/itemTable'

export function mapStateToProps(state) {
    console.log('state', state)
    return {
        sourceItems: getSourceItems(state),
        items: getTableItems(state),
        isItemsFetching: state.itemTable.itemsRequesting,
        itemsError: state.itemTable.error,
        keys: getItemsKeys(state)
    }
}

export function mapDispatchToProps(dispatch) {
    return {
        getItems: () => dispatch(getItems()),
        selectItem: (id) => dispatch(selectItem(id)),
        selectAll: () =>  dispatch(selectAll())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemTable)