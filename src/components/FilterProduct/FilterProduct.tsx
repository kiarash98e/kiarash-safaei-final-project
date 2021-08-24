import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {setCheckboxFilter,removeCheckboxFilter} from '../../Action/Filter.'
import './FilterProduct.style.css'


function FilterProduct() {
    // const filterProduct = useSelector((state:any) => state.products.filterPrice)
    // const onChangeRangePrice = (e:React.ChangeEvent<HTMLInputElement>) => {
    //     filterProduct.pricerange = parseInt(e.currentTarget.value)
        
    //     console.log(filterProduct.pricerange)
    // }
    const dispatch = useDispatch()
    const productBrand = useSelector((state:any) => state.filters.Data
    .map((item:any) => item.brand)
    .reduce((initial: string | any,brand: any) => initial.includes(brand) ? initial : [...initial,brand],[])
    .sort((a:any, b:any) => {
        const textA = a.toUpperCase()
        const textB = b.toUpperCase()
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0
    }))
    console.log(productBrand)

    const filterCheck = useSelector((state:any) => {
        const {products,filters} = state
        return products.Data.filter((data:any) => {
            const searchText = (data.brand.toLowerCase() + " " + data.name.toLowerCase() ).includes(filters.name.toLowerCase().trim())

            if (filters.brand.length > 0 && filters.name.length === 0) {
                return filters.brand.includes(data.brand)
            } else if (filters.name.length !== 0 && filters.brand.length === 0) {
                return searchText
            } else if (filters.name.length > 0 && filters.name.length > 0) {
                return filters.brand.includes(data.brand) && searchText
            } else {
                return data
            }
            }).sort((a:any, b:any) => {
                const textA = a.brand.toUpperCase()
                const textB = b.brand.toUpperCase()
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0
            })
        })
        console.log(filterCheck)
        const handleFilterBrand = (e:React.ChangeEvent<HTMLInputElement>) => {
            const value = e.target.value
        
            if (e.target.checked) {
              dispatch(setCheckboxFilter(value))
            } else {
              dispatch(removeCheckboxFilter(value))
            }
          }
        
    
    return (
        <div>
            {/* <div className="row">
                <h6 className='my-4'>فیلتر بر اساس قیمت</h6>
                
                <input
                    className="slider"
                    id="pricerange"
                    type="range"
                    value={filterProduct.pricerange}
                    onChange={ (e) => onChangeRangePrice(e)}
                    min={filterProduct.min}
                    max={filterProduct.max}
                    step="1"
                />
                <div className="price-ranges">
                    <span>
                        {filterProduct.min} تومان
                    </span>
                    <span>
                        {filterProduct.max} تومان
                    </span>
                </div>
            </div> */}
            <div className="row px-3">
                <h6 className="my-4">فیلتر بر اساس برند</h6>
                {
                   productBrand && productBrand.map((item:any,i:number) => (
                       !!item && <div className="filter-list d-flex justify-content-between" key={i}>
                            <input type="checkbox" name={item} id={item} value={item} onChange={(e) => handleFilterBrand(e)} />
                            <label htmlFor={item}>{item}</label>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default FilterProduct


