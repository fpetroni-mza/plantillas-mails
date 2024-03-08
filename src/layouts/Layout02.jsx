import Importante from './Importante.jsx';

export default function Layout02() {
    return (
        <>
            <div>
                <h1>Renovación Particular</h1>
                <h2>Documentación a presentar:</h2>
                <ul>
                    <li>Original y copia del DNI</li>
                    <li>Licencia anterior a renovar.</li>
                    <li>Boletas adjuntas y comprobantes de pago <strong>impresos</strong>, tantos del CeNAT y la Tasa Administrativa Municipal.</li>
                    <li>Si se le informaron multas pendientes, presentar original y copia de dichas multas que corroboren regularización (pago o resolutivo donde se desestiman).</li>
                </ul>

                <Importante />
            </div>
        </>
    )
}