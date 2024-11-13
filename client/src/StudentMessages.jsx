import { useState } from 'react';
import Messages from './Messages.json';
import '../CSS/StudentMessage.css'

function StudentMessages() {
  const [currentIndex, setCurrentIndex] = useState(0);

  function fetchStudents() {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Messages.length);
  }

  const student = Messages[currentIndex];

  return (
    <>
      <div className='Message_Container'>

        <div className='image' key={student.id} id={student.id}>

          <img src={student.Photo} alt={`${student.User}'s photo`} />

        </div>

        <div className='classmates'>
          <h1 className='h1'>{student.User}</h1>
          <p>{student.Message}</p>
          <button onClick={fetchStudents}>Click to See the Next Post</button>
        </div>
      </div>

    </>
  );
}

export default StudentMessages;
