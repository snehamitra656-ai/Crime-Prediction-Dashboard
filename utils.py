from datetime import datetime


def extract_date_features(date_string, time_string):
    """
    Convert date and time into model features.
    """

    dt = datetime.strptime(
        date_string + " " + time_string,
        "%Y-%m-%d %H:%M",
    )

    return {
        "year": dt.year,
        "month": dt.month,
        "day": dt.day,
        "hour": dt.hour,
        "minute": dt.minute,
        "day_of_week": dt.weekday(),
        "week_of_year": dt.isocalendar().week,
    }


def risk_level(probability):

    if probability >= 80:
        return "High"

    if probability >= 50:
        return "Medium"

    return "Low"