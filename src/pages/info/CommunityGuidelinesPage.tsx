import React from 'react';
import { Users, Heart, ThumbsDown, Shield } from 'lucide-react';

const CommunityGuidelinesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white pt-32 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Users className="mx-auto h-16 w-16 text-purple-400 mb-4" />
          <h1 className="text-5xl font-bold">Community Guidelines</h1>
          <p className="text-lg text-gray-400 mt-2">
            Help us build a safe, supportive, and inspiring home for artists.
          </p>
        </div>

        {/* Guidelines Content */}
        <div className="prose prose-invert prose-lg max-w-none mx-auto space-y-8">
          <p>
            Welcome to the SHYN community! We're thrilled to have you. Our mission is to create a positive and collaborative environment where artists of all levels can thrive. To ensure our community remains a welcoming space, we ask that you adhere to the following guidelines.
          </p>

          <section>
            <div className="flex items-center gap-4 mb-4">
                <Heart className="h-8 w-8 text-pink-400" />
                <h2 className="text-2xl font-bold text-white m-0">Be Respectful</h2>
            </div>
            <p>
              Treat every member with respect. We are a diverse community of individuals with different backgrounds, skill levels, and perspectives. Constructive feedback is encouraged, but personal attacks, harassment, hate speech, and bullying will not be tolerated.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-4 mb-4">
                <Shield className="h-8 w-8 text-green-400" />
                <h2 className="text-2xl font-bold text-white m-0">Keep it Authentic & Legal</h2>
            </div>
            <p>
              Only share work that you have created or have the rights to share. Do not post content that is illegal, infringes on copyright, or promotes dangerous activities. Authenticity is key to building trust and a genuine portfolio.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-4 mb-4">
                <ThumbsDown className="h-8 w-8 text-red-400" />
                <h2 className="text-2xl font-bold text-white m-0">No Spam or Self-Promotion</h2>
            </div>
            <p>
              While we encourage sharing your work within your portfolio, please avoid spamming the community forums or other members with unsolicited promotional content. The goal is to share and learn, not just to advertise.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-white">Consequences</h2>
            <p>
              Violating these guidelines may result in a warning, temporary suspension, or permanent removal from the SHYN community, depending on the severity of the infraction. Our moderation team reserves the right to remove any content or user that we believe violates the spirit of these guidelines.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">How to Report</h2>
            <p>
              If you see something that you believe violates our guidelines, please report it to our moderation team by using the "Report" feature or by contacting us at support@shyn.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CommunityGuidelinesPage;
