import Importante from './Importante.jsx';

export default function Layout06() {
    return (
        <>
            <div>
                <h1>Alcoholemia - Certificado de Educación Vial</h1>
                <div style={{ backgroundColor: 'lightcyan', borderRadius: '15px', paddingInline: '10px' }}>
                    <p>Previo al turno deberá realizar el <strong>Curso Nacional de Educación Vial</strong> al que podrá acceder <a href="https://curso.seguridadvial.gob.ar/ansv/" target='_blank'>haciendo click aquí</a> (si no funciona el enlace puede pegar en el siguiente enlace de URL de su navegador: https://curso.seguridadvial.gob.ar/ansv/ ) o de forma presencial, sin turno, los días lunes o miércoles de 12:30 a 17:00ha (un solo día), en la Municipalidad de la Ciudad de Mendoza (9 de Julio 500, Casa Central, Ciudad de Mendoza)</p>
                </div>
                <h2>Documentación a presentar:</h2>
                <ul>
                    <li>Original y copia del DNI</li>
                    <li>Resolución emitida por el Juez Vial por la infracción cometida (si la posee).</li>
                    <li>Certificados del Curso Nacional de Educación Vial <strong>impreso</strong>, si realizó el curso online.</li>
                    <li>Boleta adjunta y comprobantes de pago <strong>impresos</strong> de la Tasa Administrativa Municipal por Certificado de Educación Vial.</li>
                    <li>Si se le informaron multas pendientes, presentar original y copia de dichas multas que corroboren regularización (pago o resolutivo donde se desestiman).</li>
                </ul>
                <h2>Exámen Teórico:</h2>
                <p>Se evaluará el contenido del Curso Nacional y el del <a href="https://ciudaddemendoza.gob.ar/wp-content/uploads/2021/03/Compendio_ok_2020_.pdf" target='_blank'>Compendio de Ley Provincial 9024/17</a></p>

                <h2>Sobre el Trámite:</h2>
                <ul>
                    <li>El trámite comienza en la Municipalidad de la Ciudad de Mendoza (9 de Julio 500) a la hora establecida del turno, donde se realizan toma de documentación, control médico y Curso de Educación Vial.</li>
                    <li>Concluídas estas etapas, se procede a la realización del Exámen Práctico.</li>
                    <ul>
                        <li>Lunes a Viernes de 08:30 a 12:30hs en la Nave Cultural (calle Las Cubas, entre Av. Mitre y España).</li>
                        <li>Si no tiene licencia o la misma se encuentra vencida, debería concurrir con un acompañante con licencia vigente.</li>
                        <li>Presentar original y copia de seguro al día y cédula de identificación del vehículo.</li>
                    </ul>
                </ul>
                <Importante />
            </div>
        </>
    )
}