import React from 'react';

const Main = ({test , fecha}) => {
    console.log(test);
    console.log(fecha);
    return (
        <section>
            <h3> Espero que tengas un buen dia </h3>
            <h2>{test}. Hoy es {fecha}</h2>
        </section>
    );
};

export default Main