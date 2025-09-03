# 🌾 Agri-Horticultural Commodities Price Prediction 📈

**AI-powered forecasting system for agriculture market stability and decision-making.**

---

## 🚀 Overview

Agricultural commodity prices are highly **volatile** due to seasonal changes, market demand, and supply uncertainties. Traditional models often fail, leading to poor buffer stock management and ineffective government interventions.

This project leverages **AI and time-series forecasting models** (ARIMA, XGBoost, Random Forest) to build a robust **price prediction system**. By integrating **real-time data** from open government sources, it aims to:

* Enhance price forecasting accuracy
* Improve farmer decision-making
* Support government market interventions
* Reduce economic uncertainty in the agri-sector

---

## 🎯 Objectives

* Develop an **AI-driven forecasting model** for agricultural & horticultural commodities.
* Integrate **historical trends, seasonal patterns, and market signals**.
* Provide **data-driven insights** for farmers, traders, and policymakers.
* Enable **better buffer stock management** and **risk mitigation**.

---

## 📊 Key Features

✅ **Data Collection & Preprocessing**

* Collects real-time commodity prices from [Agmarknet](https://agmarknet.gov.in) and [Data.gov.in](https://data.gov.in).
* Cleans missing values, removes outliers, and normalizes datasets.

✅ **Prediction Models**

* **ARIMA** – Baseline time-series forecasting.
* **XGBoost & Random Forest** – ML models for improved accuracy.
* **Deep Learning (Future Work)** – Enhancing long-term trend predictions.

✅ **Explainability**

* Feature engineering to capture **seasonality, inflation, and market shocks**.
* Feature reduction with **MRMR** for optimal accuracy.

✅ **Frontend (Prototype)**

* **Login system** for users (farmers, traders, policymakers).
* Select **crop & region** → get **future price predictions** instantly.

---

## 🔬 System Flow

```
Raw Data  →  Preprocessing  →  Model Building  →  Prediction  →  Frontend
```

**Modules**

1. **Data Preprocessing**: Cleans & structures price datasets.
2. **Model Building**: Trains ARIMA & ML models.
3. **Frontend**: Simple UI to input crop & region → outputs predicted price.

---

## 🛠️ Tech Stack

* **Python** (Pandas, NumPy, Scikit-learn, Statsmodels, XGBoost)
* **Data Sources**: agmarknet.gov.in, data.gov.in
* **Visualization**: Matplotlib, Seaborn
* **Frontend**: Basic web login + selection form
* **Deployment (Future)**: Streamlit / Taipy dashboard

---

## 📖 References

* Mohanty, Thakurta, Kar (2023) – *Agricultural Commodity Price Prediction Model: A Machine Learning Framework*
* Zhang, Chen, Ling, Xia (2020) – *Forecasting Agricultural Commodity Prices Using Model Selection Framework With Time Series Features and Forecast Horizons*
* Elbasi, Mostafa, Alarnaout (2022) – *AI in Agriculture: A Systematic Review*

---

## 📌 Future Enhancements

* Add **deep learning models** (LSTM, GRU) for sequence forecasting.
* Deploy as an **interactive dashboard** (Streamlit/Taipy).
* Add **real-time alerts** (SMS/Email/Slack) for sudden price spikes.
* Extend prediction to **multi-region & multi-crop analysis**.

---

## 🏆 Impact

🌱 **Farmers** – Choose the best time to sell crops.
📦 **Traders** – Optimize buying & storage strategies.
🏛️ **Policymakers** – Enable better intervention & stabilize markets.

---

## 👩‍💻 Contributors

* **Sharanya T -727622BAD007**   
* **Santhosh S -727622BAD073**
* **Aashif Shadin K N  -727622BAD099**
---

✨ *Empowering agriculture with AI for smarter markets and stronger communities.* 🌍

