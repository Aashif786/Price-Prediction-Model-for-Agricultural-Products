import pickle
import matplotlib.pyplot as plt
import numpy as np

def load_arima_model(model_path):
    """Load the ARIMA model from a pickle file."""
    with open(model_path, "rb") as model_file:
        loaded_model = pickle.load(model_file)
    print("Model loaded successfully")
    return loaded_model

def forecast_with_model(loaded_model, steps=30):
    """Forecast future values using the loaded ARIMA model."""
    forecast = loaded_model.forecast(steps=steps)
    print(f"Forecast for next {steps} steps:")
    print(forecast)
    return forecast

def plot_forecast(time_series_data, forecast):
    """Plot historical data and forecasted values."""
    forecast_steps = len(forecast)
    plt.figure(figsize=(12, 6))
    plt.plot(time_series_data, label='Historical Data')
    plt.plot(range(len(time_series_data), len(time_series_data) + forecast_steps), forecast, label='Forecast')
    plt.legend()
    plt.title('ARIMA Model Forecast')
    plt.show()

if __name__ == "__main__":
    model_path = "sourcecode/arima_model_lab.pkl"
    loaded_model = load_arima_model(model_path)

    # Replace this with your actual historical time series data as a list or numpy array
    time_series_data = np.arange(100)  # Dummy data representing historical time series

    forecast = forecast_with_model(loaded_model, steps=30)
    plot_forecast(time_series_data, forecast)
