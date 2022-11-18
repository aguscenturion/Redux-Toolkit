import React, { useState, useEffect } from 'react'
import { 
  MDBCard,
  MDBCardBody, 
  MDBInput, 
  MDBCardFooter, 
  MDBValidation, 
  MDBBtn, 
  MDBIcon,
  MDBValidationItem, 
  MDBSpinner
} from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import { login } from '../redux/features/authSlice';

const initialState = {
  dni: "",
  contrasenia: ""
}

const Login = () => {
  const [formValue, setFormValue] = useState(initialState)
  const { loading, error } = useSelector((state) => ({...state.auth}))
  //se desestructura los valores del formulario
  const { dni, contrasenia } = formValue;
  //almaceno la referencia de useDispatch en una variable
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  useEffect(() => {
    error && toast.error(error)

  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(dni && contrasenia){
      dispatch(login({ formValue, navigate, toast }))
    }
  };
  const onInputChange = (e) => {
    let {name, value} = e.target;
    setFormValue({ ...formValue, [name]: value})
  };

  return (
    <div style={{
      margin: "auto", 
      padding: "15px", 
      maxWidth: "450px", 
      alignContent: "center", 
      marginTop: "120px",
      }}
    >
      <MDBCard alignment="center">
        <MDBIcon fas icon= "user-circle" className= "fa-2x" />
        <h5>Sign In</h5>
        <MDBCardBody>
          <MDBValidation onSubmit={handleSubmit} isValidated className="row g-3">
            <MDBValidationItem feedback='El Usuario es Obligatorio' invalid className="col.md-12">
                <MDBInput 
                label="Usuario"
                type="string"
                value={dni}
                name="dni"
                onChange={onInputChange}
                required
                /> 
            </MDBValidationItem>  
            <MDBValidationItem feedback='La contraseña es Obligatoria' invalid className="col.md-12">
                <MDBInput 
                label="Contraseña"
                type="password"
                value={contrasenia}
                name="contrasenia"
                onChange={onInputChange}
                required
                />
            </MDBValidationItem>  
            <div className="col-12">
              <MDBBtn style={{ width: "100%" }} className="mt-2">
                {loading && (
                  <MDBSpinner
                  size="sm"
                  role="status"
                  tag="span"
                  className="me-2"
                  />
                )}
                Ingresar
              </MDBBtn>
            </div>
          </MDBValidation>
        </MDBCardBody>
        <MDBCardFooter>
          <Link to= "/register">
          <p>¿Olvidaste tu contraseña o sos un usuario nuevo?</p>
          </Link>
        </MDBCardFooter>
      </MDBCard>
    </div>
  )
}

export default Login