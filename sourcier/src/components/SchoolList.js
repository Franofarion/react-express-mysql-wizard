import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

function SchoolList() {
  const [schoolList, setSchoolList] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8080/schools')
      .then(response => response.data)
      .then(data => {
        setSchoolList(data);
      })
  }, [])

  return (
    <div>
      School list :
      {schoolList.map(school => {
        return (
          <p>
            <Link to={`/schools/${school.id}`}>{school.name}</Link>
          </p>
        )
      })}
    </div>
  );
}

export default SchoolList;
