// components/emails/ContactConfirmationEmail.tsx
// Email yang dikirim ke USER setelah submit form

import * as React from "react";
import { Html, Head, Preview, Body, Container, Heading, Text, Hr, Section, Link } from "@react-email/components";

interface ContactConfirmationEmailProps {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  budget?: string;
  message: string;
}

export function ContactConfirmationEmail({ name, email, phone, company, service, budget, message }: ContactConfirmationEmailProps) {
  const firstName = name.split(" ")[0];

  return (
    <Html>
      <Head />
      <Preview>Thank you for contacting Harika Studio - We&apos;ll be in touch soon</Preview>
      <Body style={bodyStyle}>
        <Container style={containerStyle}>
          {/* Header */}
          <Section style={headerStyle}>
            <div style={brandContainerStyle}>
              <div style={dotStyle}></div>
              <Text style={brandTextStyle}>HARIKA STUDIO</Text>
            </div>

            <Heading style={headingStyle}>
              Thank You, <span style={accentTextStyle}>{firstName}</span>!
            </Heading>

            <Text style={subheadingStyle}>We&apos;ve received your message and we&apos;re excited to learn more about your project.</Text>
          </Section>

          {/* What's Next Section */}
          <Section style={contentSectionStyle}>
            <Text style={sectionTitleStyle}>What Happens Next?</Text>

            <table style={listContainerStyle}>
              <tr>
                <td style={listItemStyle}>
                  <div style={stepNumberStyle}>1</div>
                </td>
                <td>
                  <Text style={listTextStyle}>
                    <strong style={strongTextStyle}>Review</strong>
                    <br />
                    Our team will carefully review your project details
                  </Text>
                </td>
              </tr>
              <tr>
                <td style={listItemStyle}>
                  <div style={stepNumberStyle}>2</div>
                </td>
                <td>
                  <Text style={listTextStyle}>
                    <strong style={strongTextStyle}>Response</strong>
                    <br />
                    We&apos;ll get back to you within 24 hours
                  </Text>
                </td>
              </tr>
              <tr>
                <td style={listItemStyle}>
                  <div style={stepNumberStyle}>3</div>
                </td>
                <td>
                  <Text style={listTextStyle}>
                    <strong style={strongTextStyle}>Discovery Call</strong>
                    <br />
                    Schedule a call to discuss your vision in detail
                  </Text>
                </td>
              </tr>
            </table>
          </Section>

          {/* Your Submission Section */}
          <Section style={summarySectionStyle}>
            <Text style={sectionTitleStyle}>Your Submission Summary</Text>

            <table style={summaryTableStyle}>
              <tbody>
                <tr>
                  <td style={summaryLabelStyle}>Name:</td>
                  <td style={summaryValueStyle}>{name}</td>
                </tr>
                <tr>
                  <td style={summaryLabelStyle}>Email:</td>
                  <td style={summaryValueStyle}>{email}</td>
                </tr>
                {phone && (
                  <tr>
                    <td style={summaryLabelStyle}>Phone:</td>
                    <td style={summaryValueStyle}>{phone}</td>
                  </tr>
                )}
                {company && (
                  <tr>
                    <td style={summaryLabelStyle}>Company:</td>
                    <td style={summaryValueStyle}>{company}</td>
                  </tr>
                )}
                {service && (
                  <tr>
                    <td style={summaryLabelStyle}>Service:</td>
                    <td style={summaryValueStyle}>{service}</td>
                  </tr>
                )}
                {budget && (
                  <tr>
                    <td style={summaryLabelStyle}>Budget:</td>
                    <td style={summaryValueStyle}>{budget}</td>
                  </tr>
                )}
              </tbody>
            </table>

            <div style={messageBoxStyle}>
              <Text style={messageLabel}>Your Message:</Text>
              <Text style={messageText}>{message}</Text>
            </div>
          </Section>

          {/* Stats Section */}
          <Section style={statsSectionStyle}>
            <table style={statsTableStyle}>
              <tbody>
                <tr>
                  <td style={statCellStyle}>
                    <Text style={statNumberStyle}>24h</Text>
                    <Text style={statLabelStyle}>Response Time</Text>
                  </td>
                  <td style={statCellStyle}>
                    <Text style={statNumberStyle}>15+</Text>
                    <Text style={statLabelStyle}>Projects Done</Text>
                  </td>
                  <td style={statCellStyle}>
                    <Text style={statNumberStyle}>100%</Text>
                    <Text style={statLabelStyle}>Satisfaction</Text>
                  </td>
                </tr>
              </tbody>
            </table>
          </Section>

          {/* CTA Section */}
          <Section style={ctaSectionStyle}>
            <Text style={paragraphStyle}>Meanwhile, feel free to explore our portfolio and see what we&apos;ve been working on.</Text>

            <table style={buttonContainerStyle}>
              <tbody>
                <tr>
                  <td style={{ textAlign: "center" }}>
                    <Link href="https://harikastudio.com/portfolio" style={buttonStyle}>
                      View Our Work
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </Section>

          {/* Footer */}
          <Section style={footerStyle}>
            <Hr style={hrStyle} />

            <Text style={footerTextStyle}>Need urgent assistance? Reach us directly:</Text>
            <Text style={footerContactStyle}>
              📧 hello@harikastudio.com
              <br />
              📱 +90 542 179 3483
            </Text>

            <Text style={footerTextStyle}>© 2024 Harika Studio. All rights reserved.</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

// Styles
const bodyStyle: React.CSSProperties = {
  backgroundColor: "#0A0A0A",
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  padding: "32px 16px",
};

const containerStyle: React.CSSProperties = {
  maxWidth: "600px",
  margin: "0 auto",
};

const headerStyle: React.CSSProperties = {
  backgroundColor: "#131313",
  border: "1px solid rgba(229, 145, 86, 0.2)",
  borderRadius: "16px 16px 0 0",
  padding: "32px",
};

const brandContainerStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  marginBottom: "24px",
};

const dotStyle: React.CSSProperties = {
  width: "12px",
  height: "12px",
  backgroundColor: "#E59156",
  borderRadius: "50%",
  display: "inline-block",
};

const brandTextStyle: React.CSSProperties = {
  color: "#ffffff",
  fontSize: "14px",
  fontWeight: "500",
  margin: "0",
  letterSpacing: "0.5px",
};

const headingStyle: React.CSSProperties = {
  color: "#ffffff",
  fontSize: "32px",
  fontWeight: "300",
  marginBottom: "16px",
  marginTop: "0",
  lineHeight: "1.2",
};

const accentTextStyle: React.CSSProperties = {
  color: "#E59156",
};

const subheadingStyle: React.CSSProperties = {
  color: "rgba(246, 246, 246, 0.7)",
  fontSize: "16px",
  lineHeight: "1.6",
  margin: "0",
};

const contentSectionStyle: React.CSSProperties = {
  backgroundColor: "#131313",
  borderLeft: "1px solid rgba(229, 145, 86, 0.2)",
  borderRight: "1px solid rgba(229, 145, 86, 0.2)",
  padding: "32px",
};

const sectionTitleStyle: React.CSSProperties = {
  color: "#E59156",
  fontSize: "18px",
  fontWeight: "500",
  marginBottom: "20px",
  marginTop: "0",
};

const listContainerStyle: React.CSSProperties = {
  width: "100%",
  marginTop: "16px",
};

const listItemStyle: React.CSSProperties = {
  width: "48px",
  verticalAlign: "top",
  paddingBottom: "16px",
  paddingRight: "16px",
};

const stepNumberStyle: React.CSSProperties = {
  width: "32px",
  height: "32px",
  backgroundColor: "rgba(229, 145, 86, 0.1)",
  borderRadius: "50%",
  textAlign: "center",
  lineHeight: "32px",
  color: "#E59156",
  fontSize: "14px",
  fontWeight: "600",
};

const listTextStyle: React.CSSProperties = {
  color: "rgba(246, 246, 246, 0.8)",
  fontSize: "14px",
  margin: "0",
  lineHeight: "1.6",
};

const strongTextStyle: React.CSSProperties = {
  color: "#ffffff",
  fontWeight: "600",
  display: "block",
  marginBottom: "6px",
};

const summarySectionStyle: React.CSSProperties = {
  backgroundColor: "#131313",
  borderLeft: "1px solid rgba(229, 145, 86, 0.2)",
  borderRight: "1px solid rgba(229, 145, 86, 0.2)",
  padding: "32px",
  borderTop: "1px solid rgba(246, 246, 246, 0.05)",
};

const summaryTableStyle: React.CSSProperties = {
  width: "100%",
  marginBottom: "20px",
};

const summaryLabelStyle: React.CSSProperties = {
  color: "rgba(246, 246, 246, 0.5)",
  fontSize: "13px",
  padding: "8px 16px 8px 0",
  verticalAlign: "top",
  width: "100px",
};

const summaryValueStyle: React.CSSProperties = {
  color: "rgba(246, 246, 246, 0.9)",
  fontSize: "14px",
  padding: "8px 0",
};

const messageBoxStyle: React.CSSProperties = {
  backgroundColor: "rgba(229, 145, 86, 0.05)",
  border: "1px solid rgba(229, 145, 86, 0.1)",
  borderRadius: "8px",
  padding: "16px",
  marginTop: "16px",
};

const messageLabel: React.CSSProperties = {
  color: "rgba(246, 246, 246, 0.5)",
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "0.5px",
  margin: "0 0 8px 0",
};

const messageText: React.CSSProperties = {
  color: "rgba(246, 246, 246, 0.9)",
  fontSize: "14px",
  lineHeight: "1.6",
  margin: "0",
  whiteSpace: "pre-wrap",
};

const statsSectionStyle: React.CSSProperties = {
  background: "linear-gradient(135deg, rgba(229, 145, 86, 0.1) 0%, #131313 100%)",
  borderLeft: "1px solid rgba(229, 145, 86, 0.2)",
  borderRight: "1px solid rgba(229, 145, 86, 0.2)",
  padding: "32px",
};

const statsTableStyle: React.CSSProperties = {
  width: "100%",
  textAlign: "center",
};

const statCellStyle: React.CSSProperties = {
  width: "33.33%",
  padding: "8px",
};

const statNumberStyle: React.CSSProperties = {
  color: "#ffffff",
  fontSize: "28px",
  fontWeight: "300",
  margin: "0 0 4px 0",
};

const statLabelStyle: React.CSSProperties = {
  color: "rgba(246, 246, 246, 0.6)",
  fontSize: "12px",
  margin: "0",
};

const ctaSectionStyle: React.CSSProperties = {
  backgroundColor: "#131313",
  borderLeft: "1px solid rgba(229, 145, 86, 0.2)",
  borderRight: "1px solid rgba(229, 145, 86, 0.2)",
  padding: "32px",
  textAlign: "center",
};

const paragraphStyle: React.CSSProperties = {
  color: "rgba(246, 246, 246, 0.9)",
  fontSize: "16px",
  lineHeight: "1.6",
  marginBottom: "16px",
};

const buttonContainerStyle: React.CSSProperties = {
  margin: "24px auto 0",
};

const buttonStyle: React.CSSProperties = {
  backgroundColor: "#E59156",
  color: "#ffffff",
  padding: "14px 32px",
  borderRadius: "50px",
  fontSize: "14px",
  fontWeight: "500",
  textDecoration: "none",
  display: "inline-block",
};

const footerStyle: React.CSSProperties = {
  backgroundColor: "#131313",
  border: "1px solid rgba(229, 145, 86, 0.2)",
  borderRadius: "0 0 16px 16px",
  padding: "32px",
  textAlign: "center",
};

const hrStyle: React.CSSProperties = {
  borderColor: "rgba(246, 246, 246, 0.1)",
  margin: "0 0 24px 0",
};

const footerTextStyle: React.CSSProperties = {
  color: "rgba(246, 246, 246, 0.5)",
  fontSize: "12px",
  margin: "8px 0",
};

const footerContactStyle: React.CSSProperties = {
  color: "rgba(246, 246, 246, 0.7)",
  fontSize: "13px",
  margin: "12px 0",
  lineHeight: "1.6",
};
