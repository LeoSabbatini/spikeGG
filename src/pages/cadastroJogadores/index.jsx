import React, { useState } from 'react'
import {toast, ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css";

export default function CadastroJogador() {

  const [formData, setFormData] = useState({
    nome: "",
    time: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(formData.nome === "" || formData.time === ""){
      toast.error("Preencha todos os campos")
      return false;
    }

    fetch("http://localhost:8080/jogadores", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    }).then((response) => response.json())
      .then((data) => {
        console.log("Jogador cadastrado com sucesso:", data);

        toast.success("Jogador cadastrado com sucesso")
        setFormData({
          nome: "",
          time: ""
        });
      })
      .catch((error) => console.log(error));
  }

  return (
    <main className='container'>
      <h1>Cadastro de Jogadores</h1>
      <form onSubmit={handleSubmit}>

        <article className='form-control'>
          <label htmlFor="nome">Nome do Jogador</label>
          <input type="text" name='nome' value={formData.nome} onChange={handleChange} />
        </article>

        <article className='form-control'>
          <label htmlFor="time">Time do Jogador</label>
          <input type="text" name='time' value={formData.time} onChange={handleChange} />
        </article>

        <button type='submit'>Cadastrar</button>

        <ToastContainer />
      </form>
    </main>
  );
}