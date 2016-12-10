$(function() {

  $.ajax({
    url: 'https://www.codeschool.com/users/1219019.json',
    dataType: 'jsonp',
    success: function(response) {
      // variables
      var curCourse;
      var curDiv;
      var courseTitleEl;
      var courseImgEl;
      var curA;
      for(var i in response.courses.completed) {
        // same variables
        curCourse = response.courses.completed[i];
        curDiv = document.createElement('div');
        courseTitleEl = document.createElement('h3');
        courseImgEl = document.createElement('img');
        curA = document.createElement('a');
        
        // element property setting
        curA.setAttribute('href', curCourse.url);
        curA.setAttribute('target', '_blank');
        curA.setAttribute('class', 'btn btn-primary');
        curA.textContent = 'See Course';
        courseTitleEl.textContent = curCourse.title;
        courseImgEl.setAttribute('src', curCourse.badge);
        curDiv.setAttribute('class', 'course');
        
        // ... and the el-e-ments connected to the di-iv ...
        curDiv.appendChild(courseTitleEl);
        curDiv.appendChild(courseImgEl);
        curDiv.appendChild(curA);
        
        // and let's add it to the page!
        document.getElementById('badges').appendChild(curDiv);
      }
    }
  });

});
