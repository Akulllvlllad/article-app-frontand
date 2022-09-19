import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

import {setCategory, setOption, setSearch, setPage} from './redux/slices/FilterSlice'
import {addItem, clearItems, deleteAll, addOne, deleteOne} from './redux/slices/CartSlice'
import { fetchGoods, fetchOneGoods} from "./redux/slices/goodsSlice";
import { store } from './redux/store';


type AppDispatch = typeof store.dispatch
const useAppDispatch = () => useDispatch<AppDispatch>()
//====================================USE_ACTIONS================================================
const AllActions ={
  setCategory, 
  setOption, 
  setSearch, 
  setPage, 

  addItem, 
  
  clearItems,
  deleteAll, 
  addOne, 
  deleteOne,

  fetchOneGoods,
  fetchGoods
}

export const useActions = () => {
  
  const appDispatch = useAppDispatch()
  return bindActionCreators(AllActions, appDispatch)
}








