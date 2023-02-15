import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import filtericon from "../Products/productimgs/filter.svg"
import "./Products.scss"
import { useParams } from 'react-router-dom'
//pagination
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
//pagination
import Product from '../../components/productscomponents/Product'
import { getPagesCategory, getFiltered } from '../../API/getproducts'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const brends = ["apple", "samsung", "xiaomi", "huawei"]



const Products = () => {
    const params = useParams();
    const { register} = useForm()
    const id = params.id
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState(null)
    const [meta, setMeta] = useState(null)
    const [page, setPage] = useState(1);
    const [searchparams, setSeacrhparams] = useSearchParams({ sortBy: "created_at" })
    const sort = searchparams.get("sortBy")
    const [filter, setFilter] = useState(searchparams.get(["filter"])?.split(',') || [])
    const [filterOpen, setFilterOpen] = useState(false)
    const [expanded, setExpanded] = React.useState(false);


    const handleAccordion = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };


    const handleChange = (event, value) => {
        setPage(value);
    };

    function checkHandler(e) {
        const name = e.target.value;
        let result;
        if (e.target.checked && !filter.includes(name)) {
            result = [...filter, e.target.value];
        }
        else {
            result = filter.filter((e) => (e !== name));
        }
        searchparams.set('filter', result);
        setSeacrhparams(searchparams);
        setFilter(result);
        setFilterOpen(false);
    }


    function sortHandler(e) {
        searchparams.set("sortBy", e.target.value)
        setSeacrhparams(searchparams)
    }
    useEffect(() => {
        if (filter.length === 0) {
            getPagesCategory(id, page, sort)
                .then((categories) => {
                    setProducts(categories.data)
                    setMeta(categories.meta)
                    setLoading(false)
                })
        }
    }, [id, page, sort])

    useEffect(() => {
        if (filter.length !== 0) {
            setLoading(true);
            getFiltered(filter.toString(), page, sort, id)
                .then((p) => {
           
                    setProducts(p.data)
                    setMeta(p.meta)
                    setLoading(false)
                })
        }
    }, [id, page, searchparams, filter, sort]);

    useEffect(() => {
        if (!searchparams.get('filter')) {
            searchparams.delete('filter');
            searchparams.set('sortBy', 'created_at');
            setSeacrhparams(searchparams);
            setFilter([]);
        }
    }, [id])

    return (
        <div className='_container'>
            <div className='filter '>
                <div className='sort_btn'>
                        <select value={sort} className='select-option' name='Sıralama' onChange={sortHandler}>
                            <option value="created_at" style={{width:"11rem"}}>Ən yenilər</option>
                            <option value="price" style={{width:"11rem"}}>Qiymətə görə</option>
                            <option value="name" style={{width:"11rem"}}>Ada görə</option>
                        </select>
                </div>
                <div className='filter-side'>
                    <div className='filter_btn' onClick={() => setFilterOpen((prev) => !prev)}>
                        <img src={filtericon} />
                        <h3>Filterləmələr</h3>
                    </div>
                    <div className='filtering' style={{ display: filterOpen ? 'block' : 'none' }}  >
                        <Accordion className='brend' expanded={expanded === 'panel1'} onChange={handleAccordion('panel1')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                    Brend
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <span className='brend-category'>
                                        {
                                            brends.map((el, idx) => {
                                                return <span className='brend-item' key={idx}>
                                                    <label>
                                                        <input style={{ zoom: "1.5" }} onChange={checkHandler} checked={filter.includes(el)} type="checkbox" id='checkbox' value={el} />
                                                        <label>{el}</label>
                                                    </label>
                                                </span>
                                            })
                                        }
                                    </span>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>


                </div>
            </div>
            {loading ? <div className='lds-heart'><div></div></div>
            
            
            : <div className='products'>
                <div className='product'>
                    <div className='product-length'>
                        <p>{products?.length} məhsul tapıldı</p>
                    </div>
                    {
                        products?.map((el, idx) => {
                            return <Link key={el.id} to={`/product/${el.id}`}><Product el={el} /></Link>
                        })}
                </div>
            </div>}

            {!loading && <Stack spacing={2}>
                <Pagination count={meta?.pagination?.total_pages} page={page} onChange={handleChange} />
            </Stack>}

        </div>

    )
}

export default Products