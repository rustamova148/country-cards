import React from 'react'

const SingleCard = ({title,desc,img}) => {
  return (
  <div className="card" style={{ width: "18rem" }}>
  <img src={img} width={40} height={180} className="card-img-top" alt="country" />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">
      {desc}
    </p>
    <a href="." className="btn btn-primary">
      Go somewhere
    </a>
  </div>
  </div>
  )
}

export default SingleCard