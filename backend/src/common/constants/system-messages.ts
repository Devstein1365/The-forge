export const SystemMessages = {
  // general messages
  INTERNAL_SERVER_ERROR:
    'An unexpected error occurred. Please try again later.',
  NOT_FOUND: 'The requested resource was not found.',
  UNAUTHORIZED: 'You are not authorized to access this resource.',
  FORBIDDEN: 'You do not have permission to access this resource.',
  BAD_REQUEST: 'The request was invalid or cannot be served.',
  TOO_MANY_REQUESTS:
    'You have sent too many requests in a given amount of time. Please try again later.',
  SUCCESS: 'Operation completed successfully',
  FAILURE: 'Operation failed. Please try again.',
  UPDATE_SUCCESS: 'Resource updated successfully',
  DELETE_SUCCESS: 'Resource deleted successfully',
  CREATE_SUCCESS: 'Resource created successfully',
  // authentication
  AUTH_CRUD: {
    SIGNIN_SUCCESS: 'User successfully signed in',
    SIGNIN_FAILED: 'Sign in Failed',
    SIGNUP_SUCCESS: 'User successfully signed up',
    SIGNUP_FAILED: 'Sign up Failed',
    LOGOUT_SUCCESS: 'User successfully logged out',
    LOGOUT_FAILED: 'Failed to logout',
    CHECK_AUTH_SUCCESS: 'token validated',
    CHECK_AUTH_FAILED: 'Failed to validate auth token',
    REFRESH_TOKEN_SUCCESS: 'User successfully refresh token',
    REFRESH_TOKEN_FAILED: 'Failed to get refresh token.',
    PASSWORD_RESET_EMAIL_SUCCESS: 'Password reset email sent successfully',
    PASSWORD_RESET_EMAIL_FAILED: 'Failed to send reset email',
    PASSWORD_RESET_SUCCESS: 'Password reset successfully',
    PASSWORD_RESET_FAILED: 'Failed to reset password',
    EMAIL_VERIFY_SUCCESS: 'Failed to verify email',
    EMAIL_ALREADY_VERIFIED: 'Email alfeady verified',
    EMAIL_NOT_VERIFIED: 'Email not verified',
    RESET_MAIL_SENT: 'Reset email sent',
    RESET_SUCCESS: 'Credentials successfully updated',
    RESEND_OTP_SUCCESS: 'Otp Resent successfully',
    INVALID_CREDENTIALS: 'Invalid credentials',
    INVALID_OTP: 'Invalid otp code',
  },

  USER_CRUD: {
    USER_NOT_FOUND: 'User not found',
    USER_EMAIL_EXISTS: 'Email already exists',
  },
  ROLE: {
    USER_HAS_NO_ROLES: 'User has no role',
    NOT_FOUND: 'Role not found',
    EXIST: 'Role already exist',
    RETRIEVE_SUCCESS: 'Role successfully retrieved',
    UPDATE_SUCCESS: 'Role successfully updated',
  },
};
