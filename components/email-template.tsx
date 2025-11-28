import * as React from "react";
import { Html, Head, Preview, Body, Container, Heading, Text, Hr, Section, Link } from "@react-email/components";

interface EmailTemplateProps {
  firstName: string;
}

export function EmailTemplate({ firstName }: EmailTemplateProps) {
  return (
    <Html>
      <Head />
      <Preview>Welcome to Harika Studio - Strategic Design & Transformation</Preview>
      <Body style={bodyStyle}>
        <Container style={containerStyle}>
          {/* Header with Brand */}
          <Section style={headerStyle}>
            {/* Logo/Brand Area */}
            <div style={brandContainerStyle}>
              <div style={dotStyle}></div>
              <Text style={brandTextStyle}>HARIKA STUDIO</Text>
            </div>

            {/* Main Heading */}
            <Heading style={headingStyle}>
              Welcome, <span style={accentTextStyle}>{firstName}</span>!
            </Heading>

            <Text style={subheadingStyle}>Thank you for connecting with Harika Studio. We&apos;re excited to explore how we can help transform your brand.</Text>
          </Section>

          {/* Content Section */}
          <Section style={contentSectionStyle}>
            <Text style={paragraphStyle}>This is a confirmation that our email system is working perfectly.</Text>

            <Text style={paragraphStyle}>
              At <strong style={strongTextStyle}>Harika Studio</strong>, we focus on:
            </Text>

            {/* Features List */}
            <table style={listContainerStyle}>
              <tr>
                <td style={listItemStyle}>
                  <div style={checkIconContainerStyle}>
                    <span style={checkIconStyle}>✓</span>
                  </div>
                </td>
                <td>
                  <Text style={listTextStyle}>Strategic brand transformation</Text>
                </td>
              </tr>
              <tr>
                <td style={listItemStyle}>
                  <div style={checkIconContainerStyle}>
                    <span style={checkIconStyle}>✓</span>
                  </div>
                </td>
                <td>
                  <Text style={listTextStyle}>Measurable business outcomes</Text>
                </td>
              </tr>
              <tr>
                <td style={listItemStyle}>
                  <div style={checkIconContainerStyle}>
                    <span style={checkIconStyle}>✓</span>
                  </div>
                </td>
                <td>
                  <Text style={listTextStyle}>Clean, timeless design</Text>
                </td>
              </tr>
            </table>
          </Section>

          {/* Stats Section */}
          <Section style={statsSectionStyle}>
            <table style={statsTableStyle}>
              <tr>
                <td style={statCellStyle}>
                  <Text style={statNumberStyle}>15+</Text>
                  <Text style={statLabelStyle}>Projects</Text>
                </td>
                <td style={statCellStyle}>
                  <Text style={statNumberStyle}>+180%</Text>
                  <Text style={statLabelStyle}>Avg Growth</Text>
                </td>
                <td style={statCellStyle}>
                  <Text style={statNumberStyle}>100%</Text>
                  <Text style={statLabelStyle}>Satisfaction</Text>
                </td>
              </tr>
            </table>
          </Section>

          {/* CTA Section */}
          <Section style={ctaSectionStyle}>
            <Text style={paragraphStyle}>Ready to start your transformation journey? We&apos;re here to help.</Text>

            {/* CTA Button */}
            <table style={buttonContainerStyle}>
              <tr>
                <td>
                  <Link href="https://harikastudio.com/contact" style={buttonStyle}>
                    Let&apos;s Talk →
                  </Link>
                </td>
              </tr>
            </table>
          </Section>

          {/* Footer */}
          <Section style={footerStyle}>
            <Hr style={hrStyle} />

            <Text style={footerTextStyle}>© 2024 Harika Studio. All rights reserved.</Text>

            <Text style={footerTextStyle}>Strategic Design & Brand Transformation</Text>
          </Section>

          {/* Success Indicator */}
          <Section style={successSectionStyle}>
            <table style={successBadgeStyle}>
              <tr>
                <td>
                  <div style={pulseDotStyle}></div>
                </td>
                <td>
                  <Text style={successTextStyle}>Email integration working correctly ✅</Text>
                </td>
              </tr>
            </table>
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

const paragraphStyle: React.CSSProperties = {
  color: "rgba(246, 246, 246, 0.9)",
  fontSize: "16px",
  lineHeight: "1.6",
  marginBottom: "16px",
};

const strongTextStyle: React.CSSProperties = {
  color: "#ffffff",
  fontWeight: "600",
};

const listContainerStyle: React.CSSProperties = {
  width: "100%",
  marginTop: "16px",
};

const listItemStyle: React.CSSProperties = {
  width: "32px",
  verticalAlign: "top",
  paddingTop: "2px",
  paddingBottom: "8px",
};

const checkIconContainerStyle: React.CSSProperties = {
  width: "20px",
  height: "20px",
  backgroundColor: "rgba(229, 145, 86, 0.1)",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const checkIconStyle: React.CSSProperties = {
  color: "#E59156",
  fontSize: "12px",
  fontWeight: "bold",
};

const listTextStyle: React.CSSProperties = {
  color: "rgba(246, 246, 246, 0.8)",
  fontSize: "14px",
  margin: "0",
  lineHeight: "1.5",
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
  margin: "24px 0",
};

const footerTextStyle: React.CSSProperties = {
  color: "rgba(246, 246, 246, 0.5)",
  fontSize: "12px",
  margin: "8px 0",
};

const successSectionStyle: React.CSSProperties = {
  marginTop: "24px",
  textAlign: "center",
};

const successBadgeStyle: React.CSSProperties = {
  margin: "0 auto",
  backgroundColor: "#131313",
  border: "1px solid rgba(229, 145, 86, 0.2)",
  borderRadius: "50px",
  padding: "8px 16px",
};

const pulseDotStyle: React.CSSProperties = {
  width: "8px",
  height: "8px",
  backgroundColor: "#E59156",
  borderRadius: "50%",
  display: "inline-block",
  marginRight: "8px",
};

const successTextStyle: React.CSSProperties = {
  color: "rgba(246, 246, 246, 0.7)",
  fontSize: "12px",
  margin: "0",
};
