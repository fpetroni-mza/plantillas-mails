import Importante from './Importante.jsx';

export default function Layout11() {
    return (
        <>
            <div>
                <h1>Ampliación Particular</h1>
                <h2>Documentación a presentar:</h2>
                <ul>
                    <li>Original y copia del DNI</li>
                    <li><em style={{color: 'red'}}>En caso de corresponder según categoría</em>, certificados <strong>impresos</strong> de asistencias a los módulos del Curso Nacional de Educación Vial (Categorías, Género y Estrellas Amarillas) o comprobante de asistencia al curso presencial.</li>
                    <li>Boletas adjuntas y comprobantes de pago <strong>impresos</strong>, tantos del CeNAT y la Tasa Administrativa Municipal.</li>
                    <li>Si se le informaron multas pendientes, presentar original y copia de dichas multas que corroboren regularización (pago o resolutivo donde se desestiman).</li>
                </ul>

                <h2>Examen Teórico:</h2>
                <p><em style={{color: 'red'}}>En caso de corresponder según categoría</em>, se evaluará el contenido del Curso Nacioanl y el del <a href="https://drive.google.com/file/d/18RMbqK0RRVbXZENRcesp5wRwtMVtVm0s/view" target='_blank'>Compendio de Ley Provincial 9024</a> (Puede acceder al mismo ingresando al siguiente Link si no le funciona el hipervínculo: https://drive.google.com/file/d/18RMbqK0RRVbXZENRcesp5wRwtMVtVm0s/view )</p>

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