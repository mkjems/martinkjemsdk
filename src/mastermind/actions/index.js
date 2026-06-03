export const onPegClick = (id) => ({
	type: 'SHOW_COLOR_PICKER',
	id
});

export const hideColorPicker = () => ({
	type: 'HIDE_COLOR_PICKER'
});

export const onChooseColor = (name) => ({
	type: 'CHOSE_THIS_COLOR',
	name
});

export const beginNewRow = () => ({
	type: 'BEGIN_NEW_ROW'
});

export const resetGame = () => ({
	type: 'RESET_GAME'
});

export const beginNewGame = () => ({
	type: 'BEGIN_NEW_GAME'
});

export const giveFeedback = () => ({
	type: 'GIVE_FEEDBACK'
});

export const onAdvanceSelector = (pegs) => ({
	type: 'ADVANCE_SELECTOR',
	pegs
});

export const onHideSecretCode = () => ({
	type: 'HIDE_SECRET_CODE'
});

export const revealSecretCode = () => ({
	type: 'REVEAL_SECRET_CODE'
});

export const onToggleSecretCode = () => ({
	type: 'TOGGLE_SECRET_CODE'
});

export const randomizeCode = () => ({
	type: 'RANDOMIZE_SECRET_CODE'
})

export const gameBegin = () => ({
	type: 'GAME_BEGIN'
})

export const gameWin = () => ({
	type: 'GAME_WIN'
});

export const gameLoose = () => ({
	type: 'GAME_LOOSE'
});

export const gameGiveUp = () => ({
	type: 'GAME_GIVE_UP'
});
export const gameIntro = () => ({
	type: 'GAME_INTRO'
});

export const toggleRules = () => ({
	type: 'TOGGLE_RULES'
});


