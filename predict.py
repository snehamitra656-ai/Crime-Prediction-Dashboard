import joblib
import numpy as np

model = joblib.load("crime_prediction_model.pkl")
label_encoder = joblib.load("label_encoder.pkl")


def predict_crime(features):
    """
    Predict crime type.
    """

    prediction = model.predict(np.array([features]))

    return label_encoder.inverse_transform(prediction)[0]