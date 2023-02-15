import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { authActions } from '../../redux/actions/auth'


const Confirm = () => {
  const { getToken } = authActions
  const token = useParams().token
  const navigate = useNavigate();


  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getToken(token))
    navigate("/")
  }, [])



  return (
    <div>
      <div className='lds-heart'><div></div></div>
    </div>
  )
}

export default Confirm