import { useState } from "react";
import axios from 'axios'
import { useNavigate, Link } from "react-router-dom";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
//logic goes here
 const [email,setEmail]=useState("")
  const [password,setPassword]= useState("")
  const [isModalOpen, setIsModalOpen] = useState(true); // Control modal visibility

  const navigate=useNavigate()



  function handleSubmit(e){
    e.preventDefault()
    axios.post('http://localhost:8000/admin-login',{email,password},{withCredentials: true})
    // .then((res)=>{
    //   console.log(res);
     
    //   toast.success(res.data.message)
    //   setTimeout(()=>{
    //     navigate("/")
    //   },2000)
     
      
     
      
    // })

    .then((response) => {
      console.log(response.data.message);
      navigate("/admin");
    })
    .catch((error) => {
      if (error.response) {
      toast.error(error.response.data.error);
      } else {
        console.error("Login failed");
      }
    });


    

  }
 


  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal when close button is clicked
  };

  if (!isModalOpen) return null; // Don't render the modal if it's closed


  return (
     <>
          <div
      className="modal modal-sheet position-static d-block p-4 py-md-5"
      tabIndex="-1"
      role="dialog"
      id="modalSignin"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content rounded-4 shadow">
          <div className="modal-header p-5 pb-4 border-bottom-0">
            <h1 className="fw-bold mb-0 fs-2">Login</h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={handleCloseModal} // Close modal on click
            ></button>
          </div>

          <div className="modal-body p-5 pt-0">
            <form onSubmit={handleSubmit}>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control rounded-3"
                  id="floatingInput"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control rounded-3"
                  id="floatingPassword"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <button
                className="w-100 mb-2 btn btn-lg rounded-3 btn-primary"
                type="submit"
              >
                Login
              </button>
              <hr className="my-4" />
              <small className="text-body-secondary">
                Don't have an account?,{" "}
                <Link to="/admin/register">Register</Link> now.
              </small>
            </form>
          </div>
        </div>
      </div>
    </div>
<ToastContainer position="top-center"/>
     </>
     );
}

export default Login;