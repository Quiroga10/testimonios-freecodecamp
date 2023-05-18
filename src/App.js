import './App.css';
import Testimonio from './componentes/Testimonio.jsx';
import testimonios from './data_testimonios';

function App() {
  return (
    <main>
      <section className="App">
        <div className='contenedor-principal'>
          <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
          {testimonios.map((testimonio, index) => (
            <Testimonio
              key={index}
              nombre={testimonio.nombre}
              pais={testimonio.pais}
              imagen={testimonio.imagen}
              cargo={testimonio.cargo}
              empresa={testimonio.empresa}
              testimonio={testimonio.testimonio}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
