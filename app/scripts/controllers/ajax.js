// var xhr = new XMLHttpRequest();

// xhr.onload = function() {
//     var responseObject = JSON.parse(xhr.responseText);
//     var newContent = '';
//     console.log(responseObject);
//     for (var i = 0; i < responseObject.events.length; i++) {
//         newContent += '<div class="arachnid">';
//         newContent += '<p><b>' + responseObject.events[i].primaryColor + '</b><br>';
//         newContent += responseObject.events[i].primaryColor + '</p>';
//         // newContent += '<p><b>' + responseObject.events[i].primaryColor + '</b><br>';
//         // newContent += '<p><b>' + responseObject.events[i].secondaryColor + '</b><br>';
//         newContent += '</div>';

//     }

// document.getElementById('content').innerHTML = xhr.newContent;
// };


// xhr.open('GET', 'scripts/spiders/spiders.json', true);
// xhr.send();
