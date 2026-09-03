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

import { PasswordResetConfirmationEmailProps } from "./password-reset-confirmation.js";

export default function PasswordResetConfirmationEmail({
  name,
  appName,
}: PasswordResetConfirmationEmailProps) {
  return (
    <Html>
      <Head />

      <Preview>Your {appName} password has been successfully reset.</Preview>

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
              Your password has been reset
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
              Hi {name},
            </Text>

            <Text
              style={{
                margin: "0 0 28px",
                fontSize: "14px",
                lineHeight: "22px",
                color: "#4b5563",
              }}
            >
              Your {appName} password has been successfully reset. You can now sign in using your
              new password.
            </Text>

            {/* Success message */}
            <Section
              style={{
                margin: "0 0 28px",
                padding: "20px",
                backgroundColor: "#f0fdf4",
                border: "1px solid #bbf7d0",
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              <Text
                style={{
                  margin: "0 0 6px",
                  fontSize: "14px",
                  lineHeight: "20px",
                  fontWeight: 600,
                  color: "#166534",
                }}
              >
                Password reset successful
              </Text>

              <Text
                style={{
                  margin: 0,
                  fontSize: "13px",
                  lineHeight: "20px",
                  color: "#15803d",
                }}
              >
                Your old password can no longer be used to sign in.
              </Text>
            </Section>

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
                If you did not reset your password, your account may be at risk. Please secure your
                account immediately and contact our support team.
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
              Please do not reply to this email.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
