import {
    gameState,
    loseLife,
    resetGame
} from "./state.js";

import {
    scenes
} from "./scenes.js";


// ==================================================
// ELEMENTOS DE LA INTERFAZ
// ==================================================

const gameScreenElement =
    document.getElementById("game-screen");

const speakerElement =
    document.getElementById("speaker");

const textElement =
    document.getElementById("dialogue-text");

const optionsElement =
    document.getElementById("options");

const nextButton =
    document.getElementById("next-button");

const livesElement =
    document.getElementById("lives");

const lifeIconsElement =
    document.getElementById("life-icons");

const feedbackElement =
    document.getElementById("feedback");

const portraitElement =
    document.getElementById("character-portrait");

const backgroundElement =
    document.getElementById("background");

const dialogueBoxElement =
    document.getElementById("dialogue-box");

const hudElement =
    document.getElementById("hud");


// ==================================================
// AUDIO
// ==================================================

const mainMusic =
    document.getElementById("music-main");

const gameOverMusic =
    document.getElementById("music-game-over");


// ==================================================
// ARCHIVOS POR DEFECTO
// ==================================================

const NORMAL_BACKGROUND =
    "./assets/background/examen.png";

const GAME_OVER_BACKGROUND =
    "./assets/background/game-over.png";

const DEFAULT_PORTRAIT =
    "./assets/characters/protagonista.png";

const DEFAULT_DIALOGUE_BOX =
    "./assets/ui/dialogue-box.png";


// ==================================================
// ESCENA DONDE COMIENZA LA EVALUACIÓN
// ==================================================

const EVALUATION_START_SCENE =
    "inicioEvaluacion";


// ==================================================
// CONTROL DE MÚSICA
// ==================================================

function playMainMusic() {

    gameOverMusic.pause();
    gameOverMusic.currentTime = 0;

    mainMusic.volume = 0.4;

    if (mainMusic.paused) {

        mainMusic.play().catch(() => {

            console.log(
                "El navegador todavía no permite reproducir la música."
            );

        });

    }
}


function playGameOverMusic() {

    mainMusic.pause();

    gameOverMusic.currentTime = 0;

    gameOverMusic.volume = 0.5;

    gameOverMusic.play().catch(() => {

        console.log(
            "No se pudo reproducir la música de Game Over."
        );

    });
}


// ==================================================
// INICIAR JUEGO COMPLETO
// ==================================================

export function startGame() {

    resetGame();

    clearSpecialModes();

    gameState.currentScene =
        "inicio";

    showScene(
        "inicio"
    );
}


// ==================================================
// REINICIAR SOLO LA EVALUACIÓN
// ==================================================

function restartEvaluation() {

    gameState.lives =
        gameState.maxLives;

    gameState.gameOver =
        false;

    gameState.currentScene =
        EVALUATION_START_SCENE;

    clearSpecialModes();

    playMainMusic();

    showScene(
        EVALUATION_START_SCENE
    );
}


// ==================================================
// VIDAS
// ==================================================

function updateHUD() {

    livesElement.textContent =
        gameState.lives;

    const fullHeart =
        "❤️";

    const emptyHeart =
        "🖤";

    const hearts =
        fullHeart.repeat(
            gameState.lives
        );

    const lostHearts =
        emptyHeart.repeat(
            gameState.maxLives -
            gameState.lives
        );

    lifeIconsElement.textContent =
        hearts + lostHearts;
}


// ==================================================
// LIMPIAR MODOS
// ==================================================

function clearSpecialModes() {

    gameScreenElement.classList.remove(
        "game-over",
        "info-scene",
        "intro-scene"
    );

    hudElement.style.display =
        "block";

    dialogueBoxElement.style.display =
        "block";

    portraitElement.style.display =
        "block";
}


// ==================================================
// MOSTRAR ESCENA
// ==================================================

export function showScene(sceneId) {

    const scene =
        scenes[sceneId];

    if (!scene) {

        console.error(
            `La escena "${sceneId}" no existe.`
        );

        return;
    }


    gameState.currentScene =
        sceneId;

    clearSpecialModes();

    optionsElement.innerHTML =
        "";

    feedbackElement.textContent =
        "";

    nextButton.style.display =
        "none";

    updateHUD();


    // ==================================================
    // FONDO
    // ==================================================

    if (scene.background) {

        backgroundElement.src =
            `./assets/background/${scene.background}`;

    } else {

        backgroundElement.src =
            NORMAL_BACKGROUND;
    }


    // ==================================================
    // CUADRO DE DIÁLOGO
    // ==================================================

    if (scene.dialogueBox) {

        dialogueBoxElement.src =
            `./assets/ui/${scene.dialogueBox}`;

    } else {

        dialogueBoxElement.src =
            DEFAULT_DIALOGUE_BOX;
    }


    // ==================================================
    // PERSONAJE
    // ==================================================

    if (scene.portrait === null) {

        portraitElement.style.display =
            "none";

    }

    else if (scene.portrait) {

        portraitElement.src =
            `./assets/characters/${scene.portrait}`;

        portraitElement.style.display =
            "block";

    }

    else {

        portraitElement.src =
            DEFAULT_PORTRAIT;

        portraitElement.style.display =
            "block";
    }


    // ==================================================
    // TEXTO
    // ==================================================

    speakerElement.textContent =
        scene.speaker ?? "";

    textElement.textContent =
        scene.text ?? "";


    // ==================================================
    // TIPO DE ESCENA
    // ==================================================

    if (scene.type === "dialogue") {

        showDialogue(scene);

    }

    else if (scene.type === "question") {

        showQuestion(scene);

    }

    else if (scene.type === "intro") {

        showIntro(scene);

    }

    else if (scene.type === "info") {

        showInfo(scene);

    }

    else if (scene.type === "ending") {

        showEnding(scene);

    }

    else {

        console.error(
            `Tipo de escena desconocido: ${scene.type}`
        );
    }
}


// ==================================================
// DIÁLOGO NORMAL
// ==================================================

function showDialogue(scene) {

    nextButton.style.display =
        "block";

    nextButton.textContent =
        "Continuar";

    nextButton.onclick = () => {

        playMainMusic();

        showScene(
            scene.next
        );
    };
}


// ==================================================
// INTRODUCCIÓN
// ==================================================

function showIntro(scene) {

    gameScreenElement.classList.add(
        "intro-scene"
    );

    hudElement.style.display =
        "none";

    nextButton.style.display =
        "block";

    nextButton.textContent =
        "Continuar";

    nextButton.onclick = () => {

        /*
            La música empieza aquí porque
            ya hubo interacción del usuario.
        */

        playMainMusic();

        showScene(
            scene.next
        );
    };
}


// ==================================================
// ESCENAS INFORMATIVAS
// ==================================================

function showInfo(scene) {

    gameScreenElement.classList.add(
        "info-scene"
    );

    portraitElement.style.display =
        "none";

    hudElement.style.display =
        "none";

    dialogueBoxElement.style.display =
        "block";

    nextButton.style.display =
        "block";

    nextButton.textContent =
        "Continuar";

    nextButton.onclick = () => {

        playMainMusic();

        showScene(
            scene.next
        );
    };
}


// ==================================================
// PREGUNTAS
// ==================================================

function showQuestion(scene) {

    scene.answers.forEach(
        answer => {

            const button =
                document.createElement(
                    "button"
                );

            button.textContent =
                answer.text;

            button.onclick = () => {

                playMainMusic();

                checkAnswer(
                    answer
                );
            };

            optionsElement.appendChild(
                button
            );
        }
    );
}


// ==================================================
// COMPROBAR RESPUESTA
// ==================================================

function checkAnswer(answer) {

    if (answer.correct) {

        showScene(
            answer.next
        );

        return;
    }


    loseLife();

    updateHUD();


    if (gameState.gameOver) {

        showGameOver();

        return;
    }


    feedbackElement.textContent =
        `No es correcto. Inténtalo nuevamente. Te quedan ${gameState.lives} vidas.`;
}


// ==================================================
// GAME OVER
// ==================================================

function showGameOver() {

    gameScreenElement.classList.add(
        "game-over"
    );


    // Cambiar música

    playGameOverMusic();


    // Cambiar fondo

    backgroundElement.src =
        GAME_OVER_BACKGROUND;


    // Ocultar interfaz normal

    portraitElement.style.display =
        "none";

    dialogueBoxElement.style.display =
        "none";

    hudElement.style.display =
        "none";


    // Texto

    speakerElement.textContent =
        "";

    textElement.textContent =
        "Te mandaron a silenciar";

    feedbackElement.textContent =
        "";

    optionsElement.innerHTML =
        "";

    nextButton.style.display =
        "none";


    // Botón

    const restartButton =
        document.createElement(
            "button"
        );

    restartButton.textContent =
        "Reintentar evaluación";

    restartButton.onclick = () => {

        restartEvaluation();
    };

    optionsElement.appendChild(
        restartButton
    );
}


// ==================================================
// FINAL
// ==================================================

function showEnding(scene) {

    optionsElement.innerHTML =
        "";

    feedbackElement.textContent =
        "";

    nextButton.style.display =
        "none";


    const restartButton =
        document.createElement(
            "button"
        );

    restartButton.textContent =
        "Jugar nuevamente";

    restartButton.onclick = () => {

        /*
            Si terminó el juego normalmente,
            detenemos y reiniciamos la música
            antes de comenzar todo de nuevo.
        */

        mainMusic.pause();
        mainMusic.currentTime = 0;

        gameOverMusic.pause();
        gameOverMusic.currentTime = 0;

        startGame();
    };

    optionsElement.appendChild(
        restartButton
    );
}