const songDecoder = (song) => {
  return song.replace(/^(WUB)*|(WUB)*$/g, '')
    .replace(/(WUB)+/g, ' ');
}

module.exports = {
  songDecoder
};
