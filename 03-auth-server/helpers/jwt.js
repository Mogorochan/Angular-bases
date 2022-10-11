const jwt = require('jsonwebtoken');

const generarJWT = (uid, name ) => {

    const payload = {uid, name}; 

    return new Promise((resolve, reject) => {
         jwt.sign(payload, process.env.SECRET_JWT_SEED, {
        expiresIn: '12h'
    }, (err, token)=> {
        if (err) {
            //Está todo mal
            console.log(err);
            reject( err);
        } else {
            //Bien!
            resolve( token );
        }
    });
    })

}

module.exports =  {
    generarJWT
}