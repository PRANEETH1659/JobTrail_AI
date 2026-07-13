const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    company: {
      type: String,
      required: [true, 'Please add a company name'],
    },
    role: {
      type: String,
      required: [true, 'Please add a role/job title'],
    },
    jdText: {
      type: String,
      default: '',
    },
    jdLink: {
      type: String,
      default: '',
    },
    status: {
      type: String,
      enum: ['wishlist', 'applied', 'oa', 'interview', 'offer', 'rejected'],
      default: 'wishlist',
    },
    appliedDate: {
      type: Date,
    },
    notes: {
      type: String,
      default: '',
    },
    matchScore: {
      type: Number,
      default: null,
    },
    missingSkills: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Application', ApplicationSchema);
