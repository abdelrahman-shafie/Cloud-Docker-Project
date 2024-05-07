window.onload = function() {
    fetch('http://localhost:3000/students')
      .then(response => response.json())
      .then(data => {
        let teamInfo = document.getElementById('team-info');
        data.forEach(member => {
          let p = document.createElement('p');
          p.textContent = `${member.id}, ${member.name}, ${member.age}, ${member.cgpa}, ${member.department}`;
          teamInfo.appendChild(p);
        });
      });
  };
  