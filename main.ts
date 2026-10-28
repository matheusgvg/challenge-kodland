player.onChat("ev", function () {
    for (let index = 0; index < 5; index++) {
        for (let index = 0; index < 4; index++) {
            blocks.place(GRASS, pos(0, 0, 0))
            agent.move(FORWARD, 1)
            agent.turn(RIGHT_TURN)
        }
        agent.move(UP, 1)
    }
})
