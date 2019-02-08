const User = require("../schema/schemaUser.js");
const passwordHash = require("password-hash");

const show = (req, res) => {
    User.find()
        .sort({name: 1})
        .then(users => res.json(users));
};

const create = (req, res) => {
    if (!req.body.email || !req.body.password) {
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
                                text: "User already exists",
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
                            text: "Internal error",
                        });
                        break;
                    case 204:
                        res.status(204).json({
                            text: "Email already exists",
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

const store = (req, res) => {
    const updatedUser = {
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        admin: req.body.admin,
    };

    User.findByIdAndUpdate(req.params.id, updatedUser, {new: true})
        .then(user => res.json(user))
        .catch(err => res.status(400).send(err));
};

const destroy = (req, res) => {
    User.findById(req.params.id)
        .then(user => user.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json(err));
};

// Exporting methods
exports.show = show;
exports.login = login;
exports.create = create;
exports.store = store;
exports.destroy = destroy;
