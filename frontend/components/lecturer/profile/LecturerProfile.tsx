import React from 'react';
import styles from './LecturerProfile.module.css';
import ProfileHeader from './ProfileHeader';
import ProfileAvatar from './ProfileAvatar';
import RecentActivities from './RecentActivities';
import LecturerInfoForm from './LecturerInfoForm';

export default function LecturerProfile() {
  return (
    <div className={styles.container}>
      <ProfileHeader />
      
      <div className={styles.mainGrid}>
        {/* Left Column - 4/12 */}
        <div className={styles.leftColumn}>
          <ProfileAvatar />
          <RecentActivities />
        </div>
        
        {/* Right Column - 8/12 */}
        <div className={styles.rightColumn}>
          <LecturerInfoForm />
        </div>
      </div>
    </div>
  );
}
