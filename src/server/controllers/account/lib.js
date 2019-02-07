const User = require("../../schema/schemaUser.js");
const passwordHash = require("password-hash");

const signup = (req, res) => {
    if (!req.body.email || !req.body.password) {
        // In case nothing is submitted
        res.status(400).json({
            text: "Invalid request",
        });
    } else {
        let user = {
                name: req.body.name,
                surname: req.body.surname,
                admin: req.body.admin,
                email: req.body.email,
                password: passwordHash.generate(req.body.password),
            },
            findUser = new Promise((resolve, reject) => {
                User.findOne(
                    {
                        email: user.email,
                    },
                    (err, result) => {
                        if (err) {
                            reject(500);
                        } else if (result) {
                            res.status(204).json({
                                text: "Empty content",
                            });
                        } else {
                            resolve(true);
                        }
                    },
                );
            });

        findUser.then(
            () => {
                let _u = new User(user);

                _u.save((err, usr) => {
                    if (err) {
                        res.status(500).json({
                            text: "Internal error",
                        });
                    } else {
                        res.status(200).json({
                            text: "Success",
                            token: usr.getToken(),
                        });
                    }
                });
            },
            error => {
                switch (error) {
                    case 500:
                        res.status(500).json({
                            text: "Internal error",
                        });
                        break;
                    case 204:
                        res.status(204).json({
                            text: "Mail adress already exist",
                        });
                        break;
                    default:
                        res.status(500).json({
                            text: "Internal error",
                        });
                }
            },
        );
    }
};

const login = (req, res) => {
    if (!req.body.email || !req.body.password) {
        // Le cas où l'email ou bien le password ne serait pas soumit ou nul
        res.status(400).json({
            text: "Invalid request",
        });
    } else {
        User.findOne(
            {
                email: req.body.email,
            },
            (err, user) => {
                if (err) {
                    res.status(500).json({
                        text: "Internal error",
                    });
                } else if (!user) {
                    res.status(401).json({
                        text: "User does not exist",
                    });
                } else if (user.authenticate(req.body.password)) {
                    res.status(200).json({
                        token: user.getToken(),
                        text: "You're in baby",
                    });
                } else {
                    res.status(401).json({
                        text: "Password error",
                    });
                }
            },
        );
    }
};

const deleteuser = req => {
    let querymail = {email: req.body.email};

    User.findOneAndDelete(querymail, (err, res) => {
        res.status(201).send(res);
        console.log("email delete");
    });
};
//   User.deleteOne({email: req.body.email},
//     (err, result) => {
//     if (err){
//
//     return res.send(500, err)
//     }
//
//     else{
//
//     res.send('A darth vader quote got deleted')
//   }
//   })
//
//     .then(res => {
//     if (res.ok) return res.send(res)
//   }).catch(err => {
//     res.send(500, err)
//   })
//

// On exporte nos deux fonctions

exports.login = login;
exports.signup = signup;
exports.deleteuser = deleteuser;
