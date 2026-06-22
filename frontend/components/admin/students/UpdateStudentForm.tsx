'use client';

import React, { useState } from 'react';
import styles from './AdminUpdateStudents.module.css';

interface UpdateStudentFormProps {
  studentId?: string;
}

export default function UpdateStudentForm({ studentId }: UpdateStudentFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setSubmitStatus('success');
      setTimeout(() => {
        setSubmitStatus('idle');
        setIsSubmitting(false);
        // In real app, redirect here
      }, 2000);
    }, 1500);
  };

  return (
    <div className={styles.layoutGrid}>
      {/* Left Column: Profile Picture & Core Info */}
      <div className={styles.leftColumn}>
        <section className={`${styles.card} ${styles.cardCenter}`}>
          <div className={styles.avatarUploadWrapper}>
            <div className={styles.avatarBox}>
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVJOZy2JtKpuw4v2rfBmimcBSqfAV8ily8tFIKjQtknp4KjuNB1IsPvgzV_dFLQ8Q5qAMN3fvI0YX4LCoWxdVNtrEuehZVm7dtJFHxuZnPQbGDHbxIZlzXX50sUW15vs77VV9sEjrhIYp4UqZx1aDkQDYJaaRkyPhNi6sLleVndlv7PLjayUrwo4L0C0mYZ2ceXuzelyOSSKTN85HOV8dfZK_vsdvo7PfERo4nMgQtzi-SeKJShd2JUIW7v-B6fEk-ykHXWO-bkMM"
                alt="Student Profile"
                className={styles.avatarImg}
              />
            </div>
            <div className={styles.avatarOverlay}>
              <span className={`material-symbols-outlined ${styles.avatarIcon}`}>edit</span>
            </div>
          </div>
          <h3 className={styles.cardTitle}>Profile Picture</h3>
          <p className={styles.avatarHelpText}>
            Upload a high-resolution portrait. Max size 10MB. JPG or PNG.
          </p>
          <button className={styles.btnUpload} type="button">Change Image</button>
        </section>

        <section className={styles.card}>
          <h3 className={styles.cardTitle}>
            <span className={`material-symbols-outlined ${styles.cardTitleIcon}`}>assignment_ind</span>
            Identity Details
          </h3>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Student ID</label>
            <input
              className={`${styles.formInput} ${styles.formInputDisabled}`}
              type="text"
              value={studentId || "STU-2024-0892"}
              disabled
            />
            <span className={styles.helpText}>*Cannot be changed after creation</span>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Study Status</label>
            <select className={`${styles.formInput} ${styles.formSelect}`} defaultValue="Active / Full-time">
              <option value="Active / Full-time">Active / Full-time</option>
              <option value="On-Leave">On-Leave</option>
              <option value="Internship">Internship</option>
              <option value="Graduated">Graduated</option>
            </select>
          </div>
        </section>
      </div>

      {/* Right Column: Personal & Academic Info */}
      <div className={styles.rightColumn}>
        <form onSubmit={handleSubmit} className={styles.leftColumn}>
          {/* Personal Info Card */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>
              <span className={`material-symbols-outlined ${styles.cardTitleIcon}`}>person</span>
              Personal Information
            </h3>
            <div className={styles.grid2Col}>
              <div className={styles.colSpan2}>
                <label className={styles.formLabel}>Full Name</label>
                <input
                  className={styles.formInput}
                  type="text"
                  placeholder="Enter student's full name"
                  defaultValue="Nguyễn Văn Sinh Viên"
                  required
                />
              </div>
              <div>
                <label className={styles.formLabel}>Date of Birth</label>
                <input
                  className={styles.formInput}
                  type="date"
                  defaultValue="2003-05-15"
                  required
                />
              </div>
              <div>
                <label className={styles.formLabel}>Gender</label>
                <div className={styles.radioGroup}>
                  <label className={styles.radioLabel}>
                    <input type="radio" name="gender" className={styles.radioInput} defaultChecked />
                    <span className={styles.radioText}>Male</span>
                  </label>
                  <label className={styles.radioLabel}>
                    <input type="radio" name="gender" className={styles.radioInput} />
                    <span className={styles.radioText}>Female</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info Card */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>
              <span className={`material-symbols-outlined ${styles.cardTitleIcon}`}>contact_mail</span>
              Contact Information
            </h3>
            <div className={styles.grid2Col}>
              <div>
                <label className={styles.formLabel}>Email Address</label>
                <input
                  className={styles.formInput}
                  type="email"
                  placeholder="student@university.edu"
                  defaultValue="student@ckc.edu.vn"
                  required
                />
              </div>
              <div>
                <label className={styles.formLabel}>Phone Number</label>
                <input
                  className={styles.formInput}
                  type="tel"
                  placeholder="+84 000 000 000"
                  defaultValue="0901234567"
                />
              </div>
              <div className={styles.colSpan2}>
                <label className={styles.formLabel}>Current Address</label>
                <textarea
                  className={`${styles.formInput} ${styles.formTextarea}`}
                  rows={3}
                  placeholder="Street name, District, City..."
                  defaultValue="123 Nguyễn Huệ, Quận 1, TP.HCM"
                ></textarea>
              </div>
            </div>
          </div>

          {/* Academic Placement Card */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>
              <span className={`material-symbols-outlined ${styles.cardTitleIcon}`}>school</span>
              Academic Placement
            </h3>
            <div className={styles.grid2Col}>
              <div>
                <label className={styles.formLabel}>Department</label>
                <select className={`${styles.formInput} ${styles.formSelect}`} defaultValue="Information Technology">
                  <option value="Computer Science">Computer Science</option>
                  <option value="Business Administration">Business Administration</option>
                  <option value="Information Technology">Information Technology</option>
                  <option value="Electrical Engineering">Electrical Engineering</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                </select>
              </div>
              <div>
                <label className={styles.formLabel}>Class Code</label>
                <select className={`${styles.formInput} ${styles.formSelect}`} defaultValue="IT-PRO-24">
                  <option value="CS-2024-A">CS-2024-A</option>
                  <option value="CS-2024-B">CS-2024-B</option>
                  <option value="BA-2024-K12">BA-2024-K12</option>
                  <option value="IT-PRO-24">IT-PRO-24</option>
                </select>
              </div>
            </div>
          </div>

          {/* Form Actions */}
          <div className={styles.formActions}>
            <button type="button" className={styles.btnDiscard}>Cancel</button>
            <button
              type="submit"
              className={styles.btnSubmit}
              disabled={isSubmitting}
              style={{ backgroundColor: submitStatus === 'success' ? '#059669' : '' }}
            >
              {isSubmitting && submitStatus === 'idle' ? (
                <>
                  <span className="material-symbols-outlined" style={{ animation: 'spin 1s linear infinite' }}>sync</span>
                  Updating...
                </>
              ) : submitStatus === 'success' ? (
                <>
                  <span className="material-symbols-outlined">check_circle</span>
                  Updated Successfully
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined">save</span>
                  Cập Nhật
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
