  /*Test Code */
  var feedbackMail = document.getElementById("feedbackMail");
          feedbackMail.setAttribute("href", "mailto:video@chick-fil-a.com?subject=question regarding " + encodeURI(document.location.href));