import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <div className="main-nav">
        <div className="firstnav">
             <a href="">Aarchi</a>   
        </div>
         <div class="secondnav">
           <nav>
             <a href="">HOME</a>
             <a href="">ABOUT</a>
             <a href="">SERVICES</a>
             <a href="">WORK</a>
             <a href="">BLOG</a>
             <a href="">DROP-DOWN</a>
             <a href="">CONTACT</a>
           </nav>
         </div>
       </div>
         <div>
           <img src="https://img.freepik.com/free-photo/flat-lay-black-background-with-laptop-coffee-cup-calculator-top-view_169016-35412.jpg?w=996&t=st=1717477721~exp=1717478321~hmac=4e4dff79294cfe4c6abe1c88fa9fcc4083cd834e4967b280f6563a31da022e03" alt="" width={'100%'}/>
         </div> 
         <div className="mainabout">  
          <div className="submainabout">
            <div className="firstabout">
              <div classname="imageabout">
                <div>
                 <img src="https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/e48cd8b6-d0dd-4b60-8ef6-ad3aae616a33/38776c76-b716-4cc7-ad29-3b3c6ed41f15.png" alt="" />
                </div>
                <div classname="firstspanabout">
                <span class="span-tag-about">Name:</span>
                <span> Aarchi Khandelwal</span><br>
                <span class="span-tag-about">Email:</span>
                <span>aarchikhandelwal12@gmail.com</span><br>
                <span class="span-tag-about">Profile:</span>
                <span>Fullstack Developer</span><br>
                <span class="span-tag-about">Phone:</span>
                <span> xxxxxxxxxx</span><br>
                </div>
                 <div>
               <div className="skillsabout"></div>
               </div>
             <div className="secondabout"></div>
               <span>About me</span>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis earum, facilis obcaecati tempore, rerum repudiandae fugit magnam dolorum consequuntur voluptatibus distinctio possimus, nisi commodi fugiat officia aut nihil itaque optio.</p>
               <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi dolore amet excepturi! Reiciendis beatae sit omnis explicabo recusandae, quae expedita ut et debitis illum illo culpa dolore officiis quaerat repellat!</p>
           </div>
          </div>
   </>
  )
}

export default App
