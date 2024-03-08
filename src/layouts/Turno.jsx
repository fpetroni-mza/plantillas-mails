import React from "react";

export default function Turno({ date, time, place }) {
    return (
        <>
            <p>Su turno es el día <strong>{date}</strong> a las <strong>{time}hs</strong> en {place}.</p>
        </>
    )
}