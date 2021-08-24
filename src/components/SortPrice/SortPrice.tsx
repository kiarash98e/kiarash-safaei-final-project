import React,{useState} from 'react'
import {ORDER_BY_ASC,ORDER_BY_DESC,clearOrderBy,orderByAsc,orderByDesc} from '../../Action/ItemAction'
import {useSelector,useDispatch} from 'react-redux'
import { FaListUl } from 'react-icons/fa'


function SortPrice() {
    const dispatch = useDispatch()
    const [Value, setValue] = useState('')
    const sortProduct = useSelector((state:any) => state.products.Data)
        const orderByFilter = (sortProduct:any, type:any ) => {
            if(!type) return sortProduct
            if(type === 'asc') {
                return sortProduct.slice().sort((el1:any, el2:any) => el1.price - el2.price)
            } else if(type === 'desc') {
                return sortProduct.slice().sort((el1:any, el2:any) => el2.price - el1.price)
            }
        }
        console.log(orderByFilter(sortProduct,'desc'))
        const handleSort = (e:React.ChangeEvent<HTMLInputElement>) => {
            const val = e.target.value
            setValue(val)
            if(val === ORDER_BY_ASC) {
                dispatch(orderByAsc())
            } else if(val === ORDER_BY_DESC) {
                dispatch(orderByDesc())
            }
        }
        const removeFilter = () => {

            const buttons = document.getElementsByName('orderByPrice')
    
            buttons.forEach((el:any) => {
                el.checked = false
            })
    
            dispatch(clearOrderBy())
            setValue('')
        }
    console.log(Value)
    return (
        <>
            {
                true ? 
                <div className="d-flex p-3">
                    <p><FaListUl/> مرتب سازی براساس </p>
                    {
                        Value ? 
                        <h5>
                            <span onClick={removeFilter}>حذف فیلتر</span>
                        </h5>
                        :
                        <div className='row me-2'>
                            <div className="d-flex px-3">
                                <div className="input-sort ms-4">
                                    <input 
                                        type="radio" 
                                        name="orderByPrice" 
                                        id="asc"
                                        value={ORDER_BY_ASC}
                                        onChange={handleSort} 
                                        className='align-middle' 
                                    />
                                    <label htmlFor="asc" className='me-2'>ارزان ترین</label>
                                    <span></span>
                                </div>
                                <div className="input-sort ms-4">
                                    <input 
                                        type="radio"
                                        className='' 
                                        name="orderByPrice" 
                                        id="desc"
                                        value={ORDER_BY_DESC}
                                        onChange={handleSort} 
                                    />
                                    <label htmlFor="desc" className='me-2'>گران ترین</label>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    }
                </div>
                :
                <div></div>
            }
        </>
    )
}

export default SortPrice
