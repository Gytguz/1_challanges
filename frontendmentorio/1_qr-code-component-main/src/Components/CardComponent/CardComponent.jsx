import React from 'react'
import qrCodeImg from '../../Assets/Images/image-qr-code.png'

const CardComponent = () => {
  return (
    <div className='card-parent'>
      <img src={qrCodeImg} alt="QR code" className='qrQodeImg' /> 
      <div className='text-box'>
        <h1>Improve your front-end skills by building projects</h1>
        <p>Scan the QR code to visi Frontend Mentor and take your coding skills to the next level</p>  
      </div> 
    </div>
  )
}

export default CardComponent;