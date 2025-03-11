import os
import pandas as pd

# Directory Paths
input_dir = r"D:\A\3rdyrminiproject\datasets\rawdata"
output_dir = r"D:\A\3rdyrminiproject\datasets\filtered"

# List of Cities to Keep
valid_cities = {
    "BENGALURU", "DHARWAD", "MANGALORE", "MYSORE",
    "T.PURAM", "ERNAKULAM", "KOZHIKODE", "THRISSUR",
    "PALAKKAD", "WAYANAD", "VISAKHAPATNAM", "VIJAYAWADA", "HYDERABAD",
    "PUDUCHERRY", "PANAJI", "CHENNAI", "COIMBATORE", "DINDIGUL",
    "TIRUNELVELI", "THIRUCHIRAPALLI"
}

# Ensure output directory exists
os.makedirs(output_dir, exist_ok=True)

# Process each Excel file
for file in os.listdir(input_dir):
    if file.endswith(".xlsx") or file.endswith(".xls"):  # Process only Excel files
        file_path = os.path.join(input_dir, file)
        df = pd.read_excel(file_path, engine="openpyxl")  # Read file

        # Ensure required columns exist
        if not {"Date", "Centre_Name", "Commodity_Name", "Price"}.issubset(df.columns):
            print(f"Skipping {file} (missing required columns)")
            continue

        # Filter by valid Centre_Name and drop null values
        df_filtered = df[df["Centre_Name"].str.upper().isin(valid_cities)].dropna()

        # Save only if data remains after filtering
        if not df_filtered.empty:
            output_path = os.path.join(output_dir, file)
            df_filtered.to_excel(output_path, index=False, engine="openpyxl")
            print(f"Processed: {file}")

print("Preprocessing Complete! Filtered files are saved in:", output_dir)
