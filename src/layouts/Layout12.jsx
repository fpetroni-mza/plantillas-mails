import Importante from './Importante.jsx';

export default function Layout12() {
    return (
        <>
            <div>
                <h1>Duplicado - Cambio de datos, robo o extravío</h1>
                <h2>Documentación a presentar:</h2>
                <ul>
                    <li>Original y copia del DNI</li>
                    <li>Licencia anterior a modificar o, en caso de no tenerla, certificado de extravío o denuncia de robo/hurto.</li>
                    <li>Boletas adjuntas y comprobantes de pago <strong>impresos</strong>, tantos del CeNAT y la Tasa Administrativa Municipal.</li>
                    <li>Si se le informaron multas pendientes, presentar original y copia de dichas multas que corroboren regularización (pago o resolutivo donde se desestiman).</li>
                    <ul>
                        <li><em style={{ color: 'red' }}>Si es mayor de 65 años:</em> Estudios médicos (validez por 90 días desde la emisión):
                            <ul>
                                <li>Hemograma, Glucemia y Uremia (Análisis de Sangre)</li>
                                <li>Electrocardiograma con informe</li>
                                <li>Certificado de Aptitud Médica</li>
                                <li><em>En caso de utilizar audífonos</em>, debe agregar certificado de grado de hipoacusia.</li>
                            </ul>
                        </li>
                        <li><em style={{ color: 'red' }}>Si es profesioanl:</em> Estudios médicos (validez por 90 días desde la emisión):
                            <ul>
                                <li>Hemograma, Glucemia y Uremia (Análisis de Sangre)</li>
                                <li>Electrocardiograma con informe</li>
                                <li>Certificado de Aptitud Médica</li>
                                <li>Certificado de Aptitud Psicológica o Psiquiátrica</li>
                            </ul>
                        </li>
                        <li><em style={{ color: 'red' }}>Si es profesional clase D:</em> Estudios médiso correspondientes de profesional y Certificado de Reincidentes (antecedentes penales) <strong>impresos</strong>. <em>Validez por 30 días</em>.</li>
                    </ul>
                </ul>

                <Importante />
            </div>
        </>
    )
}