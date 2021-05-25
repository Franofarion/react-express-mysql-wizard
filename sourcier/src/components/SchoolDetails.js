import axios from 'axios';
import React, { useEffect, useState } from 'react';

function SchoolDetails(props) {
  const [school, setSchool] = useState({});
  const [wizards, setWizards] = useState([]);

  useEffect(() => {
    // requête pour récupérer les détails d'une école 
    axios
      .get(`http://localhost:8080/schools/${props.match.params.id}`)
      .then(response => response.data)
      .then(data => {
        console.log(data);
        setSchool(data)
      })
  }, [props.match.params.id])

  useEffect(() => {
    axios
      .get(`http://localhost:8080/schools/${props.match.params.id}/wizards`)
      .then(response => response.data)
      .then(data => {
        console.log(data);
        setWizards(data);
      })
  }, [props.match.params.id])

  const upperCasing = (word) => {
    return word[0].toUpperCase() + word.slice(1);
  }

  return (
    <div>
      <h3>{school.name}</h3>
      <p>country : {school.country}</p>
      <p>capacity : {school.capacity}</p>
      <h4>Liste des élèves :</h4>
      <div>
        {
          wizards.map(wizard => {
            return (
              <p>{upperCasing(wizard.firstname)} {upperCasing(wizard.lastname)}</p>
            )
          })
        }
      </div>
    </div>
  );
}

export default SchoolDetails;
