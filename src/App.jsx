import axios from "axios";
import React, { useState } from "react"
import './App.css'

function App() {
  const [loading, setLoading]= useState(false);


  const SendMessage = (event)=>{
    setLoading(true);
    event.preventDefault();
  const token = "7569147949:AAH8nAUUuf5b8TqEbQu2SZ_OBNr2UlzPyoI";
  const chat_id = 7439893038;
  const url = `https://api.telegram.org/bot${token}/sendMessage`;


  const name = document.getElementById("name").value;
  const surename = document.getElementById("surename").value;
  const email = document.getElementById("email").value;
  const age = document.getElementById("age").value;
  const text = `Ism: ${name}\nFamilia: ${surename}\nEmail: ${email}\nAge: ${age}`;
  axios({
    url:url,
    method: 'POST',
    data:{
      "chat_id":chat_id,
      "text" :text,
    }

  }).then((res)=>{
    document.getElementById("myForm").reset();
    alert("Muvofaqqiyatli yuborildi")
  }).catch((error)=>{
    console.log("Yuborishda xatolik bor", error);
  }).finally(()=>{
    setLoading(false)
  })

}

  return (
    <div>


      <form  id='myForm' onSubmit={SendMessage}>
        <input type="text" id='name' placeholder="Name" />
        <input type="text" id="surename" placeholder="Surname" />
        <input type="number" id="age" placeholder="Age"/>
        <input type="email" id="email" placeholder="Email" />
        <button type="submit" loading={loading}>{loading? "Yuborilmoqda..." : "Yuborish"}</button>
      </form>
    </div>
  )
}

export default App
