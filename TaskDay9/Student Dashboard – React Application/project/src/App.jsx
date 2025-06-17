import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import AddStudentForm from './components/AddStudentForm';
import StudentCard from './components/StudentCard';
import ConfirmationModal from './components/ConfirmationModal';
import SearchBar from './components/SearchBar';

function App() {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [modalState, setModalState] = useState({
    isOpen: false,
    studentId: null,
    studentName: ''
  });

  
  useEffect(() => {
    const sampleStudents = [
      {
        id: 1,
        name: 'Midhun.P',
        rollNumber: 'CS001',
        status: 'Present'
      },
      {
        id: 2,
        name: 'Amal Ahmmad',
        rollNumber: 'CS002',
        status: 'Absent'
      },
      {
        id: 3,
        name: 'Amal Km',
        rollNumber: 'CS003',
        status: 'Present'
      }
    ];
    setStudents(sampleStudents);
  }, []);

  
  const handleAddStudent = (newStudent) => {
    setStudents(prevStudents => [...prevStudents, newStudent]);
  };

  // Toggle student attendance status
  const handleToggleStatus = (studentId) => {
    setStudents(prevStudents =>
      prevStudents.map(student =>
        student.id === studentId
          ? {
              ...student,
              status: student.status === 'Present' ? 'Absent' : 'Present'
            }
          : student
      )
    );
  };

  // Handle delete student request 
  const handleDeleteStudent = (studentId, studentName) => {
    setModalState({
      isOpen: true,
      studentId,
      studentName
    });
  };

  // Confirm delete student
  const handleConfirmDelete = () => {
    setStudents(prevStudents =>
      prevStudents.filter(student => student.id !== modalState.studentId)
    );
    setModalState({
      isOpen: false,
      studentId: null,
      studentName: ''
    });
  };

  // Close modal without deleting
  const handleCloseModal = () => {
    setModalState({
      isOpen: false,
      studentId: null,
      studentName: ''
    });
  };

  // Handle search term change
  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  // Filter students based on search term
  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate statistics
  const totalStudents = students.length;
  const filteredCount = filteredStudents.length;
  const presentStudents = filteredStudents.filter(student => student.status === 'Present').length;
  const absentStudents = filteredCount - presentStudents;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">
              {searchTerm ? filteredCount : totalStudents}
            </div>
            <div className="text-gray-600">
              {searchTerm ? 'Filtered Students' : 'Total Students'}
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-success-600 mb-2">{presentStudents}</div>
            <div className="text-gray-600">Present</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-error-600 mb-2">{absentStudents}</div>
            <div className="text-gray-600">Absent</div>
          </div>
        </div>

        {/* Add Student Form */}
        <AddStudentForm onAddStudent={handleAddStudent} />

        {/* Search Bar */}
        <SearchBar 
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
          totalStudents={totalStudents}
          filteredCount={filteredCount}
        />

        {/* Students List */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            {searchTerm ? (
              <>
                Search Results ({filteredCount} student{filteredCount !== 1 ? 's' : ''})
                {filteredCount > 0 && (
                  <span className="text-lg font-normal text-gray-600 ml-2">
                    for "{searchTerm}"
                  </span>
                )}
              </>
            ) : (
              `Student List (${totalStudents} students)`
            )}
          </h2>
          
          {filteredStudents.length === 0 ? (
            <div className="bg-white rounded-lg shadow-md p-12 text-center">
              <div className="text-gray-500 text-lg">
                {searchTerm ? (
                  <>
                    <div className="mb-4">
                      <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    No students found matching "{searchTerm}".
                    <div className="mt-2 text-sm text-gray-400">
                      Try adjusting your search terms or clear the search to see all students.
                    </div>
                  </>
                ) : (
                  'No students added yet. Use the form above to add your first student.'
                )}
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredStudents.map(student => (
                <StudentCard
                  key={student.id}
                  student={student}
                  onToggleStatus={handleToggleStatus}
                  onDeleteStudent={handleDeleteStudent}
                />
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Confirmation Modal */}
      <ConfirmationModal
        isOpen={modalState.isOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmDelete}
        studentName={modalState.studentName}
      />
    </div>
  );
}

export default App;