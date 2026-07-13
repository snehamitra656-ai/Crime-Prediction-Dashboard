import pandas as pd
from sklearn.preprocessing import LabelEncoder


def preprocess_data(csv_path):
    """
    Load and preprocess crime dataset.
    """

    df = pd.read_csv(csv_path)

    df["date"] = pd.to_datetime(df["date"])

    df["year"] = df["date"].dt.year
    df["month"] = df["date"].dt.month
    df["day"] = df["date"].dt.day
    df["hour"] = df["date"].dt.hour
    df["minute"] = df["date"].dt.minute
    df["day_of_week"] = df["date"].dt.dayofweek
    df["week_of_year"] = df["date"].dt.isocalendar().week.astype(int)

    description_encoder = LabelEncoder()
    df["description"] = description_encoder.fit_transform(df["description"])

    crime_encoder = LabelEncoder()
    df["primary_type"] = crime_encoder.fit_transform(df["primary_type"])

    return df, crime_encoder, description_encoder