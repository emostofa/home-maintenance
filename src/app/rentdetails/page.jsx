"use client";
import Navbar from '@/Components/Navbar'
import UserTable from '@/Components/UserTable';
import React from 'react'

export default function RentDetails() {
  return (
    <>
    <Navbar></Navbar>
    <div className='mt-20'>
    <div className="overflow-x-auto">
  <table className="table table-xs">
    <thead>
      <tr>
        <th></th> 
        <th>Month</th> 
        <th>Total Rent</th> 
        <th>Rent of Brothers</th> 
        <th>Rent of Sisters</th> 
        <th>Date</th> 
        <th>More Details
        </th>
      </tr>
    </thead> 
    <tbody>
      <UserTable></UserTable>
      </tbody>
      
  </table>
</div>
    </div>
    {/* {articles.map((element) => (
                    <div className="col-md-4" key={element.url}>
                      <Newsitem
                        title={element.title === null ? 'Not available' : element.title}
                        description={element.description === null ? 'Not available!' : element.description}
                        imgUrl={element.urlToImage === null ? imgError : element.urlToImage}
                        url={element.url}
                        readMore={element.url}
                      />
                    </div>
                  ))} */}
    </>
  )
}
