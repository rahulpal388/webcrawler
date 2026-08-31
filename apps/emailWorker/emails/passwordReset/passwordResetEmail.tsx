import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { PasswordResetEmailProps } from "./passwordReset.js";

export default function PasswordResetEmail({
  username,
  otp,
  expireIn,
  appName,
}: PasswordResetEmailProps) {
  const expirationText = expireIn === 1 ? "1 minute" : `${expireIn} minutes`;

  return (
    <Html>
      <Head />

      <Preview>Your {appName} password reset code</Preview>

      <Body
        style={{
          margin: 0,
          padding: "40px 20px",
          backgroundColor: "#f5f6f8",
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        }}
      >
        <Container
          style={{
            width: "100%",
            maxWidth: "560px",
            margin: "0 auto",
            backgroundColor: "#ffffff",
            border: "1px solid #e5e7eb",
            borderRadius: "12px",
            overflow: "hidden",
          }}
        >
          {/* Header */}
          <Section
            style={{
              padding: "24px 32px",
              borderBottom: "1px solid #e5e7eb",
            }}
          >
            <Text
              style={{
                margin: 0,
                fontSize: "20px",
                lineHeight: "28px",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "#111827",
              }}
            >
              {appName}
            </Text>
          </Section>

          {/* Main content */}
          <Section
            style={{
              padding: "36px 32px",
            }}
          >
            <Text
              style={{
                margin: "0 0 10px",
                fontSize: "11px",
                lineHeight: "16px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                color: "#6b7280",
              }}
            >
              PASSWORD RESET
            </Text>

            <Heading
              as="h1"
              style={{
                margin: "0 0 20px",
                fontSize: "26px",
                lineHeight: "34px",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "#111827",
              }}
            >
              Reset your password
            </Heading>

            <Text
              style={{
                margin: "0 0 8px",
                fontSize: "15px",
                lineHeight: "24px",
                fontWeight: 500,
                color: "#111827",
              }}
            >
              Hi {username},
            </Text>

            <Text
              style={{
                margin: "0 0 28px",
                fontSize: "14px",
                lineHeight: "22px",
                color: "#4b5563",
              }}
            >
              We received a request to reset your {appName} password. Enter the verification code
              below to continue.
            </Text>

            {/* Verification code */}
            <Section
              style={{
                margin: "0 0 16px",
                padding: "24px",
                textAlign: "center",
                backgroundColor: "#f9fafb",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
              }}
            >
              <Text
                style={{
                  margin: "0 0 12px",
                  fontSize: "11px",
                  lineHeight: "16px",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  color: "#6b7280",
                }}
              >
                VERIFICATION CODE
              </Text>

              <Text
                style={{
                  margin: 0,
                  fontSize: "32px",
                  lineHeight: "40px",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  color: "#111827",
                }}
              >
                {otp}
              </Text>
            </Section>

            <Text
              style={{
                margin: "0 0 28px",
                textAlign: "center",
                fontSize: "13px",
                lineHeight: "20px",
                color: "#6b7280",
              }}
            >
              This code expires in{" "}
              <strong
                style={{
                  fontWeight: 600,
                  color: "#374151",
                }}
              >
                {expirationText}
              </strong>
              .
            </Text>

            {/* Security notice */}
            <Section
              style={{
                padding: "16px",
                backgroundColor: "#fff7ed",
                border: "1px solid #fed7aa",
                borderRadius: "8px",
              }}
            >
              <Text
                style={{
                  margin: 0,
                  fontSize: "13px",
                  lineHeight: "20px",
                  color: "#9a3412",
                }}
              >
                If you didn't request a password reset, you can safely ignore this email. Never
                share this code with anyone.
              </Text>
            </Section>
          </Section>

          {/* Footer */}
          <Section
            style={{
              padding: "20px 32px",
              backgroundColor: "#f9fafb",
              borderTop: "1px solid #e5e7eb",
            }}
          >
            <Text
              style={{
                margin: "0 0 8px",
                fontSize: "11px",
                lineHeight: "17px",
                color: "#9ca3af",
              }}
            >
              This is an automated security email from {appName}.
            </Text>

            <Text
              style={{
                margin: 0,
                fontSize: "11px",
                lineHeight: "17px",
                color: "#9ca3af",
              }}
            >
              If you did not request this code, no action is required.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
