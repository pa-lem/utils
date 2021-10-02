const shuffle = array => array.sort(() => Math.random() > 0.5 ? 1 : -1);

module.exports = shuffle;