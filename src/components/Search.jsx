import React, {useState} from 'react'
import styled from 'styled-components'
import {FaSearch} from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'

function Search() {

    const [input, setInput] = useState("")

    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        navigate('/searched/' + input)
    }

  return (
    <FormStyle onSubmit={submitHandler}>
        <FaSearch size="30px" color='white' />
        <input onChange={(e) => setInput(e.target.value)}
        type="text" value={input} placeholder="Search by id number"
        />
    </FormStyle>
  )
}

const FormStyle = styled.form`
        margin: 2rem 4rem;  
        position: relative;
    input{
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.5rem;
        color: white;
        padding: 1rem 5rem;
        left: 10%;
        border: none;
        border-radius: 1rem;
        outline: none;
        width: 100%;
    }
    svg{
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: white;
    }
`    

export default Search