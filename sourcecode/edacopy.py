#!/usr/bin/env python
# coding: utf-8

# In[4]:


import os
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import time

import warnings
warnings.simplefilter(action="ignore", category=FutureWarning)


# In[5]:


input_dir = r"D:\A\miniproject3\datasets\rawdata"
output_dir = r"D:\A\miniproject3\datasets\filtered"
os.makedirs(output_dir, exist_ok=True)


# In[6]:


valid_cities = {
    "BENGALURU", "DHARWAD", "MANGALORE", "MYSORE",
    "T.PURAM", "ERNAKULAM", "KOZHIKODE", "THRISSUR",
    "PALAKKAD", "WAYANAD", "VISAKHAPATNAM", "VIJAYAWADA", "HYDERABAD",
    "PUDUCHERRY", "PANAJI", "CHENNAI", "COIMBATORE", "DINDIGUL",
    "TIRUNELVELI", "THIRUCHIRAPALLI"
}


# In[7]:


all_data = []
for file in os.listdir(input_dir):
    if file.endswith(".csv"):
        file_path = os.path.join(input_dir, file)
        df = pd.read_csv(file_path, encoding="utf-8")

        # Ensure required columns exist
        if not {"Date", "Centre_Name", "Commodity_Name", "Price"}.issubset(df.columns):
            print(f"Skipping {file} (missing required columns)")
            continue

        df["Centre_Name"] = df["Centre_Name"].str.upper()  # Normalize city names
        df_filtered = df[df["Centre_Name"].isin(valid_cities)].dropna()
        df_filtered["Date"] = pd.to_datetime(df_filtered["Date"], format= "%d-%m-%Y", errors="coerce")
        df_filtered["Price"] = pd.to_numeric(df_filtered["Price"], errors="coerce")
        df_filtered = df_filtered.drop_duplicates()

        # Save filtered data
        output_path = os.path.join(output_dir, file)
        df_filtered.to_csv(output_path, index=False, encoding="utf-8")
        all_data.append(df_filtered)
        print(f"Processed: {file}")
        time.sleep(0.35) 


# In[ ]:


import sys
import time
import pandas as pd

final_df = pd.concat(all_data, ignore_index=True)
for i in range(16):  
    sys.stdout.write("\r" + "/")  
    sys.stdout.flush()
    time.sleep(0.1) 
    sys.stdout.write("\r" + "\\")
    sys.stdout.flush()
    time.sleep(0.1)

sys.stdout.write("\r" + " "+ "\r")  # Overwrite with spaces and reset cursor
sys.stdout.flush()
print("\nPreprocessing Complete! Cleaned data saved in:", output_dir)

final_df.head()


# In[9]:


print("\nData Overview:")
print(final_df.info())


# In[10]:


final_df = final_df.drop_duplicates()
print("\nDuplicates Removed. Final Shape:", final_df.shape)


# In[11]:


plt.figure(figsize=(12, 5))
sns.countplot(data=final_df, y="Centre_Name", order=final_df["Centre_Name"].value_counts().index, palette="viridis")
plt.xlabel("Number of Records")
plt.ylabel("City")
plt.title("Distribution of Data by City")
plt.show()


# In[21]:


final_df["Month"] = final_df["Date"].dt.to_period("M")
monthly_prices = final_df.groupby("Month")["Price"].mean()
final_df.head()


# In[12]:


plt.figure(figsize=(14, 6))
sns.barplot(data=final_df, x="Commodity_Name", y="Price", errorbar=None, palette="coolwarm")
plt.xticks(rotation=90)
plt.xlabel("Commodity")
plt.ylabel("Average Price")
plt.title("Average Price per Commodity")
plt.grid(axis="y")
plt.show()


# In[16]:


if monthly_prices.empty:
    print("Error: monthly_prices DataFrame is empty. Check your data processing pipeline.")
else:
    # Handle NaN values (fill with 0 or drop them)
    monthly_prices = monthly_prices.dropna()
    plt.figure(figsize=(12, 5))
monthly_prices.plot(marker="o", color="red")
plt.xlabel("Month")
plt.ylabel("Average Price")
plt.title("Monthly Average Price Trends")
plt.grid()
plt.show()


# In[ ]:


plt.figure(figsize=(14, 6))
sns.boxplot(data=final_df, x="Commodity_Name", y="Price", showfliers=False)
plt.xticks(rotation=90)
plt.xlabel("Commodity")
plt.ylabel("Price")
plt.title("Commodity-Wise Price Variations")
plt.show()


# In[ ]:


final_df.to_csv(os.path.join(output_dir, "final_data.csv"), index=False, encoding="utf-8")
print("\nFinal cleaned dataset saved as 'final_data.csv' in:", output_dir)

