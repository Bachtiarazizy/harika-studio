// components/emails/AdminNotificationEmail.tsx
// Email yang dikirim ke ADMIN (Harika Studio) ketika ada form submission baru

import * as React from "react";
import { Html, Head, Preview, Body, Container, Heading, Text, Hr, Section, Link } from "@react-email/components";

interface AdminNotificationEmailProps {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  budget?: string;
  message: string;
  submittedAt: string;
}

export function AdminNotificationEmail({ name, email, phone, company, service, budget, message, submittedAt }: AdminNotificationEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>🔔 New Contact Form Submission from {name}</Preview>
      <Body style={bodyStyle}>
        <Container style={containerStyle}>
          {/* Header */}
          <Section style={headerStyle}>
            <div style={brandContainerStyle}>
              <div style={dotStyle}></div>
              <Text style={brandTextStyle}>HARIKA STUDIO ADMIN</Text>
            </div>

            <Heading style={headingStyle}>
              🔔 New <span style={accentTextStyle}>Contact Request</span>
            </Heading>

            <Text style={subheadingStyle}>You have received a new contact form submission from your website.</Text>

            <Text style={timestampStyle}>Submitted: {submittedAt}</Text>
          </Section>

          {/* Client Information */}
          <Section style={contentSectionStyle}>
            <Text style={sectionTitleStyle}>Client Information</Text>

            <table style={infoTableStyle}>
              <tr>
                <td style={labelCellStyle}>
                  <div style={iconBoxStyle}>👤</div>
                </td>
                <td style={valueCellStyle}>
                  <Text style={labelTextStyle}>Full Name</Text>
                  <Text style={valueTextStyle}>{name}</Text>
                </td>
              </tr>

              <tr>
                <td style={labelCellStyle}>
                  <div style={iconBoxStyle}>✉️</div>
                </td>
                <td style={valueCellStyle}>
                  <Text style={labelTextStyle}>Email Address</Text>
                  <Link href={`mailto:${email}`} style={linkStyle}>
                    {email}
                  </Link>
                </td>
              </tr>

              {phone && (
                <tr>
                  <td style={labelCellStyle}>
                    <div style={iconBoxStyle}>📱</div>
                  </td>
                  <td style={valueCellStyle}>
                    <Text style={labelTextStyle}>Phone Number</Text>
                    <Link href={`tel:${phone}`} style={linkStyle}>
                      {phone}
                    </Link>
                  </td>
                </tr>
              )}

              {company && (
                <tr>
                  <td style={labelCellStyle}>
                    <div style={iconBoxStyle}>🏢</div>
                  </td>
                  <td style={valueCellStyle}>
                    <Text style={labelTextStyle}>Company</Text>
                    <Text style={valueTextStyle}>{company}</Text>
                  </td>
                </tr>
              )}
            </table>
          </Section>

          {/* Project Details */}
          <Section style={projectSectionStyle}>
            <Text style={sectionTitleStyle}>Project Details</Text>

            <table style={projectTableStyle}>
              {service && (
                <tr>
                  <td style={projectLabelStyle}>Service Interested:</td>
                  <td style={projectValueStyle}>
                    <span style={badgeStyle}>{service}</span>
                  </td>
                </tr>
              )}

              {budget && (
                <tr>
                  <td style={projectLabelStyle}>Budget Range:</td>
                  <td style={projectValueStyle}>
                    <span style={budgetBadgeStyle}>{budget}</span>
                  </td>
                </tr>
              )}
            </table>

            <div style={messageBoxStyle}>
              <Text style={messageLabelStyle}>📝 Project Message</Text>
              <div style={messageContentStyle}>
                <Text style={messageTextStyle}>{message}</Text>
              </div>
            </div>
          </Section>

          {/* Quick Actions */}
          <Section style={actionsSectionStyle}>
            <Text style={sectionTitleStyle}>Quick Actions</Text>

            <table style={actionsTableStyle}>
              <tr>
                <td style={actionButtonCell}>
                  <Link href={`mailto:${email}`} style={primaryButtonStyle}>
                    📧 Reply via Email
                  </Link>
                </td>
              </tr>
              <tr>
                <td style={actionButtonCell}>
                  <Link href={`https://wa.me/${phone?.replace(/\D/g, "")}`} style={secondaryButtonStyle}>
                    💬 Contact via WhatsApp
                  </Link>
                </td>
              </tr>
            </table>
          </Section>

          {/* Priority Indicator */}
          <Section style={prioritySectionStyle}>
            <table style={priorityTableStyle}>
              <tr>
                <td style={priorityCellStyle}>
                  <Text style={priorityLabelStyle}>Priority Level</Text>
                  <Text style={priorityValueStyle}>{budget && (budget.includes("$12,000+") || budget.includes("$6,000")) ? "🔥 HIGH" : "⭐ NORMAL"}</Text>
                </td>
                <td style={priorityCellStyle}>
                  <Text style={priorityLabelStyle}>Response Due</Text>
                  <Text style={priorityValueStyle}>⏰ 24 Hours</Text>
                </td>
              </tr>
            </table>
          </Section>

          {/* Footer */}
          <Section style={footerStyle}>
            <Hr style={hrStyle} />

            <Text style={footerTextStyle}>This email was sent from your Harika Studio contact form.</Text>
            <Text style={footerTextStyle}>Make sure to respond within 24 hours for the best client experience.</Text>
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
  fontSize: "12px",
  fontWeight: "500",
  margin: "0",
  letterSpacing: "1px",
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
  margin: "0 0 12px 0",
};

const timestampStyle: React.CSSProperties = {
  color: "rgba(246, 246, 246, 0.5)",
  fontSize: "13px",
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

const infoTableStyle: React.CSSProperties = {
  width: "100%",
  borderCollapse: "separate",
  borderSpacing: "0 12px",
};

const labelCellStyle: React.CSSProperties = {
  width: "48px",
  verticalAlign: "top",
  paddingRight: "12px",
};

const iconBoxStyle: React.CSSProperties = {
  width: "36px",
  height: "36px",
  backgroundColor: "rgba(229, 145, 86, 0.1)",
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "18px",
};

const valueCellStyle: React.CSSProperties = {
  verticalAlign: "middle",
};

const labelTextStyle: React.CSSProperties = {
  color: "rgba(246, 246, 246, 0.5)",
  fontSize: "12px",
  margin: "0 0 4px 0",
  textTransform: "uppercase",
  letterSpacing: "0.5px",
};

const valueTextStyle: React.CSSProperties = {
  color: "rgba(246, 246, 246, 0.9)",
  fontSize: "15px",
  margin: "0",
  fontWeight: "500",
};

const linkStyle: React.CSSProperties = {
  color: "#E59156",
  fontSize: "15px",
  fontWeight: "500",
  textDecoration: "none",
};

const projectSectionStyle: React.CSSProperties = {
  backgroundColor: "#131313",
  borderLeft: "1px solid rgba(229, 145, 86, 0.2)",
  borderRight: "1px solid rgba(229, 145, 86, 0.2)",
  borderTop: "1px solid rgba(246, 246, 246, 0.05)",
  padding: "32px",
};

const projectTableStyle: React.CSSProperties = {
  width: "100%",
  marginBottom: "20px",
};

const projectLabelStyle: React.CSSProperties = {
  color: "rgba(246, 246, 246, 0.5)",
  fontSize: "13px",
  padding: "8px 16px 8px 0",
  verticalAlign: "middle",
};

const projectValueStyle: React.CSSProperties = {
  padding: "8px 0",
  verticalAlign: "middle",
};

const badgeStyle: React.CSSProperties = {
  backgroundColor: "rgba(229, 145, 86, 0.1)",
  color: "#E59156",
  padding: "6px 12px",
  borderRadius: "6px",
  fontSize: "13px",
  fontWeight: "500",
};

const budgetBadgeStyle: React.CSSProperties = {
  backgroundColor: "rgba(34, 197, 94, 0.1)",
  color: "#22c55e",
  padding: "6px 12px",
  borderRadius: "6px",
  fontSize: "13px",
  fontWeight: "600",
};

const messageBoxStyle: React.CSSProperties = {
  marginTop: "20px",
};

const messageLabelStyle: React.CSSProperties = {
  color: "rgba(246, 246, 246, 0.5)",
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "0.5px",
  margin: "0 0 12px 0",
};

const messageContentStyle: React.CSSProperties = {
  backgroundColor: "rgba(229, 145, 86, 0.05)",
  border: "1px solid rgba(229, 145, 86, 0.2)",
  borderRadius: "8px",
  padding: "20px",
};

const messageTextStyle: React.CSSProperties = {
  color: "rgba(246, 246, 246, 0.9)",
  fontSize: "14px",
  lineHeight: "1.8",
  margin: "0",
  whiteSpace: "pre-wrap",
};

const actionsSectionStyle: React.CSSProperties = {
  backgroundColor: "#131313",
  borderLeft: "1px solid rgba(229, 145, 86, 0.2)",
  borderRight: "1px solid rgba(229, 145, 86, 0.2)",
  borderTop: "1px solid rgba(246, 246, 246, 0.05)",
  padding: "32px",
};

const actionsTableStyle: React.CSSProperties = {
  width: "100%",
  borderCollapse: "separate",
  borderSpacing: "0 8px",
};

const actionButtonCell: React.CSSProperties = {
  textAlign: "center",
};

const primaryButtonStyle: React.CSSProperties = {
  backgroundColor: "#E59156",
  color: "#ffffff",
  padding: "14px 32px",
  borderRadius: "8px",
  fontSize: "14px",
  fontWeight: "500",
  textDecoration: "none",
  display: "inline-block",
  width: "100%",
  textAlign: "center",
};

const secondaryButtonStyle: React.CSSProperties = {
  backgroundColor: "rgba(229, 145, 86, 0.1)",
  color: "#E59156",
  padding: "14px 32px",
  borderRadius: "8px",
  fontSize: "14px",
  fontWeight: "500",
  textDecoration: "none",
  display: "inline-block",
  width: "100%",
  textAlign: "center",
  border: "1px solid rgba(229, 145, 86, 0.2)",
};

const prioritySectionStyle: React.CSSProperties = {
  background: "linear-gradient(135deg, rgba(229, 145, 86, 0.1) 0%, #131313 100%)",
  borderLeft: "1px solid rgba(229, 145, 86, 0.2)",
  borderRight: "1px solid rgba(229, 145, 86, 0.2)",
  padding: "24px 32px",
};

const priorityTableStyle: React.CSSProperties = {
  width: "100%",
};

const priorityCellStyle: React.CSSProperties = {
  width: "50%",
  textAlign: "center",
  padding: "8px",
};

const priorityLabelStyle: React.CSSProperties = {
  color: "rgba(246, 246, 246, 0.5)",
  fontSize: "11px",
  textTransform: "uppercase",
  letterSpacing: "0.5px",
  margin: "0 0 8px 0",
};

const priorityValueStyle: React.CSSProperties = {
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "600",
  margin: "0",
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
  margin: "0 0 20px 0",
};

const footerTextStyle: React.CSSProperties = {
  color: "rgba(246, 246, 246, 0.5)",
  fontSize: "12px",
  margin: "8px 0",
};
