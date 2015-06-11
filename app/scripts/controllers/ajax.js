var xhr = new XMLHttpRequest();

xhr.onload = function() {
    responseObject = JSON.parse(xhr.responseText);
    var newContent = '';
    for (var i = 0; i < responseObject.events.length; i++) {
        newContent += '<div class="arachnid">';
        newContent += '<p><b>' + responseObject.events[i].primaryColor + '</b><br>';
        newContent += responseObject.events[i].primaryColor + '</p>';
        // newContent += '<p><b>' + responseObject.events[i].primaryColor + '</b><br>';
        // newContent += '<p><b>' + responseObject.events[i].secondaryColor + '</b><br>';
        newContent += '</div>';

    }

document.getElementById('content').innerHTML = newContent;
};


xhr.open('GET', 'spiders/spiders.json', true);
xhr.send(null);
