
    function formatEvent(event) {
      // Split the message into user action and timestamp
      const parts = event.message.split(' on ');
      const action = parts[0];
      const time = parts[1] || '';

      const typeClass = event.type === 'push' ? 'push' :
                        event.type === 'pull_request' ? 'pull_request' :
                        event.type === 'merge' ? 'merge' : 'default';

      return `
        <li class="event-item ${typeClass}">
          <div class="event-type">${event.type.replace('_', ' ').toUpperCase()}</div>
          <div class="event-message">${action}</div>
          <div class="event-time">🕒 ${time}</div>
        </li>
      `;
    }

    function fetchEvents() {
      $.get('/events', function(data) {
        $('#event-list').empty();
        data.forEach((event, index) => {
          const html = formatEvent(event);
          setTimeout(() => {
            $('#event-list').append(html);
          }, index * 100); // Delay for staggered animation
        });
      });
    }

    fetchEvents();
    setInterval(fetchEvents, 15000);
 
    function formatEvent(event) {
      // Split the message into user action and timestamp
      const parts = event.message.split(' on ');
      const action = parts[0];
      const time = parts[1] || '';

      const typeClass = event.type === 'push' ? 'push' :
                        event.type === 'pull_request' ? 'pull_request' :
                        event.type === 'merge' ? 'merge' : 'default';

      return `
        <li class="event-item ${typeClass}">
          <div class="event-type">${event.type.replace('_', ' ').toUpperCase()}</div>
          <div class="event-message">${action}</div>
          <div class="event-time">🕒 ${time}</div>
        </li>
      `;
    }

    function fetchEvents() {
      $.get('/events', function(data) {
        $('#event-list').empty();
        data.forEach((event, index) => {
          const html = formatEvent(event);
          setTimeout(() => {
            $('#event-list').append(html);
          }, index * 100); // Delay for staggered animation
        });
      });
    }

    fetchEvents();
    setInterval(fetchEvents, 15000);
