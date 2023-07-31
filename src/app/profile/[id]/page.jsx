"use client";
import React from 'react'
import Navbar from '@/Components/Navbar'
export default function UserProfile({params}) {
  return (
    <>
    <Navbar></Navbar>
    <div>Profile of user {params.id}</div>
    </>
  )
}
