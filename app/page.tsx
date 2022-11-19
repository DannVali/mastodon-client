'use client'
import Image from 'next/image'
import styles from './page.module.css'
import LoginBtn from '../components/login-btn'

export default function Home() {
  return (
      <>
        <h1>Auth testing</h1>
        <LoginBtn />
      </>
  )
}
