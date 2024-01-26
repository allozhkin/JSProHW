const albums = [
  { title: "GRODT", artist: "50 cent", year: 1993 },
  { title: "Relapse", artist: "Eminem", year: 2005 },
  { title: "2Pack", artist: "2pack", year: 2020 },
];

const musicCollection = {
  albums: [...albums],
  [Symbol.iterator]: function () {
    let counter = 0;
    return {
      next: () => {
        if (counter >= this.albums.length) {
          return { done: true };
        } else {
          return { value: this.albums[counter++], done: false };
        }
      },
    };
  },
};
for (const album of albums) {
  console.log(album.artist, album.title, album.year);
}
