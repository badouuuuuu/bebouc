// Tag Model
const Tag = require("../schema/schemaTag.js");

// @route   GET tags
// @desc    get All tags
// @access  Public
const show = (req, res) => {
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
const store = (req, res) => {
    const updatedTag = {
        tag: req.body.tag,
    };

    Tag.findByIdAndUpdate(req.params.id, updatedTag, {new: true})
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
exports.show = show;
exports.create = create;
exports.store = store;
exports.destroy = destroy;
