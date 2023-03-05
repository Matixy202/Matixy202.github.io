function getCurrentDate() {
    var today = new Date();
    var month = today.toLocaleString
    ('default', { month: 'long' });
    var day = today.getDate();
    var year = today.getFullYear();
    return month + ' ' + day + ', ' + year;
  }


