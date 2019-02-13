// Tag Model
const Tag = require("../Models/Tag.js");

// @route   GET tags
// @desc    get All tags
// @access  Public
const list = (req, res) => {
    Tag.find()
        .sort({title: 1})
        .then(tags => res.json(tags));
};

// @route   POST tag
// @desc    Create A tag
// @access  Admin
const create = (req, res) => {
    const newTag = new Tag({
        tag: req.body.tag,
    });

    newTag
        .save()
        .then(tag => res.json(tag))
        .catch(err => res.status(400).send(err));
};

// @route   PUT tag/:id
// @desc    Update A tag
// @access  Admin
const edit = (req, res) => {
    Tag.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then(tag => res.json(tag))
        .catch(err => res.status(400).send(err));
};

// @route   DELETE tag/:id
// @desc    Delete A book
// @access  Admin
const destroy = (req, res) => {
    Tag.findById(req.params.id)
        .then(tag => tag.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json(err));
};

// Exports des fonctions
exports.list = list;
exports.create = create;
exports.edit = edit;
exports.destroy = destroy;
