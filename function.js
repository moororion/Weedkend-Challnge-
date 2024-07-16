function addEmployee() {
    let firstName = document.getElementById('fName').value;
    let lastName = document.getElementById('lName').value;
    let employeeNumber = document.getElementById('employeeNumber').value;
    let takeHomePay = document.getElementById('takeHomePay').value;

    let employeeDiv = document.createElement('div');
    employeeDiv.classList.add('employee-entry');
    employeeDiv.innerHTML ='<p>Name: ${firstName} ${lastName}</p>';
    employeeDiv.innerHTML='<p>Employee Number: ${employeeNumber}</p>';
    employeeDiv.innerHTML='<p>Take Home Pay: $${takeHomePay}</p>';

    document.getElementById('classEmployee').appendChild(employeeDiv);

    updateTotalMonthly(Number(takeHomePay));

    clearInputFields();
  }

  function clearEmployees() {
    document.getElementById('classEmployee').innerHTML = '';

    updateTotalMonthly(0);
  }

  function updateTotalMonthly(amount) {
    const totalMonthlyElement = document.getElementById('totalMonthly');
    const currentTotal = Number(totalMonthlyElement.textContent);
    const newTotal = currentTotal + amount;
    totalMonthlyElement.textContent = newTotal.toFixed(2);
  }

  function clearInputFields() {
    document.getElementById('fName').value = '';
    document.getElementById('lName').value = '';
    document.getElementById('employeeNumber').value = '';
    document.getElementById('takeHomePay').value = '';
  }
