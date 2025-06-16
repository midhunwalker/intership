export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Midhun P',
    email: 'midhun.p@company.com',
    phone: '+91 98765 43210',
    location: 'Kochi, Kerala',
    tasksAssigned: 45,
    tasksCompleted: 42,
    completionRate: 93.3,
    status: 'Active',
    joinDate: '2023-01-15',
    lastActive: '2024-01-15T10:30:00Z',
    department: 'Engineering',
    role: 'Senior Developer',
    taskHistory: [
      {
        id: 't1',
        title: 'User Authentication API',
        description: 'Implement OAuth 2.0 authentication system',
        platform: 'API',
        status: 'Completed',
        assignedDate: '2024-01-01',
        completedDate: '2024-01-10',
        priority: 'High',
        estimatedHours: 16,
        actualHours: 14
      },
      {
        id: 't2',
        title: 'Dashboard UI Components',
        description: 'Create reusable dashboard components',
        platform: 'Web',
        status: 'Completed',
        assignedDate: '2024-01-05',
        completedDate: '2024-01-12',
        priority: 'Medium',
        estimatedHours: 12,
        actualHours: 15
      },
      {
        id: 't3',
        title: 'Mobile App Optimization',
        description: 'Optimize app performance for iOS/Android',
        platform: 'Mobile',
        status: 'In Progress',
        assignedDate: '2024-01-12',
        priority: 'Medium',
        estimatedHours: 20
      }
    ]
  },
  {
    id: '2',
    name: 'Amal KM',
    email: 'Amal.km@company.com',
    phone: '+91 97453 76541',
    location: 'Thiruvananthapuram, Kerala',
    tasksAssigned: 38,
    tasksCompleted: 35,
    completionRate: 92.1,
    status: 'Active',
    joinDate: '2023-03-20',
    lastActive: '2024-01-15T09:15:00Z',
    department: 'Design',
    role: 'UX Designer',
    taskHistory: [
      {
        id: 't4',
        title: 'User Interface Redesign',
        description: 'Redesign main application interface',
        platform: 'Web',
        status: 'Completed',
        assignedDate: '2024-01-02',
        completedDate: '2024-01-14',
        priority: 'High',
        estimatedHours: 24,
        actualHours: 26
      },
      {
        id: 't5',
        title: 'Mobile Wireframes',
        description: 'Create wireframes for mobile app',
        platform: 'Mobile',
        status: 'Completed',
        assignedDate: '2024-01-08',
        completedDate: '2024-01-15',
        priority: 'Medium',
        estimatedHours: 8,
        actualHours: 7
      }
    ]
  },
  {
    id: '3',
    name: 'Muhammad Sahal',
    email: 'muhammad.sahal@company.com',
    phone: '+91 98956 23147',
    location: 'Kozhikode, Kerala',
    tasksAssigned: 52,
    tasksCompleted: 41,
    completionRate: 78.8,
    status: 'Pending',
    joinDate: '2023-06-10',
    lastActive: '2024-01-13T14:45:00Z',
    department: 'Marketing',
    role: 'Content Manager',
    taskHistory: [
      {
        id: 't6',
        title: 'Content Strategy Planning',
        description: 'Develop Q1 content strategy',
        platform: 'Web',
        status: 'Completed',
        assignedDate: '2024-01-01',
        completedDate: '2024-01-08',
        priority: 'High',
        estimatedHours: 10,
        actualHours: 12
      },
      {
        id: 't7',
        title: 'Social Media Campaign',
        description: 'Create social media content for product launch',
        platform: 'Web',
        status: 'In Progress',
        assignedDate: '2024-01-10',
        priority: 'Medium',
        estimatedHours: 15
      }
    ]
  },
  {
    id: '4',
    name: 'Vidya Menon',
    email: 'vidya.menon@company.com',
    phone: '+91 94472 55663',
    location: 'Thrissur, Kerala',
    tasksAssigned: 29,
    tasksCompleted: 16,
    completionRate: 55.2,
    status: 'Inactive',
    joinDate: '2023-09-05',
    lastActive: '2024-01-08T16:20:00Z',
    department: 'Sales',
    role: 'Account Manager',
    taskHistory: [
      {
        id: 't8',
        title: 'Client Onboarding Process',
        description: 'Streamline client onboarding workflow',
        platform: 'Web',
        status: 'Pending',
        assignedDate: '2024-01-05',
        priority: 'Low',
        estimatedHours: 6
      }
    ]
  },
  {
    id: '5',
    name: 'Dileep Chandran',
    email: 'deleep.chandran@company.com',
    phone: '+91 98743 11235',
    location: 'Kannur, Kerala',
    tasksAssigned: 67,
    tasksCompleted: 63,
    completionRate: 94.0,
    status: 'Active',
    joinDate: '2022-11-12',
    lastActive: '2024-01-15T11:45:00Z',
    department: 'Engineering',
    role: 'Tech Lead',
    taskHistory: [
      {
        id: 't9',
        title: 'Architecture Review',
        description: 'Review and optimize system architecture',
        platform: 'API',
        status: 'Completed',
        assignedDate: '2024-01-01',
        completedDate: '2024-01-11',
        priority: 'High',
        estimatedHours: 20,
        actualHours: 18
      },
      {
        id: 't10',
        title: 'Code Review Guidelines',
        description: 'Establish team code review standards',
        platform: 'Web',
        status: 'Completed',
        assignedDate: '2024-01-08',
        completedDate: '2024-01-14',
        priority: 'Medium',
        estimatedHours: 8,
        actualHours: 6
      }
    ]
  },
  {
    id: '6',
    name: 'John Mathew',
    email: 'john.mathew@company.com',
    phone: '+91 91234 78901',
    location: 'Palakkad, Kerala',
    tasksAssigned: 33,
    tasksCompleted: 28,
    completionRate: 84.8,
    status: 'Active',
    joinDate: '2023-04-18',
    lastActive: '2024-01-15T08:30:00Z',
    department: 'QA',
    role: 'QA Engineer',
    taskHistory: [
      {
        id: 't11',
        title: 'Automated Testing Suite',
        description: 'Develop comprehensive automated test suite',
        platform: 'Web',
        status: 'Completed',
        assignedDate: '2024-01-03',
        completedDate: '2024-01-13',
        priority: 'High',
        estimatedHours: 18,
        actualHours: 20
      }
    ]
  }
];
