import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import QRCode from 'react-qr-code'; // ✅ REAL QR LIBRARY
import { ArrowRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Device detection (you can replace this with real logic)
const useDeviceDetection = () => {
  const [isMobile] = useState(false);
  return { isMobile };
};

const paymentMethods = [
  { id: 'gpay', name: 'Google Pay', icon: '/icons/gpay-color.png' },
  { id: 'paytm', name: 'Paytm', icon: '/icons/paytm-icon.png' },
  { id: 'phonepe', name: 'PhonePe', icon: '/icons/phonepe-icon.png' },
  { id: 'upi', name: 'UPI', icon: '/icons/upi-payment-icon.png' },
  { id: 'card', name: 'Credit/Debit Card', icon: '/icons/card-color.png' },
];

const PaymentSection = () => {
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
  const [showQrModal, setShowQrModal] = useState(false);
  const { isMobile } = useDeviceDetection();

  const payeeVpa = 'abhaythakur700024@oksbi';
  const payeeName = 'SHYN';
  const transactionAmount = '500';
  const transactionNote = 'SHYN Annual Membership';
  const currencyCode = 'INR';

  const universalUpiUrl = `upi://pay?pa=${payeeVpa}&pn=${payeeName}&am=${transactionAmount}&cu=${currencyCode}&tn=${encodeURIComponent(transactionNote)}`;

  const handlePayment = () => {
    if (!selectedMethod) return;

    switch (selectedMethod) {
      case 'gpay':
      case 'paytm':
      case 'phonepe':
      case 'upi':
        if (isMobile) {
          window.location.href = universalUpiUrl;
        } else {
          setShowQrModal(true);
        }
        break;
      case 'card':
        alert('Credit/Debit Card payment option is coming soon!');
        break;
      default:
        alert('An unexpected error occurred. Please try again.');
    }
  };

  // Ensure modal-root exists
  useEffect(() => {
    if (!document.getElementById('modal-root')) {
      const modalRoot = document.createElement('div');
      modalRoot.id = 'modal-root';
      document.body.appendChild(modalRoot);
    }
  }, []);

  const QrModal = () =>
    typeof window !== 'undefined'
      ? ReactDOM.createPortal(
          <AnimatePresence>
            {showQrModal && (
              <motion.div
                className="qr-modal-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowQrModal(false)}
              >
                <motion.div
                  className="qr-modal-content"
                  initial={{ scale: 0.9, y: 20 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.9, y: 20 }}
                  onClick={(e) => e.stopPropagation()}
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="qr-modal-title"
                >
                  <button
                    className="close-modal-button"
                    onClick={() => setShowQrModal(false)}
                  >
                    <X size={20} />
                  </button>
                  <h3 className="qr-modal-title" id="qr-modal-title">
                    Scan to Pay
                  </h3>
                  <div className="qr-code-container">
                    <QRCode value={universalUpiUrl} size={256} />
                  </div>
                  <p className="qr-modal-instructions">
                    Open any UPI app on your mobile and scan the code to complete the payment.
                  </p>
                  <p className="qr-modal-note">
                    (This is a demo. A real app would verify payment on a server.)
                  </p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.getElementById('modal-root')!
        )
      : null;

  return (
    <>
      <section className="payment-section">
        <h2 className="section-title">Complete Your Purchase</h2>
        <div className="payment-box">
          <div className="payment-options">
            {paymentMethods.map((method) => (
              <button
                key={method.id}
                className={`payment-button ${
                  selectedMethod === method.id ? 'selected' : ''
                }`}
                onClick={() => setSelectedMethod(method.id)}
                aria-label={`Pay with ${method.name}`}
              >
                <img src={method.icon} alt={method.name} className="payment-icon" />
              </button>
            ))}
          </div>
          <button
            onClick={handlePayment}
            className={`cta-button ${selectedMethod ? 'active' : ''}`}
          >
            <span>Pay ₹500 Securely</span>
            <ArrowRight />
          </button>
        </div>
      </section>

      <QrModal />
    </>
  );
};

export default PaymentSection;
