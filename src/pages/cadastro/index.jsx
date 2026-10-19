import React, { useState } from 'react'
import {toast, ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import "./cadastroTime.css"

export default function Index() {

  const [formData, setFormData] = useState({
    nome: "",
    jogo: ""
  });


  const handleChange = (e) => {
    const { name, value } = e.target; // alvo

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(formData.nome === "" || formData.jogo === ""){
      toast.error("Preencha todos os campos")
      return false;
    }

    fetch("https://6ad5fdadf71f154ac4864986.mockapi.io/Times", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    }).then((response) => response.json())
      .then((data) => {
        console.log("Time cadastrado com sucesso:", data);

        toast.success("Time cadastrado com sucesso")
        setFormData({
          nome: "",
          jogo: ""
        });
      });
  }

  return (
    <main className='container'>
      <h1>Cadastro de times</h1>
      <form onSubmit={handleSubmit}>

        <article className='form-control'>
          <label htmlFor="nome">Nome do Time</label>
          <input type="text" name='nome' value={formData.nome} onChange={handleChange} />
        </article>

        <article className='form-control'>
          <label htmlFor="jogo">Jogo</label>
          <input type="text" name='jogo' value={formData.jogo} onChange={handleChange} />
        </article>

        <button type='submit'>Cadastrar</button>

        <ToastContainer />
      </form>
    </main>
  );
}