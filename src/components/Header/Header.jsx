import React, { useEffect, useState } from 'react'
import "../Header/Header.scss"
import logo from '../Header/headerIcons/logo.svg'
import search from "../Header/headerIcons/search.svg"
import person from "./headerIcons/person.svg"
import basketicon from "./headerIcons/basket.svg"
import fav from "./headerIcons/fav.svg"
import { categoryName } from '../../API/getproducts'
import { Link, NavLink } from 'react-router-dom'
import { searchInput, searchproducts } from '../../API/getproducts'
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";


const Header = () => {
  const [categoryname, setcategoryName] = useState([])
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState([]);
  const login = useSelector((state) => state.auth.isLogin)
  const unique = useSelector((state) => state.uniquenumber.basketnumber)
  const [toggle, setToggle] = useState(false)
  const navigate = useNavigate();
  const history = localStorage.getItem("history") ? JSON.parse(localStorage.getItem("history")) : []

  useEffect(() => {
    const searchData = setTimeout(() => {
      if (query.length > 0) {
        searchInput(String(query))
          .then((res) => setResults(res.data))
        history.push(query)
        localStorage.setItem("history", JSON.stringify(history.filter((el, idx) => history.indexOf(el) === idx)))
      }
    }, 2500);
    return () => clearTimeout(searchData)
  }, [query]);


  function onChangeText(e) {
    setQuery(e.target.value)
  }



  useEffect(() => {
    categoryName()
      .then((res) => setcategoryName((prev) => [...prev, res.data]))
  }, [])


  useEffect(() => {
    if (query.length === 0) {
      setQuery("")
      setResults([])
    }
  }, [query])

  return (
    <div className='header-wrapper'>
      <div className='_container'>
        <div className='header'>
          <div className='left-menu'>


            <div className="Navbar">
              <div className={`nav-items ${isOpen && "open"}`}>
                {
                  categoryname[0]?.map((el, idx) => {
                    if (el.name != "Apple" && el.name != "Xiaomi" && el.name != "Huawei" && el.name != "Samsung") {

                      return <Link to={`/${el.slug}`} className='list' onClick={() => setIsOpen(!isOpen)} key={el.id}>{el.name}</Link>
                    }
                  })
                }
              </div>
              <div
                className={`nav-toggle ${isOpen && "open"}`}
                onClick={() => setIsOpen(!isOpen)}
              >
                <div className="bar"></div>
              </div>
            </div>
            <div className='logo'>
              <NavLink to="/">
                <img src={logo} />
                <p>Tello</p>
              </NavLink>
            </div>
          </div>
          {
            !isOpen &&
            <div className='user'>
              <NavLink to={login ? '/profile' : '/login'} >
                <img src={person} />
              </NavLink>
              <a>
                <img src={fav} />
              </a>
              <div className='basket'>
                <Link to='/basket'> <img src={basketicon} /></Link>
                <button>{unique}</button>
              </div>
            </div>
          }

        </div>
        <div className='search-bar'>
          <div className='search' onBlur={() => setToggle(false)}  >
            <img style={{ width: "1rem", height: "1rem" }} src={search} />
            <form>
              <input type="text" placeholder='Axtarış..' value={query} onFocus={() => setToggle(prev => !prev)} onChange={onChangeText} />
            </form>
          </div>
          {toggle &&
            <div className='result'>
              <div className='search-history'>
                {
                  history?.length > 0 &&
                  history?.map((el, idx) => {
                    if (idx === history.length - 1 || idx === history.length - 2 || idx === history.length - 3 || idx === history.length - 4 || idx === history.length - 5) {
                      return <div className='history cursor-pointer ' key={idx} onMouseDownCapture={() => setQuery(el)}> {el} </div>
                    }
                  })

                }
              </div>
              <ul>
                <h3>Nəticələr</h3>
                {
                  results?.length < 0
                   ?
                    <h1>Heç bir nəticə tapılmadı.</h1>
                    :
                    results?.map((el) => {
                      return <a onMouseDownCapture={() => { navigate(`/product/${el.id}`); setQuery("") }} key={el.id} className='search-list cursor-pointer gap-4'>
                        <img style={{ width: "64px" }} src={el.image.url} />
                        <div className="flex flex-col">
                          <p>{el.name}</p>
                          <p>{el.price.raw}₼</p>
                        </div>
                      </a>
                    })

                }
              </ul>
            </div>
          }
        </div>




        <nav className='menu-bar'>
          <ul className='navbar'>
            {
              categoryname[0]?.map((el, idx) => {
                if (el.name != "Apple" && el.name != "Xiaomi" && el.name != "Huawei" && el.name != "Samsung") {

                  return <li className='nav-list' key={idx}>
                    <NavLink to={`/${el.slug}`} className='list'>{el.name}</NavLink>
                  </li>
                }
              })
            }
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header