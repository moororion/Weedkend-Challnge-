function addEmployee() {
  const firstName = document.getElementById('fName').value;
  const lastName = document.getElementById('lName').value;
  const employeeNumber = document.getElementById('employeeNumber').value;
  const takeHomePay = document.getElementById('takeHomePay').value;

  

  const employeeBody = document.getElementById('employeeBody');

  const employeeRow = document.createElement('tr');
  employeeRow.innerHTML = `
    <td>${firstName} ${lastName}</td>
    <td>${employeeNumber}</td>
    <td>$${takeHomePay}</td>
  `;

  employeeBody.appendChild(employeeRow);

  updateTotalMonthly(Number(takeHomePay));

  clearInputFields();
}

function clearEmployees() {
  document.getElementById('employeeBody').innerHTML = '';
  updateTotalMonthly(0);
}

function updateTotalMonthly(amount) {
  const totalMonthlyElement = document.getElementById('totalMonthly');
  const currentTotal = Number(totalMonthlyElement.textContent);
  const newTotal = currentTotal + amount;
  totalMonthlyElement.textContent = newTotal.toFixed(2);

  if (newTotal > 20000) {
    totalMonthlyElement.classList.add('highlight');
  } else {
    totalMonthlyElement.classList.remove('highlight');
  }
}

function clearInputFields() {
  document.getElementById('fName').value = '';
  document.getElementById('lName').value = '';
  document.getElementById('employeeNumber').value = '';
  document.getElementById('takeHomePay').value = '';
}
