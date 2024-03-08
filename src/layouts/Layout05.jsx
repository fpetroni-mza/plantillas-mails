import Importante from './Importante.jsx';

export default function Layout05() {
    return (
        <>
            <div>
                <h1>Mayores de 65 años</h1>
                <h2>Documentación a presentar:</h2>
                <ul>
                    <li>Original y copia del DNI</li>
                    <li>Licencia anterior</li>
                    <li>Estudios médicos (validez por 90 días desde la emisión):</li>
                    <ul>
                        <li>Hemograma, Glucemia y Uremia (Análisis de Sangre)</li>
                        <li>Electrocardiograma con informe</li>
                        <li>Certificado de Aptitud Médica</li>
                    </ul>
                    <li>Boletas adjuntas y comprobantes de pago <strong>impresos</strong>, tantos del CeNAT como de la Tasa Administrativa Municipal</li>
                    <li>Si se le informaron multas pendientes, presentar original y copia de dichas multas que corroboren regularización (pago o resolutivo donde se desestiman).</li>
                </ul>

                <h2>Sobre el Trámite:</h2>
                <ul>
                    <li>El trámite comienza en la Municipalidad de la Ciudad de Mendoza (9 de Julio 500) a la hora establecida del turno, donde se realizan toma de documentación, foto y firma, control médico y Curso de Educación Vial.</li>
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