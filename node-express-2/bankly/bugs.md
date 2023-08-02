## Bug #1: Incomplete Error Handling in User Model

**Description:**
The `User.get` method in the `user.js` model does not correctly handle the case when no user is found in the database. Instead of throwing an `ExpressError` with status 404, it creates an instance of `ExpressError` but does not throw it, leading to the wrong response sent to the client.
-Update user.js model get method 

## Bug #2: Insecure Password Handling

**Description:**
The `User.authenticate` method in the `user.js` model does not check whether the `username` and `password` parameters are provided. It assumes they are always provided, leading to potential security vulnerabilities.
-Update auth.js router post route

## Bug #3: Missing Return Statement

**Description:**
The `User.register` method in the `user.js` model does not include a return statement when a user with a duplicate username is found. This leads to incorrect behavior and potential data integrity issues.

## Bug #4: Inconsistent Handling of Admin Status

**Description:**
The `createTokenForUser` function in `createToken.js` incorrectly defaults the `admin` parameter to `false` if not provided. However, the `User.register` method and the `/auth/login` route in `auth.js` set the admin status to `null` instead of `false` if the user is not an admin. This inconsistency can lead to unexpected behavior.

## Bug #5: Insecure Partial Update

**Description:**
The `User.update` method in the `user.js` model does not perform proper validation on the data to be updated. It accepts any key-value pairs, including potentially sensitive fields like `admin`, which should only be updated by admin users.
