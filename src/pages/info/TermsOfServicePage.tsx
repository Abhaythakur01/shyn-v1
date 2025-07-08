import React from 'react';
import { FileText } from 'lucide-react';

const TermsOfServicePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white pt-32 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <FileText className="mx-auto h-16 w-16 text-purple-400 mb-4" />
          <h1 className="text-5xl font-bold">Terms of Service</h1>
          <p className="text-lg text-gray-400 mt-2">Last updated: July 8, 2025</p>
        </div>

        {/* Terms Content */}
        <div className="prose prose-invert prose-lg max-w-none mx-auto space-y-8">
          <p>
            Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the SHYN website (the "Service") operated by SHYN ("us", "we", or "our"). Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms.
          </p>

          <section>
            <h2 className="text-2xl font-bold text-white">1. Accounts</h2>
            <p>
              When you create an account with us, you must provide us with information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service. You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">2. Content Ownership and Responsibility</h2>
            <p>
              Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material ("Content"). You are responsible for the Content that you post to the Service, including its legality, reliability, and appropriateness. By posting Content to the Service, you grant us the right and license to use, modify, publicly perform, publicly display, reproduce, and distribute such Content on and through the Service. You retain any and all of your rights to any Content you submit.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">3. Prohibited Uses</h2>
            <p>
              You may use the Service only for lawful purposes and in accordance with the Terms. You agree not to use the Service:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>In any way that violates any applicable national or international law or regulation.</li>
              <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Service.</li>
              <li>To impersonate or attempt to impersonate the Company, a Company employee, another user, or any other person or entity.</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-white">4. Intellectual Property</h2>
            <p>
              The Service and its original content (excluding Content provided by users), features and functionality are and will remain the exclusive property of SHYN and its licensors. The Service is protected by copyright, trademark, and other laws of both India and foreign countries.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">5. Termination</h2>
            <p>
              We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will immediately cease.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">6. Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-white">7. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at legal@shyn.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;
