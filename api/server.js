// // // // const express = require('express');
// // // // const path = require('path');
// // // // const app = express();

// // // // // Set the view engine to ejs
// // // // app.set('view engine', 'ejs');

// // // // // Adjust paths to static files and views
// // // // app.use(express.static(path.join(__dirname, '../public')));
// // // // app.set('views', path.join(__dirname, '../views'));

// // // // // Route for the homepage
// // // // app.get('/', (req, res) => {
// // // //   res.render('index'); // Render the EJS view 'index.ejs'
// // // // });

// // // // // Start the server and log a message
// // // // const port = process.env.PORT || 3000;
// // // // app.listen(port, () => {
// // // //   console.log(`Server is running on http://localhost:${port}`);
// // // // });

// // // // // Export the app for serverless deployment (used by Vercel)
// // // // module.exports = app;


// // // // require('dotenv').config();
// // // // const express = require('express');
// // // // const bodyParser = require('body-parser');
// // // // const axios = require('axios');  // For making API requests
// // // // const path = require('path');
// // // // const app = express();

// // // // // Load Calendly API Key from environment variables
// // // // const calendlyApiKey = 'https://v1.nocodeapi.com/yamuna123/calendly/SOpPWvQyiEASxskd';

// // // // app.set('view engine', 'ejs');
// // // // app.use(express.static(path.join(__dirname, '../public')));
// // // // app.set('views', path.join(__dirname, '../views'));

// // // // // Middleware
// // // // app.use(bodyParser.json());
// // // // app.use(bodyParser.urlencoded({ extended: true }));

// // // // // Home Route
// // // // app.get('/', (req, res) => {
// // // //   res.render('index');
// // // // });

// // // // // Route to get available event types from Calendly
// // // // app.get('/events', async (req, res) => {
// // // //   try {
// // // //     const response = await axios.get('https://api.calendly.com/event_types', {
// // // //       headers: {
// // // //         Authorization: `Bearer ${calendlyApiKey}`,
// // // //         Accept: 'application/json',

// // // //       },
// // // //     });

// // // //     // Pass event types to the template
// // // //     const eventTypes = response.data.collection;
// // // //     res.render('events', { eventTypes });
// // // //   } catch (error) {
// // // //     console.error('Error fetching event types:', error);
// // // //     res.status(500).send('Error fetching event types');
// // // //   }
// // // // });

// // // // // Route to schedule an event
// // // // app.post('/schedule-event', async (req, res) => {
// // // //   const { event_type, invitee_email, invitee_name } = req.body;

// // // //   try {
// // // //     const response = await axios.post(
// // // //       'https://api.calendly.com/scheduled_events',
// // // //       {
// // // //         event: {
// // // //           event_type,
// // // //           invitee: {
// // // //             email: invitee_email,
// // // //             name: invitee_name,
// // // //           },
// // // //         },
// // // //       },
// // // //       {
// // // //         headers: {
// // // //           Authorization: `Bearer ${calendlyApiKey}`,
// // // //         },
// // // //       }
// // // //     );

// // // //     res.send('Event successfully scheduled!');
// // // //   } catch (error) {
// // // //     console.error('Error scheduling event:', error);
// // // //     res.status(500).send('Error scheduling event');
// // // //   }
// // // // });

// // // // // Server listening
// // // // const port = process.env.PORT || 3000;
// // // // app.listen(port, () => {
// // // //   console.log(`Server is running on http://localhost:${port}`);
// // // // });

// // // // module.exports = app;



// // // // const axios = require('axios');

// // // // // NoCodeAPI Calendly endpoint
// // // // const NO_CODE_API_URL = 'https://v1.nocodeapi.com/yamuna123/calendly/SOpPWvQyiEASxskd';

// // // // // Fetch events or data from the Calendly API via NoCodeAPI
// // // // async function fetchCalendlyEvents() {
// // // //   try {
// // // //     // Make a GET request to your NoCodeAPI Calendly endpoint
// // // //     const response = await axios.get(NO_CODE_API_URL, {
// // // //       headers: {
// // // //         'Content-Type': 'application/json'
// // // //       }
// // // //     });
    
// // // //     // Handle response
// // // //     console.log('Calendly Events:', response.data);
// // // //   } catch (error) {
// // // //     console.error('Error fetching Calendly events:', error);
// // // //   }
// // // // }

// // // // // Call the function to fetch events
// // // // fetchCalendlyEvents();



// // // require('dotenv').config();
// // // const express = require('express');
// // // const bodyParser = require('body-parser');
// // // const axios = require('axios');  // For making API requests
// // // const path = require('path');
// // // const app = express();

// // // // NoCodeAPI Calendly API Endpoint
// // // const calendlyApiKey = 'https://v1.nocodeapi.com/yamuna123/calendly/SOpPWvQyiEASxskd';

// // // app.set('view engine', 'ejs');
// // // app.use(express.static(path.join(__dirname, '../public')));
// // // app.set('views', path.join(__dirname, '../views'));

// // // // Middleware
// // // app.use(bodyParser.json());
// // // app.use(bodyParser.urlencoded({ extended: true }));

// // // // Home Route
// // // app.get('/', (req, res) => {
// // //   res.render('index');
// // // });

// // // app.get('/events', (req, res) => {
// // //   res.render('events');  // Render the events.ejs form
// // // });


// // // app.get('/schedule', (req, res) => {
// // //   res.render('schedule');  // Render the schedule.ejs form
// // // });


// // // // Route to get available event types from NoCodeAPI (Calendly)
// // // app.get('/events', async (req, res) => {
// // //   try {
// // //     // Make request to NoCodeAPI Calendly endpoint
// // //     const response = await axios.get(calendlyApiKey, {
// // //       headers: {
// // //         'Content-Type': 'application/json'
// // //       }
// // //     });

// // //     // Extract event types (if applicable) or display full events
// // //     const events = response.data.collection;
// // //     res.render('events', { events });
// // //   } catch (error) {
// // //     console.error('Error fetching Calendly events:', error);
// // //     res.status(500).send('Error fetching Calendly events');
// // //   }
// // // });

// // // // Route to schedule an event
// // // app.post('/schedule-event', async (req, res) => {
// // //   const { event_type, invitee_email, invitee_name } = req.body;

// // //   try {
// // //     // Example of scheduling an event (this part may require adjustments based on NoCodeAPI functionality)
// // //     const response = await axios.post(
// // //       calendlyApiKey,  // NoCodeAPI endpoint URL
// // //       {
// // //         event: {
// // //           event_type,
// // //           invitee: {
// // //             email: invitee_email,
// // //             name: invitee_name,
// // //           },
// // //         },
// // //       },
// // //       {
// // //         headers: {
// // //           'Content-Type': 'application/json',
// // //         }
// // //       }
// // //     );

// // //     res.send('Event successfully scheduled!');
// // //   } catch (error) {
// // //     console.error('Error scheduling event:', error);
// // //     res.status(500).send('Error scheduling event');
// // //   }
// // // });

// // // app.post('/schedule-demo', async (req, res) => {
// // //   const { name, email, datetime } = req.body;

// // //   try {
// // //     // Adjust datetime format to ensure compatibility
// // //     const formattedDateTime = new Date(datetime).toISOString();  // Converts to ISO format

// // //     const eventData = {
// // //       event_type: "Demo Request", // Replace with the correct event type if needed
// // //       invitee: {
// // //         email: email,
// // //         name: name,
// // //       },
// // //       start_time: formattedDateTime,  // Properly formatted datetime
// // //       status: 'active'
// // //     };

// // //     const response = await axios.post(
// // //       calendlyApiKey, 
// // //       eventData,
// // //       {
// // //         headers: {
// // //           'Content-Type': 'application/json',
// // //         }
// // //       }
// // //     );

// // //     res.send('Your demo has been successfully scheduled!');
// // //   } catch (error) {
// // //     console.error('Error scheduling demo:', error.response ? error.response.data : error.message);  // Improved error logging
// // //     res.status(500).send('Error scheduling demo');
// // //   }
// // // });



// // // // Server listening
// // // const port = process.env.PORT || 3000;
// // // app.listen(port, () => {
// // //   console.log(`Server is running on http://localhost:${port}`);
// // // });

// // // module.exports = app;




// // // const express = require('express');
// // // const path = require('path');
// // // const app = express();

// // // // Set the view engine to ejs
// // // app.set('view engine', 'ejs');

// // // // Adjust paths to static files and views
// // // app.use(express.static(path.join(__dirname, '../public')));
// // // app.set('views', path.join(__dirname, '../views'));

// // // // Route for the homepage
// // // app.get('/', (req, res) => {
// // //   res.render('index'); // Render the EJS view 'index.ejs'
// // // });

// // // // Start the server and log a message
// // // const port = process.env.PORT || 3000;
// // // app.listen(port, () => {
// // //   console.log(`Server is running on http://localhost:${port}`);
// // // });

// // // // Export the app for serverless deployment (used by Vercel)
// // // module.exports = app;


// // // require('dotenv').config();
// // // const express = require('express');
// // // const bodyParser = require('body-parser');
// // // const axios = require('axios');  // For making API requests
// // // const path = require('path');
// // // const app = express();

// // // // Load Calendly API Key from environment variables
// // // const calendlyApiKey = 'https://v1.nocodeapi.com/yamuna123/calendly/SOpPWvQyiEASxskd';

// // // app.set('view engine', 'ejs');
// // // app.use(express.static(path.join(__dirname, '../public')));
// // // app.set('views', path.join(__dirname, '../views'));

// // // // Middleware
// // // app.use(bodyParser.json());
// // // app.use(bodyParser.urlencoded({ extended: true }));

// // // // Home Route
// // // app.get('/', (req, res) => {
// // //   res.render('index');
// // // });

// // // // Route to get available event types from Calendly
// // // app.get('/events', async (req, res) => {
// // //   try {
// // //     const response = await axios.get('https://api.calendly.com/event_types', {
// // //       headers: {
// // //         Authorization: `Bearer ${calendlyApiKey}`,
// // //         Accept: 'application/json',

// // //       },
// // //     });

// // //     // Pass event types to the template
// // //     const eventTypes = response.data.collection;
// // //     res.render('events', { eventTypes });
// // //   } catch (error) {
// // //     console.error('Error fetching event types:', error);
// // //     res.status(500).send('Error fetching event types');
// // //   }
// // // });

// // // // Route to schedule an event
// // // app.post('/schedule-event', async (req, res) => {
// // //   const { event_type, invitee_email, invitee_name } = req.body;

// // //   try {
// // //     const response = await axios.post(
// // //       'https://api.calendly.com/scheduled_events',
// // //       {
// // //         event: {
// // //           event_type,
// // //           invitee: {
// // //             email: invitee_email,
// // //             name: invitee_name,
// // //           },
// // //         },
// // //       },
// // //       {
// // //         headers: {
// // //           Authorization: `Bearer ${calendlyApiKey}`,
// // //         },
// // //       }
// // //     );

// // //     res.send('Event successfully scheduled!');
// // //   } catch (error) {
// // //     console.error('Error scheduling event:', error);
// // //     res.status(500).send('Error scheduling event');
// // //   }
// // // });

// // // // Server listening
// // // const port = process.env.PORT || 3000;
// // // app.listen(port, () => {
// // //   console.log(`Server is running on http://localhost:${port}`);
// // // });

// // // module.exports = app;



// // // const axios = require('axios');

// // // // NoCodeAPI Calendly endpoint
// // // const NO_CODE_API_URL = 'https://v1.nocodeapi.com/yamuna123/calendly/SOpPWvQyiEASxskd';

// // // // Fetch events or data from the Calendly API via NoCodeAPI
// // // async function fetchCalendlyEvents() {
// // //   try {
// // //     // Make a GET request to your NoCodeAPI Calendly endpoint
// // //     const response = await axios.get(NO_CODE_API_URL, {
// // //       headers: {
// // //         'Content-Type': 'application/json'
// // //       }
// // //     });
    
// // //     // Handle response
// // //     console.log('Calendly Events:', response.data);
// // //   } catch (error) {
// // //     console.error('Error fetching Calendly events:', error);
// // //   }
// // // }

// // // // Call the function to fetch events
// // // fetchCalendlyEvents();



// require('dotenv').config();
// const express = require('express');
// const bodyParser = require('body-parser');
// const axios = require('axios');  // For making API requests
// const path = require('path');
// const app = express();

// // NoCodeAPI Calendly API Endpoint
// const calendlyPAT = '';  // Replace with your PAT
// const calendlyEventCreateUrl = 'https://api.calendly.com/scheduled_events';


// app.set('view engine', 'ejs');
// app.use(express.static(path.join(__dirname, '../public')));
// app.set('views', path.join(__dirname, '../views'));

// // Middleware
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // Home Route
// app.get('/', (req, res) => {
//   res.render('index');
// });

// app.get('/events', (req, res) => {
//   res.render('events');  // Render the events.ejs form
// });


// app.get('/schedule', (req, res) => {
//   res.render('schedule');  // Render the schedule.ejs form
// });


// // Route to get available event types from NoCodeAPI (Calendly)
// app.get('/events', async (req, res) => {
//   try {
//     // Make request to NoCodeAPI Calendly endpoint
//     const response = await axios.get(calendlyApiKey, {
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });

//     // Extract event types (if applicable) or display full events
//     const events = response.data.collection;
//     res.render('events', { events });
//   } catch (error) {
//     console.error('Error fetching Calendly events:', error);
//     res.status(500).send('Error fetching Calendly events');
//   }
// });



// app.post('/schedule-demo', async (req, res) => {
//   const { name, email, datetime } = req.body;

//   try {
//     // Format datetime to ISO 8601 format if needed
//     const formattedDateTime = new Date(datetime).toISOString();

//     const eventData = {
//       event_type: "Demo Request", // Replace with the correct event type if needed
//       invitee: {
//         email: email,
//         name: name,
//       },
//       start_time: formattedDateTime,
//       status: 'active'
//     };

//     // Schedule event using Calendly's API
//     const response = await axios.post(
//       calendlyEventCreateUrl,
//       eventData,
//       {
//         headers: {
//           'Authorization': calendlyPAT,  // Use your Calendly PAT here
//           'Content-Type': 'application/json',
//         }
//       }
//     );

//     res.send('Your demo has been successfully scheduled!');
//   } catch (error) {
//     console.error('Error scheduling demo:', error.response ? error.response.data : error.message);
//     res.status(500).send('Error scheduling demo');
//   }
// });



// // Server listening
// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

// module.exports = app;







// const express = require('express');
// const axios = require('axios');

// const app = express();
// const port = 3000;

// // Calendly API credentials
// const CALENDLY_CLIENT_ID = 'JHqbwiQ-MbaSEFAo_IIiKQH8hN-VKEesx00QW6gDMyw';
// const CALENDLY_CLIENT_SECRET = '6z7GuGuAG9VQAIUfcKKTVYm3yzCtgf9vNNtrckWXc20';
// const CALENDLY_REDIRECT_URI = 'http://localhost:3000/oauth/callback';

// // Access token and refresh token
// let accessToken = null;
// let refreshToken = null;

// // Route to initiate Calendly OAuth flow
// app.get('/oauth/login', (req, res) => {
//   const authUrl = `https://calendly.com/oauth/authorize?client_id=${CALENDLY_CLIENT_ID}&redirect_uri=${CALENDLY_REDIRECT_URI}&response_type=code`;
//   res.redirect(authUrl);
// });

// // Callback route to handle Calendly OAuth response
// // Callback route to handle Calendly OAuth response
// app.get('/oauth/callback', async (req, res) => {
//   const { code } = req.query;

//   try {
//     // Exchange the authorization code for access and refresh tokens
//     const tokenResponse = await axios.post('https://api.calendly.com/oauth/token', {
//       grant_type: 'authorization_code',
//       client_id: CALENDLY_CLIENT_ID,
//       client_secret: CALENDLY_CLIENT_SECRET,
//       redirect_uri: CALENDLY_REDIRECT_URI,
//       code,
//     });
//     console.log(">tokenResponse>>>>>>",tokenResponse)
//     accessToken = tokenResponse.data.access_token;
//     refreshToken = tokenResponse.data.refresh_token;

//     // Redirect the user to a success page or render a success template
//     res.redirect('/success');
//   } catch (error) {
//     console.log(error)
//     console.error('Error during Calendly OAuth flow:', error);
//     res.status(500).send('Error during Calendly OAuth flow');
//   }
// });


// // Route to display a success page after the OAuth flow
// app.get('/success', (req, res) => {
//   res.send('Calendly OAuth flow completed successfully!');
// });

// // Route to refresh the access token using the refresh token
// // app.get('/oauth/refresh', async (req, res) => {
// //   try {
// //     // Refresh the access token using the refresh token
// //     const tokenResponse = await axios.post('https://api.calendly.com/oauth/token', {
// //       grant_type: 'refresh_token',
// //       client_id: CALENDLY_CLIENT_ID,
// //       client_secret: CALENDLY_CLIENT_SECRET,
// //       refresh_token: refreshToken,
// //     });

// //     accessToken = tokenResponse.data.access_token;
// //     refreshToken = tokenResponse.data.refresh_token;

// //     res.send('Access token refreshed successfully!');
// //   } catch (error) {
// //     console.error('Error refreshing access token:', error);
// //     res.status(500).send('Error refreshing access token');
// //   }
// // });

// // // Example route to fetch user information using the access token
// // app.get('/user', async (req, res) => {
// //   try {
// //     const userResponse = await axios.get('https://api.calendly.com/users/me', {
// //       headers: {
// //         Authorization: `Bearer ${accessToken}`,
// //       },
// //     });

// //     res.json(userResponse.data);
// //   } catch (error) {
// //     console.error('Error fetching user information:', error);
// //     res.status(500).send('Error fetching user information');
// //   }
// // });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });




const express = require('express');
const axios = require('axios');
const querystring = require('querystring'); // To handle URL encoding

const app = express();
const port = 3000;

app.use(express.json());

const path = require('path');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '../public')));
app.set('views', path.join(__dirname, '../views'));
const bodyParser = require('body-parser');
// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Calendly API credentials
const CALENDLY_CLIENT_ID = 'JHqbwiQ-MbaSEFAo_IIiKQH8hN-VKEesx00QW6gDMyw';
const CALENDLY_CLIENT_SECRET = '6z7GuGuAG9VQAIUfcKKTVYm3yzCtgf9vNNtrckWXc20';
const CALENDLY_REDIRECT_URI = 'http://localhost:3000/oauth/callback';

// Access token and refresh token
let accessToken = null;
let refreshToken = null;

// Route to initiate Calendly OAuth flow
app.get('/oauth/login', (req, res) => {
  const authUrl = `https://calendly.com/oauth/authorize?client_id=${CALENDLY_CLIENT_ID}&redirect_uri=${CALENDLY_REDIRECT_URI}&response_type=code`;
  res.redirect(authUrl);
});

// Callback route to handle Calendly OAuth response
app.get('/oauth/callback', async (req, res) => {
  const { code } = req.query;

  try {
    // Exchange the authorization code for access and refresh tokens
    const tokenResponse = await axios.post('https://auth.calendly.com/oauth/token', querystring.stringify({
      grant_type: 'authorization_code',
      client_id: CALENDLY_CLIENT_ID,
      client_secret: CALENDLY_CLIENT_SECRET,
      redirect_uri: CALENDLY_REDIRECT_URI,
      code,
    }), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    accessToken = tokenResponse.data.access_token;
    refreshToken = tokenResponse.data.refresh_token;
console.log(accessToken)
console.log(refreshToken)
    // Redirect the user to a success page or render a success template
    res.redirect('/success');
  } catch (error) {
    console.error('Error during Calendly OAuth flow:', error.response ? error.response.data : error.message);
    res.status(500).send('Error during Calendly OAuth flow');
  }
});

app.get('/', (req, res) => {
  res.render('index');
});


app.post('/schedule-demo', async (req, res) => {
  const { name, email, phone, demoTime } = req.body;

  // Simple validation
  if (!name || !email || !phone || !demoTime) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    // Here you can call the Calendly API to schedule a demo or save it in a database
    // Assuming the demo was successfully scheduled, we return a success response
    res.status(200).json({ message: `Demo scheduled successfully for ${demoTime}. We will reach out to ${email}!` });
  } catch (error) {
    res.status(500).json({ message: 'There was an error scheduling the demo.' });
  }
});

// Route to display a success page after the OAuth flow
app.get('/success', (req, res) => {
  res.send('Calendly OAuth flow completed successfully!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
