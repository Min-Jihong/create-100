import React from 'react';
import UserProfile from '../components/UserProfile';
import SecurePage from '../components/SecurePage';

export default function MyPage() {
  return (
    <SecurePage>
      <div className='mypage-container'>
        <h1>My Page</h1>
        <UserProfile />
      </div>
    </SecurePage>
  );
}
