import React from 'react'
import {RiNumber0, RiNumber3} from 'react-icons/ri'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

function Category() {
  return (
    <List>
        <SLink to={'/captures/'}>
            <h3>Top</h3>
            <RiNumber3 />
            <RiNumber0 />
        </SLink>
    </List>
  )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
`
const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 2rem;
    text-decoration: none;
    background: linear-gradient(35deg, #494949, #313131);
    width: 9.6rem;
    height: 9.6rem;
    cursor: pointer;
    transform: scale(0.8);

    h3 {
        color: white;
        font-size: 2.4rem;
        margin-bottom: .5rem;
        margin-top: 0rem;
    }
    svg { 
        color: white;
        font-size: 2.4rem;
    }
    &.active {
        background: linear-gradient(ro right, #f27121, #e94057);

        svg{ 
            color: white;
        }
        h4 { 
            color: white;
        }
    }
`

export default Category