export function GenerateEmailQRCode(email, subject, body) {
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new Error("Invalid email");
  }
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
  return mailtoLink;
}

export function GeneratePhoneQRCode(phoneNumber) {
    if (!phoneNumber || !/^\+?[0-9]{7,15}$/.test(phoneNumber)) {
      throw new Error("Invalid phone number");
    }
    const phoneLink = `tel:${phoneNumber}`;
    return phoneLink;
  }
  
  export function GenerateURLQRCode(url) {
    try {
      new URL(url); // Validates the URL
    } catch {
      throw new Error("Invalid URL");
    }
    return url;
  }

  export function GenerateSMSQRCode(phoneNumber, message) {
    if (!phoneNumber || !/^\+?[0-9]{7,15}$/.test(phoneNumber)) {
      throw new Error("Invalid phone number");
    }
    const smsLink = `sms:${phoneNumber}?body=${encodeURIComponent(message)}`;
    return smsLink;
  }
  
  
  export function GenerateContactQRCode({ firstName, lastName, phoneNumber, email, organization, address }) {
    if (!firstName && !lastName) {
      throw new Error("First name or last name is required");
    }
    const vCard = `
  BEGIN:VCARD
  VERSION:3.0
  FN:${firstName || ""} ${lastName || ""}
  TEL:${phoneNumber || ""}
  EMAIL:${email || ""}
  ORG:${organization || ""}
  ADR:${address || ""}
  END:VCARD
    `.trim();
    return vCard;
  }
  