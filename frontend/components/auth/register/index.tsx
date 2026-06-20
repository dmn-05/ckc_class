import React from 'react';
import { StudentRegisterHeader } from './StudentRegisterHeader';
import { StudentRegisterForm } from './StudentRegisterForm';
import { StudentRegisterFooter } from './StudentRegisterFooter';

export default function StudentRegister() {
  return (
    <div className="register-page">
      {/* Subtle Background Element: Floating Glow */}
      <div className="register-bg-glow-1"></div>
      <div className="register-bg-glow-2"></div>
      
      <div className="register-container">
   
        <StudentRegisterForm />
        <StudentRegisterFooter />
      </div>
    </div>
  );
}
