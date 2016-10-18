export const onPegClick = (id) => ({
	type: 'SHOW_COLOR_PICKER',
	id
});

export const onChooseColor = (name) => ({
	type: 'CHOSE_THIS_COLOR',
	name
});

export const onBeginNewRow = () => ({
	type: 'BEGIN_NEW_ROW'
});

export const resetGame = () => ({
	type: 'RESET_GAME'
});

export const beginNewGame = () => ({
	type: 'BEGIN_NEW_GAME'
});

export const onEnterRow = () => ({
	type: 'ENTER_ROW'
});

export const onGiveFeedback = () => ({
	type: 'GIVE_FEEDBACK'
});

export const onAdvanceSelector = () => ({
	type: 'ADVANCE_SELECTOR'
})