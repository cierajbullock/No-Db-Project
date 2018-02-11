let music = [];

let id = 0;

module.exports = {
    create: (req, res) => {
        let newMusic = req.body;
        newMusic.id = id;
        id++;
        music.push(req.body);
        res.status(200).send(music);
    },
    read: (req, res) => {
        res.status(200).send(music);
    },
    update: (req, res) => {
        const updateSong = req.params.id;
        let index = music.findIndex(song => song.id == updateSong);
        music [index] = {
            song: updateSong
        };
    res.send(music);
    },

    delete: (req, res) => {
        const deleteMusic = req.params.id;
        songID = music.findIndex(song => song.id == deleteMusic);
        music.splice(deleteMusic, 1);
        res.status(200).send(music);
    }
}