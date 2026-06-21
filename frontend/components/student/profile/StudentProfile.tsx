import React from 'react';
import styles from './StudentProfile.module.css';
import ProfileHeader from './ProfileHeader';
import ProfileAvatar from './ProfileAvatar';
import ProfileStatus from './ProfileStatus';
import BasicInfoForm from './BasicInfoForm';
import ContactInfoForm from './ContactInfoForm';

export default function StudentProfile() {
  return (
    <div className={styles.container}>
      <ProfileHeader />
      
      <div className={styles.mainGrid}>
        <div className={styles.leftColumn}>
          <ProfileAvatar />
          <ProfileStatus />
        </div>
        
        <div className={styles.rightColumn}>
          <BasicInfoForm />
          <ContactInfoForm />
        </div>
      </div>
    </div>
  );
}
