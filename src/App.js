import "./App.css"
//import "./retorant/style.css"


import { Component, useState } from "react";
import Slidebar from "./Youtubeclone/sidebar";
import Navbar from "./Youtubeclone/Navbar";
import Onclickslidebar from "./Youtubeclone/onclicksidebar";
import { Route,Routes} from  "react-router-dom"
import Homecontainer from "./Youtubeclone/Homeconatiner";
import { Ravbar } from "./router/Rounavbar";
import { Home } from "./router/Home";
import { About } from "./router/About";
import { Order } from "./router/paceorder";
import { Nomatch } from "./router/Nomatch";
import { Product } from "./router/product";
import { Featured } from "./router/featured";
import { Task } from "./router/task";
import { User } from "./router/uder";
import State from "./state/Example";
import Check from "./state/check";
const App = () =>  {
  const [vary,setvary] = useState(0)
   const change = (a) => 
   {
     setvary(a)
   }
  // const [additem,setAdditem] = useState([])
  // // constructor(props)
  // // {
  // //   super(props)
  // //   this.state = {
  // //    isregister: false,
  // //    name: null,
  // //    email: null,
  // //    password: null,
  // //    showpas: false,
  // //   }
  // // }
  // // registrationhandal = (event) => {
  // //   event.preventDefault();
    
  // //  const name = event.target.name.value;
  // // // console.log(name)
  // //  const email = event.target.email.value;
  // //  const password = event.target.password.value;
  // //  console.log(email)
  // //  this.setState({name,email,password, isregister:true,});

  // // }
  // // showpashand = () => {
  // //   this.setState({showpas : !this.state.showpas});
  // //   console.log(this.state)

  // // }
 
//    const addEvent = (name) => {
   
//      //alert("alkknqjdk")
//     setAdditem((predata)=>{
//         return [...predata,name];
//       })
//      // console.log(name)
//    }
//    const onDelete = (id) =>{
//        setAdditem((olddate) =>{
//          return olddate.filter((curdata,indx) => {
//            return indx !==id;
//        })
//      });
//    }

//    return (
//      <>
//       {
//         <Header></Header>
//       }
//       {
//          <Classnotes passnotes = {addEvent}></Classnotes>
//       }
//         {
        
//        <div className="alage">
//         { additem.map((val,index) => {
   
//    return (
//      <Notes 
//      key = {index}
//    id={index}
//     title={val.title}
//     content = {val.content}
//     deleteitem = {onDelete}
//     />
//   ) 
// })
// }
//        </div>
//     }
// </>)
//   // {
//   //     //  this.state.isregister ? (<Greet name={this.state.name} email={this.state.email}></Greet>) : (<Register submit={this.registrationhandal} showpas={this.state.showpas}
//   //     //  click={this.showpashand}></Register>)
       
//   //    //<Check></Check>
     
//   //    <Footer></Footer>
  
//   //    }
//  // return (
//  //      <>
//  //       <Resturant></Resturant>
//  //   </>
//  // );
return(
  <>

  {/* <Routes>
    <Route  path='/' element={<><Navbar/>
    <div className="flex">
    <Slidebar change={change} vary={vary}/>
     <Homecontainer></Homecontainer>
    </div>
     </>} />
     {/* <Route path="/onclicksidebar" element={<><Navbar/> <Onclickslidebar/></>} /> */}
     {/* <Ravbar></Ravbar> */}
   {/* <Routes>
     <Route path=":userId" element={<User></User>}/>
   <Route  path="/" element = {<Home></Home>}/>
   <Route path="/about" element= {<About></About>}/>
   <Route path="/paceorder" element={<Order></Order>}/>
   <Route path="*" element={<Nomatch></Nomatch>}/>
   <Route path="/product" element={<Product></Product>}>
     <Route index element={<Featured></Featured>}/>
     <Route path="featured" element={<Featured></Featured>}/>
     <Route path="task" element={<Task></Task>}/>
   </Route> */}

   {/* </Routes> */}
   <Check></Check>
  
  </>
)

 }


export default App;
