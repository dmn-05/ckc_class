import React from 'react';
import Link from 'next/link';

export function StudentRegisterFooter() {
  return (
    <footer className="register-footer">
      <div className="register-footer-links">
        <Link className="register-footer-link" href="#">
          <span className="material-symbols-outlined register-footer-icon">public</span>
          Hỗ trợ
        </Link>
        <Link className="register-footer-link" href="#">
          <span className="material-symbols-outlined register-footer-icon">policy</span>
          Chính sách
        </Link>
      </div>
      <p className="register-copyright">© 2024 CKC Class Systems • Academic Futurism</p>
    </footer>
  );
}
