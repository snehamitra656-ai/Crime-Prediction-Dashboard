import joblib

from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split

from preprocess import preprocess_data


df, label_encoder, description_encoder = preprocess_data(
    "chicago_crime_2015_2020.csv"
)

X = df[
    [
        "year",
        "month",
        "day",
        "hour",
        "minute",
        "day_of_week",
        "week_of_year",
        "arrest",
        "latitude",
        "longitude",
        "description",
    ]
]

y = df["primary_type"]

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42,
)

model = RandomForestClassifier(
    n_estimators=100,
    random_state=42,
)

model.fit(X_train, y_train)

joblib.dump(model, "crime_prediction_model.pkl")
joblib.dump(label_encoder, "label_encoder.pkl")
joblib.dump(description_encoder, "description_encoder.pkl")

print("Model trained successfully.")