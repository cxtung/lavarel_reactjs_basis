import React, { useEffect, useState } from 'react'
import CategoryMenu from './CategoryMenu'
import ProductBox from '../../components/ProductBox'
import Loading from '../../components/Loading'
import { categoryApi } from '../../Api/categoryApi'
import { productApi } from '../../Api/productApi'
import { useParams } from 'react-router-dom'
import Paginate from '../../components/Paginate'
import Filter from './Filter'


export default function ProductList() {
    var [categories, setCategories] = useState({})
    var [products, setProducts] = useState({})
    var [loading, setLoading] = useState(true);
    var { pageNum } = useParams()
    var [totalPage, setTotalPage] = useState(1)
    var [filterkey, setFilterkey] = useState('')
    var [maxPrice, setMaxPrice] = useState(null);
    var [category, setCategory] = useState(null);
    const handleFilterByName = (e) => {
        setFilterkey(e.target.value)
    }
    const handleFilterByMaxPrice = (e) => {
        setMaxPrice(e.target.value);
    };
    const handleFilterByCategory = (e) => {
        if (e.target.innerText === 'All categories') setCategory(null)
        else setCategory(e.target.innerText);

    };
    var params = {
        populate: '*',
        // 'pagination[pageSize]': 12,
        // 'pagination[page]': pageNum ? pageNum : 1,
        // 'filters[productName][$contains]': filterkey ? filterkey : null
        pagination: {
            page: pageNum ? pageNum : 1,
            pageSize: 4,
        },
        filters: {
            productName: {
                $contains: filterkey ? filterkey : null,
            },
            price: {
                $lt: maxPrice ? maxPrice : null,
            },
            category: {
                categoryName: {
                    $eq: category ? category : null,
                },
            },
        }
    }


    var myView1 = loading === true ? <Loading /> : <CategoryMenu categories={categories} handleFilterByCategory={handleFilterByCategory} />
    var myView2 = loading === true ? <Loading /> : <ProductBox products={products} />
    useEffect(() => {
        const fetchData = async () => {
            var response1 = await categoryApi.getAll();
            var response2 = await productApi.getAll(params);
            console.log(response2)
            setCategories(response1.data.data)
            setProducts(response2.data.data)
            setTotalPage(response2.data.meta.pagination.pageCount);
            setLoading(false);
        };
        fetchData()
    }
        , [pageNum, filterkey, maxPrice, category])
    return (
        <div className="row">
            <div id="sidebar" className="span3">
                {myView1}
            </div>
            <div className="span9">
                <Filter handleFilterByName={handleFilterByName} handleFilterByMaxPrice={handleFilterByMaxPrice} />
                {myView2}
                <Paginate totalPage={totalPage} currentPage={pageNum ? pageNum : 1} basePath='http://localhost:3000/product/page/' />
            </div>
        </div>

    )
}