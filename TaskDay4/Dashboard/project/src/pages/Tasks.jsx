import React from 'react';
import Card from '../components/Card';
import PrimaryButton from '../components/PrimaryButton';

const Tasks = () => {
  return (
    <div className="min-h-screen bg-background p-4 md:p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Available Tasks</h1>
          <p className="text-gray-600">Complete tasks to earn rewards and credits.</p>
        </div>

        <Card>
          <div className="text-center py-12">
            <div className="mb-4">
              <svg className="w-16 h-16 text-gray-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Tasks Coming Soon</h3>
            <p className="text-gray-600 mb-6">We're preparing exciting tasks for you. Check back soon!</p>
            <PrimaryButton onClick={() => window.history.back()}>
              Back to Dashboard
            </PrimaryButton>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Tasks;