const User = require("../schema/schemaUser.js");
const passwordHash = require("password-hash");

const signup = (req, res) => {
    if (!req.body.email || !req.body.password) {
        // In case nothing is submitted
        res.status(400).json({
            text: "Requête invalide",
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
                                text: "Content Vide",
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
                            text: "Erreur interne",
                        });
                    } else {
                        res.status(200).json({
                            text: "Succes",
                            token: usr.getToken(),
                        });
                    }
                });
            },
            error => {
                switch (error) {
                    case 500:
                        res.status(500).json({
                            text: "Erreur interne",
                        });
                        break;
                    case 204:
                        res.status(204).json({
                            text: "L'adresse email existe déjà",
                        });
                        break;
                    default:
                        res.status(500).json({
                            text: "Erreur interne",
                        });
                }
            },
        );
    }
};

const login = (req, res) => {
    if (!req.body.email || !req.body.password) {
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
                        text: "Authentification succesful",
                    });
                } else {
                    res.status(401).json({
                        text: "Password incorrects",
                    });
                }
            },
        );
    }
};

const update = () => {};

const suppr = () => {};

// Exporting methods
exports.login = login;
exports.signup = signup;
exports.update = update;
exports.suppr = suppr;
