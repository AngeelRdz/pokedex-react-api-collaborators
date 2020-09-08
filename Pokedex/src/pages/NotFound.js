import React, {Fragment} from 'react'

function NotFound() {
  return (
      <Fragment>
        <div className="container">
            <div className="row text-center">
                <div className="col">
                  <img className="h-50 img-fluid" src="https://res.cloudinary.com/dioxkbk6g/image/upload/v1569214802/Pokeapi/error404_ybmnko.png" alt="Error 404"/>
                  <h3 className="text-white">La página que estás buscando no existe.</h3>
                </div>
            </div>
        </div>
      </Fragment>
  )
}

export default NotFound