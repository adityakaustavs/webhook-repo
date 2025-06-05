import os
from dotenv import load_dotenv
from pymongo import MongoClient
from datetime import datetime

# Load variables from .env file
load_dotenv()

# Get MongoDB URI from environment variable
mongo_uri = os.getenv("MONGO_URI")

# Connect to MongoDB
client = MongoClient(mongo_uri)
db = client.github_events
collection = db.events

def insert_event(event_data):
    collection.insert_one(event_data)

def get_latest_events():
    events = collection.find().sort("timestamp", -1).limit(10)
    result = []
    for event in events:
        event["_id"] = str(event["_id"])  # Convert ObjectId to string
        event["timestamp"] = event["timestamp"].strftime("%d %B %Y - %I:%M %p UTC")  # Format datetime
        result.append(event)
    return result
