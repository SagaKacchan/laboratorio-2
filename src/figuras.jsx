import React, { useState } from "react";

function Figuras() {

    // Estados para el triángulo
    const [baseTriangulo, setBaseTriangulo] = useState("");
    const [alturaTriangulo, setAlturaTriangulo] = useState("");
    const [resultadoTriangulo, setResultadoTriangulo] = useState("");

    // Estados para el rectángulo
    const [baseRectangulo, setBaseRectangulo] = useState("");
    const [alturaRectangulo, setAlturaRectangulo] = useState("");
    const [resultadoRectangulo, setResultadoRectangulo] = useState("");

    // Estados para el cuadrado
    const [ladoCuadrado, setLadoCuadrado] = useState("");
    const [resultadoCuadrado, setResultadoCuadrado] = useState("");


    // Función para calcular el área del triángulo
    const calcularTriangulo = () => {

        const base = parseFloat(baseTriangulo);
        const altura = parseFloat(alturaTriangulo);

        if (base > 0 && altura > 0) {

            const area = (base * altura) / 2;

            setResultadoTriangulo(area);

        } else {

            setResultadoTriangulo("Ingrese valores válidos");

        }
    };


    // Función para calcular el área del rectángulo
    const calcularRectangulo = () => {

        const base = parseFloat(baseRectangulo);
        const altura = parseFloat(alturaRectangulo);

        if (base > 0 && altura > 0) {

            const area = base * altura;

            setResultadoRectangulo(area);

        } else {

            setResultadoRectangulo("Ingrese valores válidos");

        }
    };


    // Función para calcular el área del cuadrado
    const calcularCuadrado = () => {

        const lado = parseFloat(ladoCuadrado);

        if (lado > 0) {

            const area = lado * lado;

            setResultadoCuadrado(area);

        } else {

            setResultadoCuadrado("Ingrese un valor válido");

        }
    };


    return (

        <div className="container mt-5">

            <h1 className="text-center mb-3">
                Cálculo de Áreas
            </h1>

            <p className="text-center text-muted mb-5">
                Laboratorio 2 - React Hooks (useState)
            </p>


            <div className="row g-4">


                {/* TRIÁNGULO */}

                <div className="col-md-4">

                    <div className="card shadow h-100">

                        <div className="card-header bg-primary text-white text-center">
                            <h3 className="mb-0">
                                Triángulo
                            </h3>
                        </div>

                        <div className="card-body">

                            <div className="mb-3">

                                <label className="form-label">
                                    Base
                                </label>

                                <input
                                    type="number"
                                    className="form-control"
                                    value={baseTriangulo}
                                    onChange={(e) =>
                                        setBaseTriangulo(e.target.value)
                                    }
                                    placeholder="Ingrese la base"
                                />

                            </div>


                            <div className="mb-3">

                                <label className="form-label">
                                    Altura
                                </label>

                                <input
                                    type="number"
                                    className="form-control"
                                    value={alturaTriangulo}
                                    onChange={(e) =>
                                        setAlturaTriangulo(e.target.value)
                                    }
                                    placeholder="Ingrese la altura"
                                />

                            </div>


                            <button
                                className="btn btn-primary w-100"
                                onClick={calcularTriangulo}
                            >
                                Calcular área
                            </button>


                            {resultadoTriangulo !== "" && (

                                <div className="alert alert-success mt-3 text-center">

                                    <strong>
                                        Área: {resultadoTriangulo}
                                    </strong>

                                </div>

                            )}

                        </div>

                    </div>

                </div>


                {/* RECTÁNGULO */}

                <div className="col-md-4">

                    <div className="card shadow h-100">

                        <div className="card-header bg-success text-white text-center">
                            <h3 className="mb-0">
                                Rectángulo
                            </h3>
                        </div>

                        <div className="card-body">

                            <div className="mb-3">

                                <label className="form-label">
                                    Base
                                </label>

                                <input
                                    type="number"
                                    className="form-control"
                                    value={baseRectangulo}
                                    onChange={(e) =>
                                        setBaseRectangulo(e.target.value)
                                    }
                                    placeholder="Ingrese la base"
                                />

                            </div>


                            <div className="mb-3">

                                <label className="form-label">
                                    Altura
                                </label>

                                <input
                                    type="number"
                                    className="form-control"
                                    value={alturaRectangulo}
                                    onChange={(e) =>
                                        setAlturaRectangulo(e.target.value)
                                    }
                                    placeholder="Ingrese la altura"
                                />

                            </div>


                            <button
                                className="btn btn-success w-100"
                                onClick={calcularRectangulo}
                            >
                                Calcular área
                            </button>


                            {resultadoRectangulo !== "" && (

                                <div className="alert alert-success mt-3 text-center">

                                    <strong>
                                        Área: {resultadoRectangulo}
                                    </strong>

                                </div>

                            )}

                        </div>

                    </div>

                </div>


                {/* CUADRADO */}

                <div className="col-md-4">

                    <div className="card shadow h-100">

                        <div className="card-header bg-danger text-white text-center">
                            <h3 className="mb-0">
                                Cuadrado
                            </h3>
                        </div>

                        <div className="card-body">

                            <div className="mb-3">

                                <label className="form-label">
                                    Lado
                                </label>

                                <input
                                    type="number"
                                    className="form-control"
                                    value={ladoCuadrado}
                                    onChange={(e) =>
                                        setLadoCuadrado(e.target.value)
                                    }
                                    placeholder="Ingrese el lado"
                                />

                            </div>


                            <button
                                className="btn btn-danger w-100"
                                onClick={calcularCuadrado}
                            >
                                Calcular área
                            </button>


                            {resultadoCuadrado !== "" && (

                                <div className="alert alert-success mt-3 text-center">

                                    <strong>
                                        Área: {resultadoCuadrado}
                                    </strong>

                                </div>

                            )}

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );
}

export default Figuras;