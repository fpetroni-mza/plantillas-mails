import Importante from './Importante.jsx';

export default function Layout01() {
    return (
        <>
            <div>
                <h1>Trámite Original</h1>
                <div style={{ backgroundColor: 'lightcyan', borderRadius: '15px', paddingInline: '10px' }}>
                    <p><strong>Principiante:</strong>Antes de realizar el trámite, deberás asistir sin turno al Curso de Educación Vial que se dicta los días Lunes o Miércoles de 12:30 a 17:00hs (un solo día) en la Municipalidad de la Ciudad de Mendoza. Y si tenés entre 18 y 21 años inclusive, también debés realizar el curso <em>Mi Primera Licencia</em> en el siguiente enlace <a href="https://mpl.seguridadvial.gob.ar/" target='_blank'>https://mpl.seguridadvial.gob.ar/</a> y presentar el certificado del mismo.</p>
                    <p><strong>Con Antigüedad:</strong>Previo al turno deberás realizar el <em>Curso Nacional de Educación Vial</em>, el que podés realizar online a través del siguiente enlace: <a href="https://curso.seguridadvial.gob.ar/ansv/" target='_blank'>https://curso.seguridadvial.gob.ar/ansv/</a> o de forma presencial, sin turno, los días Lunes o Miércoles de 12:30 a 17:00hs (un solo día) en la Municipalidad de la Ciudad de Mendoza.</p>
                </div>

                <h2>Documentación a presentar:</h2>
                <ul>
                    <li>Original y copia del DNI</li>
                    <li>Certificados impresos de asistencias a los módulso del Curso Nacional de Educación Vial (Categorías, Género y Estrellas Amarillas) o comprobante de asistencia al curso presencial.</li>
                    <li>Boletas adjuntas y comprobantes de pago <strong>impresos</strong>, tantos del CeNAT y la Tasa Administrativa Municipal.</li>
                    <li>Si se le informaron multas pendientes, presentar original y copia de dichas multas que corroboren regularización (pago o resolutivo donde se desestiman).</li>
                    <li>Certificados impresos de asistencia a los cursos correspondientes, según corresponda:</li>
                    <ul>
                        <li><strong>Principante de 18 a 21 años:</strong> Curso <em>Mi Primer Licencia</em> y curso presencial de educación vial.</li>
                        <li><strong>Principiante de 22 años o más:</strong> Curso presencial de educación vial.</li>
                        <li><strong>Original NO Principiante:</strong> Curso presencial u Online de educación vial. Si se realiza la alternativa online, son 3 certificados (Ed. Vial, Estrellas Amarillas y Género).</li>
                    </ul>
                </ul>

                <h2>Examen Teórico:</h2>
                <p>Se evaluará el contenido del Curso Nacioanl y el del <a href="https://drive.google.com/file/d/18RMbqK0RRVbXZENRcesp5wRwtMVtVm0s/view" target='_blank'>Compendio de Ley Provincial 9024</a> (Puede acceder al mismo ingresando al siguiente Link si no le funciona el hipervínculo: https://drive.google.com/file/d/18RMbqK0RRVbXZENRcesp5wRwtMVtVm0s/view )</p>

                <h2>Prueba de Manejo:</h2>
                <ul>
                    <li>Lunes a Viernes de 08:30hs a 12:30hs en Nave Cultural (calle Las Cubas, entre Av. Mitre y España).</li>
                    <li>Sábados de 9:00 a 11:30hs en playa de estacionamiento de la Municipalidad (ingreso por calle España).</li>
                    <li>Deberá concurrir con un acompañante con licencia vigente.</li>
                    <li>Presentar original y copia del seguro al día y cédula de identificación del vehículo.</li>
                </ul>

                <Importante />
            </div>
        </>
    )
}