export const onPegClick = (id) => ({
	type: 'SHOW_COLOR_PICKER',
	id
});


export const onChooseColor = (name) => ({
	type: 'CHOSE_THIS_COLOR',
	name
});

export const onBeginNewRow = () => ({
	type: 'BEGIN_NEW_ROW',
	name
});

export const onNewGame = () => ({
	type: 'RESET_GAME',
	name
});

export const beginNewGame = () => ({
	type: 'BEGIN_NEW_GAME',
	name
});