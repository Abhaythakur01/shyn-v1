import React from 'react';
import { ShieldCheck } from 'lucide-react';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white pt-32 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <ShieldCheck className="mx-auto h-16 w-16 text-purple-400 mb-4" />
          <h1 className="text-5xl font-bold">Privacy Policy</h1>
          <p className="text-lg text-gray-400 mt-2">Last updated: July 8, 2025</p>
        </div>

        {/* Policy Content */}
        <div className="prose prose-invert prose-lg max-w-none mx-auto space-y-8">
          <p>
            Welcome to SHYN. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at privacy@shyn.com.
          </p>

          <section>
            <h2 className="text-2xl font-bold text-white">1. What Information Do We Collect?</h2>
            <p>
              We collect personal information that you voluntarily provide to us when you register on the platform, express an interest in obtaining information about us or our products and services, when you participate in activities on the platform, or otherwise when you contact us. The personal information we collect may include your name, email address, phone number, password, and payment information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">2. How Do We Use Your Information?</h2>
            <p>
              We use the information we collect or receive to:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Facilitate account creation and logon process.</li>
              <li>Post testimonials on our platform with your consent.</li>
              <li>Request feedback and to contact you about your use of our platform.</li>
              <li>To enable user-to-user communications.</li>
              <li>To manage user accounts and keep our platform in working order.</li>
              <li>To send administrative information to you.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">3. Will Your Information Be Shared With Anyone?</h2>
            <p>
              We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We may process or share your data that we hold based on the following legal basis: Consent, Legitimate Interests, Performance of a Contract, or Legal Obligations.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-white">4. Do We Use Cookies and Other Tracking Technologies?</h2>
            <p>
              We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">5. How Do We Keep Your Information Safe?</h2>
            <p>
              We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">6. Do We Make Updates to This Notice?</h2>
            <p>
              Yes, we will update this notice as necessary to stay compliant with relevant laws. The updated version will be indicated by an updated "Last updated" date and the updated version will be effective as soon as it is accessible.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-white">7. How Can You Contact Us About This Notice?</h2>
            <p>
              If you have questions or comments about this notice, you may email us at privacy@shyn.com or by post to: SHYN, 123 Creative Lane, Art City, Mumbai, India.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
