import React from 'react';
import Card from '../components/Card';
import StatBox from '../components/StatBox';
import PrimaryButton from '../components/PrimaryButton';
import BannerAd from '../components/BannerAd';

// Simple icons using SVG
const WalletIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
  </svg>
);

const TaskIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const UserIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
  </svg>
);

const HistoryIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const UserDashboard = () => {
  // Mock data
  const userStats = {
    walletBalance: 1250,
    credits: 125,
    tasksCompleted: 47,
    activeTasks: 3,
    referralCode: 'USR2024ABC'
  };

  const handleViewTasks = () => {
    // Navigate to tasks page (placeholder)
    console.log('Navigating to tasks page...');
  };

  const handleTaskHistory = () => {
    // Navigate to task history (placeholder)
    console.log('Navigating to task history...');
  };

  const handleInviteFriends = () => {
    // Handle invite friends action
    console.log('Opening invite friends...');
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          
          <p className="text-gray-600">Here's what's happening with your account today.</p>
        </div>

        {/* Top Banner Ad */}
        <BannerAd position="top" />

        {/* Wallet Overview */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Wallet Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <StatBox
              icon={<WalletIcon />}
              title="Wallet Balance"
              value={`₹${userStats.walletBalance.toLocaleString()}`}
              subtitle="Available for withdrawal"
              color="primary"
            />
            <StatBox
              icon={<WalletIcon />}
              title="Credits"
              value={userStats.credits}
              subtitle="Bonus credits earned"
              color="accent"
            />
          </div>
        </div>

        {/* Task Summary */}
        <div className="mb-8">
          <Card>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Task Summary</h3>
                <div className="grid grid-cols-2 gap-6 mb-4 md:mb-0">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <TaskIcon />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">{userStats.tasksCompleted}</p>
                      <p className="text-sm text-gray-600">Tasks Completed</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <TaskIcon />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">{userStats.activeTasks}</p>
                      <p className="text-sm text-gray-600">Active Tasks</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 md:mt-0">
                <PrimaryButton onClick={handleViewTasks}>
                  View All Tasks
                </PrimaryButton>
              </div>
            </div>
          </Card>
        </div>

        {/* Invite & Earn + Task History */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Invite & Earn Section */}
          <Card>
            <div className="text-center">
              <div className="p-3 bg-accent bg-opacity-10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <UserIcon />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Invite & Earn</h3>
              <p className="text-gray-600 mb-4">Invite friends and earn ₹50 for each successful referral</p>
              <div className="bg-gray-50 rounded-lg p-3 mb-4">
                <p className="text-sm text-gray-600 mb-1">Your Referral Code</p>
                <p className="font-mono text-lg font-semibold text-primary">{userStats.referralCode}</p>
              </div>
              <PrimaryButton variant="accent" onClick={handleInviteFriends} fullWidth>
                Invite Friends
              </PrimaryButton>
            </div>
          </Card>

          {/* Task History */}
          <Card className="cursor-pointer hover:bg-gray-50" onClick={handleTaskHistory}>
            <div className="text-center">
              <div className="p-3 bg-primary bg-opacity-10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <HistoryIcon />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Task History</h3>
              <p className="text-gray-600 mb-4">View your completed tasks and earnings history</p>
              <PrimaryButton variant="outline" fullWidth>
                View History
              </PrimaryButton>
            </div>
          </Card>
        </div>

        {/* Bottom Banner Ad */}
        <BannerAd position="bottom" />

        {/* Quick Stats Footer */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            You've earned <span className="font-semibold text-primary">₹{userStats.walletBalance.toLocaleString()}</span> so far! 
            Keep completing tasks to earn more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;