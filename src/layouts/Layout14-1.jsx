import Importante from './Importante.jsx';

export default function Layout14a() {
    return (
        <>
            <div>
                <h1>Canje de Licencia Chilena por Argentina - Turno</h1>

                <div style={{ backgroundColor: 'lightcyan', borderRadius: '15px', paddingInline: '10px' }}>
                   <p>Para acceder al canje de licencias de conducir para chilenos residentes en Argentina, deberá ingresar al siguiente enlace <a href="https://www.argentina.gob.ar/servicio/acuerdo-entre-la-republica-argentina-y-la-republica-de-chile-sobre-reconocimiento-reciproco" target='_blank'>Acuerdo Argentina-Chile sobre reconocimiento recíproco y canje de Licencias de Conducir</a> (si no puede acceder al link, copie y pegue la siguiente URL en su navegador: https://www.argentina.gob.ar/servicio/acuerdo-entre-la-republica-argentina-y-la-republica-de-chile-sobre-reconocimiento-reciproco ) y solicitar el <strong>Certificado de Canje</strong>.</p>
                </div>

                <h2>Documentación a presentar:</h2>
                <ul>
                    <li>Original y copia del DNI o pasaporte</li>
                    <li>Licencia de conducir chilena.</li>
                    <li>Certificado de canje de licencia emitido por Agencia Nacional de Seguridad Vial.</li>
                    <li>Si solicita <strong>Categoria D</strong> para transporte de pasajeros, Certificado de Reincidencia (Antecedentes Penales) <strong>impreso</strong>. <em>Validez por 30 días</em>.</li>
                    <li>Boletas adjunta y comprobante de pago <strong>impresos</strong> de la Tasa Administrativa Municipal. <em>CeNAT eximido de pago</em>.</li>
                    <li>Si se le informaron multas pendientes, presentar original y copia de dichas multas que corroboren regularización (pago o resolutivo donde se desestiman).</li>
                </ul>
                <Importante />
            </div>
        </>
    )
}