const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
    },
    email: {
      type: String,
      required: [true, 'Please add an email'],
      unique: true, // prevents duplicate emails
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        'Please add a valid email',
      ],
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
      minlength: 6,
      select: false, // Whenever we query a user, do not return the password by default
    },
    resumeText: {
      type: String,
      default: '', // Will be filled out in Phase 1 Week 2
    },
    skills: {
      type: [String],
      default: [], // Will be filled out in Phase 1 Week 2
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// Mongoose Pre-save Hook: Hash the password before saving it to the database
UserSchema.pre('save', async function (next) {
  // If the password wasn't modified, skip hashing (e.g., when updating username)
  if (!this.isModified('password')) {
    next();
  }

  // Generate a 'salt' - random characters added to the password to make the hash unique
  const salt = await bcrypt.genSalt(10);
  // Hash the password with the salt
  this.password = await bcrypt.hash(this.password, salt);
});

module.exports = mongoose.model('User', UserSchema);
