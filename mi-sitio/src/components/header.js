import React from "react";
import illustration from '../imgs/undraw_selecting_1lx3.svg';
import Form from './contact.form';

export default ()=> (
    <header className="bg-gray-300">
        <div className="container mx-auto p-12 max-w-4xl">
            <div className="flex justify-center items-center">
                <div className="flex-1">
                    <h1 className="text-6xl font-bold text-purple-700">¡Hola! Soy Lucas</h1>
                    <p className="text-xl font-light" >Soy desarrollador de aplicaciones y sitios web</p>
                </div>
                <img src={illustration} style={{height : "300px"}} alt="Hombre seleccionando un elemento de un grid"></img>
            </div>
            <div>
                <Form></Form>
            </div>
        </div>
    </header>
);