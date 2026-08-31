export const EmailTypes = {
  WELCOME: "welcome",
  PASSWORD_RESET: "password_reset",
  LOGIN_ALERT: "login_alert",
  OTP: "otp",
} as const;

export type EmailType =
  typeof EmailTypes[keyof typeof EmailTypes];



export type EmailStreamMessageType<T extends EmailType = EmailType> = {
  // eventId is a unique identifier for the email event, which can be used for tracking and logging purposes.
  eventId: string;
  type: T;
  payload: EmailPayloadMap[T];
  createdAt: Date;
};

export type EmailStreamMessage = {
  [K in EmailType]: EmailStreamMessageType<K>;
}[EmailType];

interface EmailPayloadMap {
  [EmailTypes.WELCOME]: WelcomePayload;
  [EmailTypes.OTP]: OtpPayload;
  [EmailTypes.PASSWORD_RESET]: PasswordResetPayload;
  [EmailTypes.LOGIN_ALERT]: LoginAlertPayload;
}

interface WelcomePayload {
  email: string;
  name: string;
}

interface PasswordResetPayload {
  email: string;
  name: string;
  expireIn: number;
  otp: string;
}

interface LoginAlertPayload {
  email: string;
  name: string;
  deviceName: string | null;
  location: string | null;
  ipAddress: string | null;
}

interface OtpPayload {
  username: string;
  email: string;
  otp: string;
  expireIn: number;
}

