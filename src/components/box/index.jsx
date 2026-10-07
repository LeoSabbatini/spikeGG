import './box.css'
export default function Index(props) {
    console.log(props)
  return (
    <section className='container-box'>
      <img src={props.image} alt={props.title} />
      <h1 className='title-box'>{props.title}</h1>
      <p className='description'>{props.description}</p>

    </section>
  )
}
