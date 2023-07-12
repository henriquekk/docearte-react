import React from 'react'
import './NaoEncontrada.css'
import Button from 'components/Button'
import { Link } from 'react-router-dom'


export default function NaoEncontrada() {
  return (
    <>
      <section className='nao-encontrado'>
        <h1>Ops!</h1>
        <p>O conteúdo que você procura não foi encontrado!</p>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Button>
            Retornar ao inicio
          </Button>
        </Link>
      </section>
    </>
  )
}

