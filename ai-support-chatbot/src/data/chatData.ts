export const faqQuestions = [
  "How do I reset my password?",
  "What's your refund policy?",
  "How to upgrade my plan?",
  "Track my order status",
  "Cancel subscription",
  "Contact human agent",
];

export const aiResponses: Record<string, string> = {
  "How do I reset my password?":
    "To reset your password, click on 'Forgot Password' on the login page. Enter your email address and we'll send you a reset link within 2 minutes. The link is valid for 24 hours. If you don't receive the email, check your spam folder or contact support.",
  "What's your refund policy?":
    "We offer a 30-day money-back guarantee on all plans. If you're not satisfied for any reason, simply contact our support team within 30 days of purchase for a full refund. No questions asked! Refunds are processed within 5-7 business days.",
  "How to upgrade my plan?":
    "Upgrading is easy! Go to your Account Settings → Billing → Choose Plan. Your new features activate instantly and you'll be billed the prorated difference. All your existing data and conversations are preserved during the upgrade.",
  "Track my order status":
    "To track your order, visit the Orders section in your dashboard or use the tracking number sent to your email. You can also reply here with your order ID and I'll look it up for you right now!",
  "Cancel subscription":
    "I understand you'd like to cancel. Before I proceed, may I ask what's not working for you? If it's a technical issue, I can connect you with our technical team to resolve it. If you'd like to proceed with cancellation, please go to Account Settings → Billing → Cancel Subscription.",
  "Contact human agent":
    "Connecting you with a human agent now. Average wait time is 2 minutes. While you wait, is there anything else I can help you with? Our agents are available 24/7.",
};

export const defaultResponse =
  "Thank you for your message! I'm here to help. Could you provide more details about your issue so I can assist you better? You can also select one of the quick action buttons below for faster help.";

export const welcomeMessage =
  "👋 Hi there! I'm SupportAI, your intelligent customer assistant. I can help you with account issues, billing questions, technical support, and much more. How can I help you today?";
