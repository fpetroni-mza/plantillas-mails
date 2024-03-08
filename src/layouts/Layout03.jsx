import Importante from './Importante.jsx';

export default function Layout03() {
    return (
        <>
            <div>
                <h1>Renovación Profesional</h1>
                <h2>Documentación a presentar:</h2>
                <ul>
                    <li>Original y copia del DNI</li>
                    <li>Licencia anterior a renovar</li>
                    <li>Estudios médicos (validez por 90 días desde la emisión):</li>
                    <ul>
                        <li>Hemograma, Glucemia y Uremia (Análisis de Sangre)</li>
                        <li>Electrocardiograma con informe</li>
                        <li>Certificado de Aptitud Médica</li>
                        <li>Certificado de Aptitud Psicológica o Psiquiátrica</li>
                    </ul>
                    <li>Si tiene <strong>Categoria D</strong> para transporte de pasajeros, Certificado de Reincidencia (Antecedentes Penales) <strong>impreso</strong>. <em>Validez por 30 días</em>.</li>
                    <li>Boletas adjuntas y comprobantes de pago <strong>impresos</strong>, tantos del CeNAT y la Tasa Administrativa Municipal.</li>
                    <li>Si se le informaron multas pendientes, presentar original y copia de dichas multas que corroboren regularización (pago o resolutivo donde se desestiman).</li>
                </ul>
                
                <Importante />
            </div>
        </>
    )
}