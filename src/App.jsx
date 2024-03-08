import { useRef, useState } from 'react'
import './App.css'

/* Import de Plantillas */
import Layout01 from './layouts/Layout01';
import Layout02 from './layouts/Layout02';
import Layout03 from './layouts/Layout03';
import Layout04 from './layouts/Layout04';
import Layout05 from './layouts/Layout05';
import Layout06 from './layouts/Layout06';
import Layout07 from './layouts/Layout07';
import Layout08 from './layouts/Layout08';
import Layout09 from './layouts/Layout09';
import Layout10 from './layouts/Layout10';
import Layout11 from './layouts/Layout11';
import Layout12 from './layouts/Layout12';
import Layout13 from './layouts/Layout13';
import Layout14 from './layouts/Layout14';
import Layout14a from './layouts/Layout14-1';

import Layout15 from './layouts/Layout15';

import Turno from './layouts/Turno';
import Predeterminado from './layouts/Predeterminado';

const layouts = [
  { id: 1, name: 'layout01', description: 'Licencia Original'},
  { id: 2, name: 'layout02', description: 'Renovación Particular'},
  { id: 3, name: 'layout03', description: 'Renovación Profesional'},
  { id: 4, name: 'layout04', description: 'Renovación Profesional - Fuerza Pública Provincial'},
  { id: 5, name: 'layout05', description: 'Mayor de 65 años'},
  { id: 6, name: 'layout06', description: 'Alcoholemia - Certificado de Educación Vial'},
  { id: 7, name: 'layout07', description: 'Ampliación Profesional'},
  { id: 8, name: 'layout08', description: 'Ampliación Profesional - Fuerza Pública Provincial'},
  { id: 9, name: 'layout09', description: 'Ampliación Profesional - Vehículo de gran porte o maquinaria'},
  { id: 10, name: 'layout10', description: 'Ampliación Profesional - Curso de APROCAM'},
  { id: 11, name: 'layout11', description: 'Ampliación Particular'},
  { id: 12, name: 'layout12', description: 'Duplicado - Cambio de datos, robo o extravío'},
  { id: 13, name: 'layout13', description: 'Agregados diplomáticos - Consulados y Embajadas'},
  { id: 14, name: 'layout14', description: 'Canje de Licencia Chilena por Argentina - Información'},
  { id: 14.1, name: 'layout14a', description: 'Canje de Licencia Chilena por Argentina - Turno'},
];

/* ---------------------------------------------------------------------------------------------------------------- */


/* Método para cargar datos a planilla */
const InputDate = ({ setDate }) => <label>Indique el DÍA - <input placeholder='Osvaldo 33 de Envido del 1200 A.C. ' onChange={(e) => setDate(e.target.value)} type='text' /></label>;
const InputTime = ({ setTime }) => <label>Indique la HORA - <input onChange={(e) => setTime(e.target.value)} type='time' /></label>;
const SelectPlace = ({ setPlace }) => {
  const lugares = [
    { id: 1, place: 'Municipalidad de la Ciudad de Mendoza', direction: '9 de Julio, Casa Central, Ciudad de Mendoza' },
    { id: 2, place: 'Punto de Cercanía 4ta Sección', direction: 'Av. San Martín 2981 cas esquina Gobernador González, Ciudad de Mendoza' },
    { id: 3, place: 'Centro de Atención Municipal 5ta Sección', direction: 'Paso de los Andes esquina Sobremonte, ingreso Gimnasio Municipal N° 1, Ciudad de Mendoza' },
    { id: 4, place: 'Punto de Cercanía 6ta Sección', direction: 'Alpatacal 3151, al lado del Gimnasio Municipal N° 2, Ciudad de Mendoza' },
  ]

  return (
    <label>Indique el LUGAR -
      <select onChange={(e) => setPlace(e.target.value)}>
        <option value="---">SELECCIONE LUGAR</option>
        {lugares.map(({ id, place, direction }) => <option key={id} value={`${place} (${direction})`}>{place}</option>)}
      </select>
    </label>
  );
}

function App() {
  const [plantilla, setPlantilla] = useState('');

  /** función variable para copiar testo de nodos del DOM al portapapeles */
  const divRef = useRef();
  const copiarAlPortapapeles = () => {
    const range = document.createRange();
    range.selectNode(divRef.current);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    try {
      document.execCommand('copy');
      alert('Contenido copiado al portapapeles');
    } catch (err) {
      alert('Error al copiar el contenido al portapapeles: ', err);
    }
    window.getSelection().removeAllRanges();
  };

  /** función variable para copiar testo de nodos del DOM al portapapeles */
  const textRef = useRef();
  const copiarAlPortapapelesTexto = async () => {
    const texto = textRef.current.textContent;
    try {
      await navigator.clipboard.writeText(texto);
      alert('Texto copiado al portapapeles');
    } catch (err) {
      alert('Error al copiar el texto al portapapeles: ', err);
    }
  };

  const [date, setDate] = useState('---');
  const [time, setTime] = useState('---');
  const [place, setPlace] = useState('---');

  /* Constante de estilos para el div */
  const style = { display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', padding: '0 10px 0 0' }

  return (
    <>
      <header className='header'>
        <a href="https://ciudaddemendoza.gob.ar" target='_blank'>
          <img src="../public/logo-footer.png" alt="Logo Municipalidad de Mendoza" /></a>
        <h1>Listado de Plantillas predeterminadas para Mails</h1>
      </header>


      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div style={style}>

          {/* Prueba de setear valores */}
          <h2>Ingrese fecha y hora del trámite</h2>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <InputDate setDate={setDate} />
            <InputTime setTime={setTime} />
            <SelectPlace setPlace={setPlace} />
          </div>

          <h2>Licencias de Conducir</h2>
          {layouts.map(data => <button key={data.id} className='layout-list' style={{ textAlign: 'left' }} onClick={() => setPlantilla(data.name)}>{data.description}</button>)}
          <h2>Salud Animal</h2>
          <button className='layout-list' style={{ textAlign: 'left' }} onClick={() => setPlantilla('layout15')}>Turno de Castración / Esterilización</button>
        </div>

        {/* -------------------------------------------- */}
        {/* Sección de plantillas */}
        {/* -------------------------------------------- */}

        <div className='layouts'>
          <button onClick={copiarAlPortapapeles} className='copy-button'><img src="../public/copy-icon.png" alt="Copiar plantilla" style={{ width: '25px', height: '25px' }} /></button>
          <div style={{ width: '760px', padding: '20px' }} ref={divRef}>
            <Turno date={date} time={time} place={place} />
            <hr />
            <div className='layout-container'>
              {plantilla === 'layout01' && <Layout01 />}
              {plantilla === 'layout02' && <Layout02 />}
              {plantilla === 'layout03' && <Layout03 />}
              {plantilla === 'layout04' && <Layout04 />}
              {plantilla === 'layout05' && <Layout05 />}
              {plantilla === 'layout06' && <Layout06 />}
              {plantilla === 'layout07' && <Layout07 />}
              {plantilla === 'layout08' && <Layout08 />}
              {plantilla === 'layout09' && <Layout09 />}
              {plantilla === 'layout10' && <Layout10 />}
              {plantilla === 'layout11' && <Layout11 />}
              {plantilla === 'layout12' && <Layout12 />}
              {plantilla === 'layout13' && <Layout13 />}
              {plantilla === 'layout14' && <Layout14 />}
              {plantilla === 'layout14a' && <Layout14a />}
              {plantilla === 'layout15' && <Layout15 />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
