import { useState } from 'react';
import Messages from './Messages.json';

function StudentMessages() {
  const [currentIndex, setCurrentIndex] = useState(0);

  function fetchStudents() {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Messages.length);
  }

  const student = Messages[currentIndex];

  return (
    <>
    <div className='Message Container'>
            
      <div key={student.id} id={student.id}>
        <p>{student.User}</p>
        <img src={student.Photo} alt={`${student.User}'s photo`} />
        <p>{student.Message}</p>
      </div>
      
      <div>
        <button onClick={fetchStudents}>Click to See the Next Post</button>
      </div>
    </div>

    </>
  );
}

export default StudentMessages;
