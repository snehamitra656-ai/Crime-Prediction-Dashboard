from flask import Flask, render_template, request
from datetime import datetime
import joblib
import numpy as np

app = Flask(__name__)

# Load trained model
model = joblib.load("crime_prediction_model.pkl")

# Load Label Encoders
label_encoder = joblib.load("label_encoder.pkl")
description_encoder = joblib.load("description_encoder.pkl")


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/predict", methods=["POST"])
def predict():

    try:
        # Date & Time
        date = request.form["date"]
        time = request.form["time"]

        dt = datetime.strptime(date + " " + time, "%Y-%m-%d %H:%M")

        year = dt.year
        month = dt.month
        day = dt.day
        hour = dt.hour
        minute = dt.minute
        day_of_week = dt.weekday()
        week_of_year = dt.isocalendar().week

        # Other Inputs
        arrest = int(request.form["arrest"])
        latitude = float(request.form["latitude"])
        longitude = float(request.form["longitude"])

        # Encode Description
        description = request.form["description"]
        description = description_encoder.transform([description])[0]

        # Feature Array
        features = np.array([[
            year,
            month,
            day,
            hour,
            minute,
            day_of_week,
            week_of_year,
            arrest,
            latitude,
            longitude,
            description
        ]])

        # Prediction
        prediction = model.predict(features)

        crime = label_encoder.inverse_transform(prediction)[0]

        return render_template(
            "index.html",
            prediction_text=f"Predicted Crime Type: {crime}"
        )

    except Exception as e:

        return render_template(
            "index.html",
            prediction_text=f"Error: {str(e)}"
        )


if __name__ == "__main__":
    app.run(debug=True)