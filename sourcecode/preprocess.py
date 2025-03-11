import os
import pandas as pd

input_dir = r"D:\A\miniproject3\datasets\rawdata"
output_dir = r"D:\A\miniproject3\datasets\filtered"

# List of Cities
valid_cities = {
    "BENGALURU", "DHARWAD", "MANGALORE", "MYSORE",
    "T.PURAM", "ERNAKULAM", "KOZHIKODE", "THRISSUR",
    "PALAKKAD", "WAYANAD", "VISAKHAPATNAM", "VIJAYAWADA", "HYDERABAD",
    "PUDUCHERRY", "PANAJI", "CHENNAI", "COIMBATORE", "DINDIGUL",
    "TIRUNELVELI", "THIRUCHIRAPALLI"
}

os.makedirs(output_dir, exist_ok=True)

# Process each CSV file
for file in os.listdir(input_dir):
    if file.endswith(".csv"): 
        file_path = os.path.join(input_dir, file)
        df = pd.read_csv(file_path, encoding="utf-8")  

        # Ensure required columns exist
        if not {"Date", "Centre_Name", "Commodity_Name", "Price"}.issubset(df.columns):
            print(f"Skipping {file} (missing required columns)")
            continue

        df["Centre_Name"] = df["Centre_Name"].str.upper()

        df_filtered = df[df["Centre_Name"].isin(valid_cities)].dropna()

        if not df_filtered.empty:
            output_path = os.path.join(output_dir, file)
            df_filtered.to_csv(output_path, index=False, encoding="utf-8")
            print(f"Processed: {file}")

print("Preprocessing Complete! Filtered CSV files are saved in:", output_dir)
