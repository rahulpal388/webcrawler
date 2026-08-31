import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { LoginAlertEmailProps } from "./loginAlert.js";

export default function LoginAlertEmail({
  name,
  deviceName,
  location,
  ipAddress,
}: LoginAlertEmailProps) {
  const displayDevice = deviceName?.trim() || "Unknown device";
  const displayLocation = location?.trim() || "Location not available";
  const displayIpAddress = ipAddress?.trim() || "IP address not available";

  return (
    <Html>
      <Head />

      <Preview>A new login was detected on your Crawllytics account.</Preview>

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
              Crawllytics
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
              SECURITY ALERT
            </Text>

            <Heading
              as="h1"
              style={{
                margin: "0 0 24px",
                fontSize: "26px",
                lineHeight: "34px",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "#111827",
              }}
            >
              New login detected
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
                margin: "0 0 24px",
                fontSize: "14px",
                lineHeight: "22px",
                color: "#4b5563",
              }}
            >
              We detected a new sign-in to your Crawllytics account. Here are the available details:
            </Text>

            {/* Login details */}
            <Section
              style={{
                margin: "0 0 24px",
                padding: "20px",
                backgroundColor: "#f9fafb",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
              }}
            >
              <Text
                style={{
                  margin: "0 0 18px",
                  fontSize: "13px",
                  lineHeight: "20px",
                  fontWeight: 600,
                  color: "#111827",
                }}
              >
                Login details
              </Text>

              {/* Device */}
              <Text
                style={{
                  margin: "0 0 14px",
                  fontSize: "12px",
                  lineHeight: "18px",
                  color: "#6b7280",
                }}
              >
                Device
                <br />
                <strong
                  style={{
                    fontSize: "14px",
                    lineHeight: "20px",
                    fontWeight: 500,
                    color: "#111827",
                  }}
                >
                  {displayDevice}
                </strong>
              </Text>

              {/* Location */}
              <Text
                style={{
                  margin: "0 0 14px",
                  fontSize: "12px",
                  lineHeight: "18px",
                  color: "#6b7280",
                }}
              >
                Location
                <br />
                <strong
                  style={{
                    fontSize: "14px",
                    lineHeight: "20px",
                    fontWeight: 500,
                    color: "#111827",
                  }}
                >
                  {displayLocation}
                </strong>
              </Text>

              {/* IP address */}
              <Text
                style={{
                  margin: 0,
                  fontSize: "12px",
                  lineHeight: "18px",
                  color: "#6b7280",
                }}
              >
                IP address
                <br />
                <strong
                  style={{
                    fontSize: "14px",
                    lineHeight: "20px",
                    fontWeight: 500,
                    color: "#111827",
                    wordBreak: "break-word",
                  }}
                >
                  {displayIpAddress}
                </strong>
              </Text>
            </Section>

            <Text
              style={{
                margin: "0 0 20px",
                fontSize: "14px",
                lineHeight: "22px",
                color: "#4b5563",
              }}
            >
              If you recognize this activity, you can safely ignore this email.
            </Text>

            {/* Security notice */}
            <Section
              style={{
                padding: "14px 16px",
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
                If you don't recognize this login, change your password and review your active
                sessions to protect your account.
              </Text>
            </Section>

            <Hr
              style={{
                margin: "28px 0 20px",
                border: 0,
                borderTop: "1px solid #e5e7eb",
              }}
            />

            {/* Support */}
            <Text
              style={{
                margin: 0,
                fontSize: "13px",
                lineHeight: "20px",
                color: "#6b7280",
              }}
            >
              Need help? Contact our support team at{" "}
              <a
                href="mailto:support@crawllytics.com"
                style={{
                  color: "#fe4f00",
                  textDecoration: "none",
                  fontWeight: 500,
                }}
              >
                support@crawllytics.com
              </a>
              .
            </Text>
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
                margin: "0 0 10px",
                fontSize: "11px",
                lineHeight: "17px",
                color: "#9ca3af",
              }}
            >
              This is an automated security notification from Crawllytics. You received this email
              because a new login was detected on your account.
            </Text>

            <Text
              style={{
                margin: 0,
                fontSize: "11px",
                lineHeight: "17px",
                color: "#9ca3af",
              }}
            >
              © {new Date().getFullYear()} Crawllytics. All rights reserved.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
