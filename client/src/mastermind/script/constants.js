
export const PEG_COLORS = [
	'yellow',
	'green',
	'pink',
	'silver',
	'blue',
	'white',
	'red',
	'orange'
];

export const CODE_LENGTH = 4;

export const COLORS = {
	yellow: "#e5e51b",
	green: "#60c928",
	pink: "#8f65ce",
	silver: "#333333",
	blue: "#1f1fba",
	white: "#ffffff",
	red: "#ff0000",
	orange: "#ff0000",

	none: "#333333",
	select: "#666666",
}


const first_row = [{
	pegs: ['select', 'select', 'select','select'],
	feedback : ['none', 'none', 'none', 'none']
}];

const empty_row = {
	pegs: ['none', 'none', 'none','none'],
	feedback : ['none', 'none', 'none', 'none']
};

const empty_rows = new Array(9).fill(empty_row);

export const BOARD_START = [...first_row, ...empty_rows];


export const ROW_START = {
	pegs: ['none', 'none', 'none','none'],
	feedback : ['none', 'none', 'none', 'none']
}

export const TOP_VIEW_COLORS = {
	pink: {
		hat: '#d89dd0',
		self_shadow:'#cd82c3',
		highlight: '#FFF'
	},
	blue: {
		hat: 'rgb(140,179,233)',
		self_shadow:'#709bd8',
		highlight: '#FFF'
	},
	orange: {
		hat:'#f0a210',
		self_shadow:'#e2970b',
		highlight: '#FFF'
	},
	red: {
		hat:'#c85825',
		self_shadow:'#bc4b17',
		highlight: '#FFF'
	},
	silver: {
		hat:'#848484',
		self_shadow:'#787878',
		highlight: '#FFF'
	},
	white: {
		hat:'#f3f2de',
		self_shadow:'#dcdaca',
		highlight: '#FFF'
	},
	green: {
		hat:'#6cbb49',
		self_shadow:'#5fa83f',
		highlight: '#FFF'
	},
	yellow: {
		hat:'#e7eb6a',
		self_shadow:'#dada4f',
		highlight: '#FFF'
	}
}

export const SIDEWAYS_COLORS = {
	pink : {
		hat:'#d89dd0',
		stem:'#d89dd0',
		self_shadow:'#cd82c3',
		cast_shadow:'#c33db8',
		highlight:'#FFF'
	},
	blue : {
		hat:'rgb(140,179,233)',
		stem:'#8ab4eb',
		self_shadow:'#709bd8',
		cast_shadow:'#3d74c3',
		highlight:'#FFF'
	},
	orange : {
		hat:'#f0a210',
		stem:'#f0a210',
		self_shadow:'#e2970b',
		cast_shadow:'#b94b47',
		highlight:'#FFF'
	},
	red : {
		hat:'#c85825',
		stem:'#c85825',
		self_shadow:'#bc4b17',
		cast_shadow:'#7b3504',
		highlight:'#FFF'
	},
	silver : {
		hat:'#848484',
		stem:'#848484',
		self_shadow:'#787878',
		cast_shadow:'#5f5c84',
		highlight:'#FFF'
	},
	white : {
		hat:'#f3f2de',
		stem:'#f3f2de',
		self_shadow:'#dcdaca',
		cast_shadow:'#aeb7c1',
		highlight:'#FFF'
	},
	green : {
		hat:'#6cbb49',
		stem:'#6cbb49',
		self_shadow:'#5fa83f',
		cast_shadow:'#315c1c',
		highlight:'#FFF'
	},
	yellow : {
		hat:'#e7eb6a',
		stem:'#e7eb6a',
		self_shadow:'#dada4f',
		cast_shadow:'#abb617',
		highlight:'#FFF'
	}

}
