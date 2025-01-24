export function handleUser(user) {
  if (!user) return null;
  user._doc.id = user._doc._id;
  delete user._doc._id;
  delete user._doc.__v;
  delete user._doc.password;
  delete user._doc.createdAt;
  delete user._doc.updatedAt;
  return user;
}
