import ChirpStore from './chirpstore';
import express from 'express';
import { join } from 'path';



let router = express();



router.get('/:id?', function(req, res){
    
    if (req.params.id) {
        res.send(ChirpStore.GetChirp(req.params.id))
    } else {
        res.send(ChirpStore.GetChirps());
    }
})

router.post('/submit', function(req, res) {
    ChirpStore.CreateChirp(req.body);
    res.sendStatus(200);
})

router.put('/submit/:id', function(req, res){
    const id = req.params.id;
    ChirpStore.UpdateChirp(id, req.body)
    res.sendStatus(200)

})
router.delete('/submit/:id', function(req, res) {
    const id = req.params.id;
    ChirpStore.DeleteChirp(id);
    res.sendStatus(200)
})


module.exports = router;