from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# store emergency requests temporarily
requests_list = []

@app.route("/")
def home():
    return "Disaster Response API Running"

# submit emergency request
@app.route("/submit", methods=["POST"])
def submit_request():
    data = request.json

    request_data = {
        "name": data["name"],
        "location": data["location"],
        "message": data["message"]
    }

    requests_list.append(request_data)

    return jsonify({"message": "Request submitted successfully"})

# get all emergency requests
@app.route("/requests", methods=["GET"])
def get_requests():
    return jsonify(requests_list)

if __name__ == "__main__":
    app.run(debug=True)