Webhook Listener

A lightweight Flask-based webhook listener designed to receive and process GitHub webhook events.  This application can be deployed to platforms like Vercel or run locally for development and testing purposes. 

🌐 Live Demo

Access the live application here: https://webhook-repo-knjg.onrender.com

📁 Project Structure

webhook-repo/
├── server.py           # Main Flask application handling incoming webhooks
├── models.py           # Data models and database interactions
├── requirements.txt    # Python dependencies
├── templates/          # HTML templates for rendering responses
│   └── index.html
├── static/             # Static assets (CSS, JS, images)
└── .gitignore          # Git ignore file



🚀 Features

Handles incoming GitHub webhook POST requests.

Processes and stores event payloads.

Renders a user-friendly interface displaying received events.

Easily deployable to cloud platforms like Vercel. 


🛠️ Installation

Prerequisites

Python 3.x installed on your system.

pip package manager. 


Steps

1. Clone the Repository

git clone https://github.com/adityakaustavs/webhook-repo.git
cd webhook-repo





2. Create a Virtual Environment

python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate





3. Install Dependencies

pip install -r requirements.txt





4. Run the Application

python server.py





The application will start on http://localhost:5000/.

🔗 Setting Up GitHub Webhooks

To configure a GitHub repository to send webhook events to this listener:

1. Navigate to your repository on GitHub.


2. Go to Settings > Webhooks > Add webhook.


3. Set the Payload URL to your server's endpoint, e.g., https://your-domain.com/.


4. Choose Content type as application/json.


5. (Optional) Set a secret for securing your webhook.


6. Select the events you want to subscribe to, or choose Just the push event.


7. Click Add webhook.