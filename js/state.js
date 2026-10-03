//constantes de estado del personajeee

export const gameState = {

    lives: 3,
    maxLives: 3,
    currentScene: "inicio",
    gameOver: false

};


//NO OLVIDAR NOMBRE, el nombre es selfexplaining 
export function loseLife(){
    gameState.lives--;

    if(gameState.lives <= 0){
        gameState.lives = 0;
        gameState.gameOver = true;
    }
}

//Resetea el juego si pierdes 
export function resetGame(){
    gameState.lives = gameState.maxLives;
    gameState.currentScene = "inicio";
    gameState.gameOver = false;

}