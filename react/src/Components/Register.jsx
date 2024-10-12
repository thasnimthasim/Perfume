import { useState } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

function Register() {
//logic goes here
  
const [username,setUsername]=useState("")
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
const [isModalOpen, setIsModalOpen] = useState(true); // Control modal visibility


const navigate = useNavigate()

async function handleSubmit(e)
{
  e.preventDefault()
  try{
  const res=await axios.post('http://localhost:8000/admin/register',{username,email,password})
    
      console.log(res);
      toast(res.data.message)
      setTimeout(()=>{
        navigate("/admin/login")
      },2000)
    }
    catch(error){
  toast(error.response.data.error)
  
      
    }
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
            <h1 className="fw-bold mb-0 fs-2">Sign up</h1>
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
                  type="text"
                  className="form-control rounded-3"
                  placeholder="Your name here"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="floatingInput">User Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
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
                Sign up
              </button>
              <hr className="my-4" />
              <small className="text-body-secondary">
                Already have an account?, <Link to="/admin/login">Login</Link>{" "}
                here.
              </small>
            </form>
            <ToastContainer position="top-center" />
          </div>
        </div>
      </div>
    </div>
    </>
    
     )
}

export default Register;
















// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from 'axios'

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
  


// function Register() {
// //logic goes here

// const [username,setUSername]=useState("")
// const [email,setEmail] =useState("")
// const [password,setPassword] = useState("")
// const [notification,setNotification] = useState("")

// const navigate =useNavigate()

// function handleSubmit(e){
//   e.preventDefault()
//   axios.post("http://localhost:3000/register",{username,email,password})
//       .then((data)=>{
//         setNotification(data.data.message)
//         toast(data.data.message)
      
        
//         setTimeout(()=>{
          
//           navigate("/login")
//         },2000)
//       })
//       .catch((error)=>{
//         console.log(error);
        
//       })
// }


//   return (
//      <>
//        <h1>Registration</h1>
   
//        <form onSubmit={handleSubmit}>
  
//   <div classNameName="mb-3">
//     <label htmlFor="exampleInputPassword1">User Name</label>
//     <input type="text"  value={username} classNameName="form-control" id="username" placeholder="username" 
//     onChange={(e)=>setUSername(e.target.value)}/>
//   </div>
   
//   <div classNameName="mb-3">
//     <label htmlFor="exampleInputPassword1">Email</label>
//     <input type="email"  value={email} classNameName="form-control" id="email" placeholder="email"
//      onChange={(e)=>setEmail(e.target.value)}/>
//   </div>
//   <div classNameName="mb-3">
//     <label htmlFor="exampleInputPassword1">Password</label>
//     <input type="password" value={password} classNameName="form-control" id="password" placeholder="Password"
//      onChange={(e)=>setPassword(e.target.value)}/>
//   </div>
 
//   <button type="submit" classNameName="btn btn-primary">Submit</button>
//   <p>{notification}</p>
// </form>
// <ToastContainer/>
//        </>
//   )

//        }
      
// export default Register;
       
     