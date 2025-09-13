// En un proyecto real, la URL base debería estar en una variable de entorno
const API_BASE_URL = 'http://localhost:8080/guru-api'; // Asume que PHP corre en el puerto 8000

/**
 * Obtiene una tirada de 3 cartas del tarot.
 * @returns {Promise<string[]>} Un arreglo con los nombres de las cartas.
 */
export async function getTarotReading(count = 3) {
    try {
        const response = await fetch(`${API_BASE_URL}/tarot/tirada?count=${count}`);
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error al obtener la tirada de tarot:", error);
        // Devuelve un error o un estado por defecto para que la UI pueda reaccionar
        return ["Error en la conexión cósmica", "Intenta de nuevo", "El Gurú no responde"];
    }
}

/**
 * Envía una pregunta al Gurú y devuelve su respuesta.
 * @param {string} pregunta La pregunta del usuario.
 * @param {string[]} cartas Las cartas seleccionadas en la tirada.
 * @returns {Promise<string>} La respuesta generada por el Gurú.
 */
export async function askGuru(pregunta, cartas) {
    try {
        const response = await fetch(`${API_BASE_URL}/guru/pregunta`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ pregunta, cartas }),
        });
        // Devuelve el objeto JSON completo
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error al consultar al Gurú:", error);
        // Devuelve un objeto de error consistente
        return { 
            error: "El Gurú parece estar offline. Las estrellas no están alineadas.",
            prompt: "No se pudo generar un prompt debido a un error de conexión."
        };
    }
}

export async function getReading(pregunta, cartas) {
    try {
        const response = await fetch(`${API_BASE_URL}/tarot/reading`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ pregunta, cartas }),
        });
        // Devuelve el objeto JSON completo
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error al consultar al Gurú:", error);
        // Devuelve un objeto de error consistente
        return { 
            error: "El Gurú parece estar offline. Las estrellas no están alineadas.",
            prompt: "No se pudo generar un prompt debido a un error de conexión."
        };
    }
}

export async function getWisdomTweet(hashtag = '') {
    try {
        const url = new URL(`${API_BASE_URL}/guru/wisdom-tweet`);
        if (hashtag) {
            url.searchParams.append('hashtag', hashtag);
        }
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error al obtener el tweet de sabiduría:", error);
        return { 
            error: "El Gurú no encuentra inspiración en este momento.",
            prompt: "No se pudo generar un prompt debido a un error de conexión."
        };
    }
}

export async function getFanResponse(fanName, fanMessage) {
    try {
        const response = await fetch(`${API_BASE_URL}/guru/fan-response`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ fanName, fanMessage }),
        });
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error al generar la respuesta para el fan:", error);
        return { 
            error: "El Gurú está meditando y no puede responder ahora.",
            prompt: "No se pudo generar un prompt debido a un error de conexión."
        };
    }
}
