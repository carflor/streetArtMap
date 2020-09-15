import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useQuery, gql } from '@apollo/client'
import { useDispatch } from 'react-redux'
import { addData, login } from '../../actions/actions'
import Button from '../../UIComponents/Button/Button'
import Input from '../../UIComponents/Input/Input'
import './LoginPage.css'

const LoginPage = ({
  setIsLoggedIn,
  isLoggedIn,
  currentUser,
  setCurrentUser,
}) => {
  const dispatch = useDispatch()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [credentialsError, setCredentialsError] = useState(false)
  //eslint-disable-next-line
  const [artData, setArtData] = useState([])
  const ART_FETCH = gql`
    query {
      streetArts {
        id
        latitude
        longitude
        address
        city
        state
        zipcode
        imageUrls
        description
        artistName
        artName
        instagramHandle
        favorite
        visited
        createdAt
        updatedAt
        userId
      }
    }
  `
  const { loading, error, data } = useQuery(ART_FETCH)

  const verifyUser = () => {
    if (username === 'edignot' && password === 'edignot') {
      setIsLoggedIn(true)
      dispatch(login(username))
      getArt()
    } else {
      setCredentialsError(true)
    }
  }

  const getArt = () => {
    if (data) {
      const parsedData = data.streetArts.map((item) => {
        const images = JSON.parse(item.imageUrls)
        return {
          ...item,
          images,
        }
      })
      dispatch(addData(parsedData))
      setArtData(parsedData)
    } else if (loading) {
      return <p>Loading...</p>
    } else if (error) {
      console.log(error)
    }
  }

  return (
    <section className='login-page'>
      <section className='login-container'>
        <h1 className='login-title'>Street | ART | Walk</h1>
        <section className='user-validation'>
          <Input
            onChange={(e) => setUsername(e.target.value)}
            type='text'
            placeholder='Username...'
            label='username'
            id='username'
          ></Input>
          <Input
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            placeholder='Password...'
            label='password'
            id='password'
          ></Input>
          {credentialsError && (
            <p className='credentials-error'>
              Please Enter Valid Username and Password
            </p>
          )}
          <Button
            onClick={() => verifyUser()}
            type='submit'
            to={currentUser.name ? '/explore' : '/'}
          >
            LOG IN
          </Button>
        </section>
        <p>Don't have an account?</p>
        <Button>SIGN UP</Button>
      </section>
    </section>
  )
}

export default LoginPage

LoginPage.propTypes = {
  isLoggedIn: PropTypes.bool,
  setIsLoggedIn: PropTypes.func,
  currentUser: PropTypes.object,
  setCurrentUser: PropTypes.func,
}
