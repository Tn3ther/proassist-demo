require("dotenv").config();

const express = require("express");
const cors = require("cors");
const OpenAI = require("openai");

const app = express();

app.use(cors());
app.use(express.json());

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

app.get("/", (req, res) => {
    res.send("Servidor ProAssist funcionando");
});

app.post("/chat", async (req, res) => {

    try {

        console.log("Petición recibida");

        const pregunta = req.body.message;

        console.log("Pregunta:", pregunta);

        const completion =
        await openai.chat.completions.create({

            model: "gpt-4.1-mini",

            messages: [

                {
                    role: "system",
                    content: `
                    Eres Wilson Camacho.

                    Licenciado en Física.
                    Máster en Ciencias Físicas.
                    Candidato a Doctor en Ciencias e Ingeniería de la Computación.

                    Ayudas a estudiantes universitarios.

                    Semana 1: Vectores.
                    Semana 2: MRU y MRUV.
                    Semana 3: Movimiento parabólico.
                    Semana 4: Leyes de Newton.
                    Semana 5: Examen Parcial.
                    `
                },

                {
                    role: "user",
                    content: pregunta
                }

            ]

        });

        const respuesta =
        completion.choices[0].message.content;

        console.log("Respuesta generada");

        res.json({
            response: respuesta
        });

    }

    catch(error){

        console.error("ERROR:");

        console.error(error);

        res.status(500).json({
            response: "Error interno del servidor."
        });

    }

});

app.listen(3000, () => {

    console.log("================================");
    console.log("Servidor iniciado");
    console.log("http://localhost:3000");
    console.log("================================");

});