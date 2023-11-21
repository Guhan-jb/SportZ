import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import "../Assets/CSS/footer.css";

const Footer = () => {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [showFAQModal, setShowFAQModal] = useState(false);
  const [showFeedModal, setShowFeedModal] = useState(false);

  const handleClosePrivacy = () => setShowPrivacyModal(false);
  const handleCloseTerms = () => setShowTermsModal(false);
  const handleCloseFAQ = () => setShowFAQModal(false);
  const handleCloseFeed = () => setShowFeedModal(false);


  const handleShowPrivacy = () => setShowPrivacyModal(true);
  const handleShowTerms = () => setShowTermsModal(true);
  const handleShowFAQ = () => setShowFAQModal(true);
  const handleShowFeed= () => setShowFeedModal(true);


  return (
    <div className="footer-wrapper">
      <footer className="bg-dark text-light p-4">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h5>SportZ</h5>
              <p>&copy; 2023 SportsZ</p>
            </div>
            <div className="col-md-3">
            <h5>Contact Us</h5>
            <address>
              <strong>SportsZ</strong>
              <br />
              123 Main Street
              <br />
              City, State ZIP Code
              <br />
              <abbr title="Phone">Phone:</abbr> (123) 456-7890
            </address>
          </div>
            <div className="col-md-3">
              <button className="btn active border border-dark" onClick={handleShowPrivacy}>
                Privacy Policy
              </button>
              <br />
              <button className="btn active border border-dark" onClick={handleShowTerms}>
                Terms and Conditions
              </button>
              <br />
              <button className="btn active border border-dark" onClick={handleShowFAQ}>
                FAQ
              </button>
              <br/>
              <button className="btn active border border-dark" onClick={handleShowFeed}>
                Feedback
              </button>
            </div>
            <div className="col-md-3">
              <div className="card_footer">
                <p className="socialContainer containerOne">
                  {/* Instagram Icon */}
                  <svg viewBox="0 0 16 16" className="socialSvg instagramSvg">
          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
        </svg>
                </p>

                <p className="socialContainer containerTwo">
                  {/* Twitter Icon */}
                  <svg viewBox="0 0 16 16" className="socialSvg twitterSvg">
          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
        </svg>
                </p>

                <p className="socialContainer containerThree">
                  {/* LinkedIn Icon */}
                  <svg viewBox="0 0 448 512" className="socialSvg linkdinSvg">
          <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 11128 61.9 111.28 142.3V448z"></path>
        </svg>
                </p>

                <p className="socialContainer containerFour">
                <svg viewBox="0 0 16 16" className="socialSvg whatsappSvg">
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path>
        </svg>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      <Modal show={showPrivacyModal} onHide={handleClosePrivacy} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Privacy Policy</Modal.Title>
        </Modal.Header>
        <Modal.Body>
  

  <p>
    At SportsZ, we take your privacy seriously. This Privacy Policy explains how we collect, use, share, and protect your personal information when you use our website and services.
  </p>

  <h5>Information We Collect</h5>
  <p>
    We may collect the following types of information when you use our website:
  </p>
  <ul>
    <li>Your name, email address, and other contact information when you register for an account.</li>
    <li>Information about your use of our website, including your browsing history and interactions with our content.</li>
    <li>Information you provide when you submit content, comments, or feedback on our website.</li>
    <li>Device information, such as your IP address and browser type.</li>
  </ul>

  <h5>How We Use Your Information</h5>
  <p>
    We may use your information for the following purposes:
  </p>
  <ul>
    <li>To provide and personalize our services to you.</li>
    <li>To improve and optimize our website's performance and content.</li>
    <li>To respond to your inquiries and provide customer support.</li>
    <li>To send you updates, newsletters, and promotional offers (you can opt-out at any time).</li>
  </ul>

  <h5>Information Sharing</h5>
  <p>
    We may share your information with third parties in the following situations:
  </p>
  <ul>
    <li>With your consent.</li>
    <li>To comply with legal obligations.</li>
    <li>To protect our rights, privacy, safety, or property.</li>
    <li>In connection with a merger, sale, or acquisition of all or part of our company.</li>
  </ul>

  <h5>Security</h5>
  <p>
    We take reasonable measures to protect your information from unauthorized access and use, but we cannot guarantee its absolute security.
  </p>

  <h5>Changes to This Privacy Policy</h5>
  <p>
    We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We encourage you to review this policy periodically.
  </p>

  <p>
    By using SportsZ, you agree to the terms outlined in this Privacy Policy.
  </p>

  <p>
    If you have any questions or concerns about our Privacy Policy, please contact us at sportsz@gmail.com.
  </p>
</Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClosePrivacy}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Terms and Conditions Modal */}
      <Modal show={showTermsModal} onHide={handleCloseTerms} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Terms and Conditions</Modal.Title>
        </Modal.Header>
        <Modal.Body>

  <p>
    These Terms and Conditions govern your use of SportsZ and its related services provided by SportsZ.
  </p>

  <h5>1. Acceptance of Terms</h5>
  <p>
    By using the Service, you agree to comply with and be bound by these Terms. If you do not agree to these Terms, please do not use the Service.
  </p>

  <h5>2. User Conduct</h5>
  <p>
    You agree to use the Service only for lawful purposes and in a manner that does not infringe upon the rights of others or inhibit their use and enjoyment of the Service. Prohibited activities include, but are not limited to:
  </p>
  <ul>
    <li>Violating any applicable laws or regulations.</li>
    <li>Posting or transmitting unauthorized or unsolicited advertising, promotional materials, or spam.</li>
    <li>Engaging in any activity that disrupts, interferes with, or harms the Service's functionality.</li>
  </ul>

  

  <h5>3. Changes to Terms</h5>
  <p>
    SportsZ reserves the right to update and change these Terms at any time. Continued use of the Service after any such changes shall constitute your consent to such changes.
  </p>
</Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseTerms}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* FAQ Modal */}
      <Modal show={showFAQModal} onHide={handleCloseFAQ} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>FAQ</Modal.Title>
        </Modal.Header>
        <Modal.Body>
  

  <h6>1. How can I create an account on SportsZ?</h6>
  <p>
    To create an account on SportZ, click on the "Sign Up" or "Register" button located on the homepage. Follow the on-screen instructions to provide your information and create an account.
  </p>

  <h6>2. What sports and events are covered by [Your Sports Website]?</h6>
  <p>
    SportsZ covers a wide range of sports and events, including but not limited to football, basketball, tennis, cricket, and more. You can find information, news, and updates about your favorite sports and teams.
  </p>

  <h6>3. How do I reset my password?</h6>
  <p>
    If you forget your password, you can reset it by clicking on the "Forgot Password" link on the login page. Follow the instructions provided to reset your password.
  </p>

  <h6>4. Can I submit my own sports-related content to SportZ?</h6>
  <p>
    Yes, we welcome contributions from sports enthusiasts. You can submit articles, videos, or other sports-related content through our "Submit Content" feature. Our editorial team will review and publish quality submissions.
  </p>

  
</Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseFAQ}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Footer;
