import React from 'react'

export default function Data() {

    const datas = [
        {
            name: '카페이름1',
            address: '주소1'
        },
        {
            name: '카페이름2',
            address: '주소2'
        },
        {
            name: '카페이름3',
            address: '주소4'
        },
        {
            name: '카페이름4',
            address: '주소5'
        },
        {
            name: '카페이름5',
            address: '주소5'
        },
    ]

  return (
    <div >
         {datas.map((el,index)=>{
          return (
            <div className='contents-box' key={index}>
              <h2>{el.name}</h2>
              <p>{el.address}</p>
            </div>
          )
        })}
    </div>
  )
}
