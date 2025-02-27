
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from dotenv import load_dotenv
import os
load_dotenv()
uri = "mongodb+srv://amitnaka:drH6mWhlHzVoEyMa@cluster0.lmyi0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))

# Send a ping to confirm a successful connection
try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)

# הגדרת המסד נתונים
db = client["mydatabase"]  # תוכל לשנות את שם הבסיס נתונים

# הגדרת הקולקשן
customers_collection = db["customers"]  # שם הקולקשן (לקוחות)
def save_customer_to_db(customer_data):
    try:
        # Insert the customer data into the MongoDB collection
        result = customers_collection.insert_one(customer_data)
        return result.inserted_id  # מחזיר את ה-ID של הלקוח שנשמר
    except Exception as e:
        print(f"Error saving customer: {e}")
        return None