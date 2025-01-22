export function handleUser(user) {
  if (!user) return null;
  user.id = user._id;
  delete user._id;
  delete user.__v;
  delete user.password;
  delete user.createdAt;
  delete user.updatedAt;
  return user;
}
