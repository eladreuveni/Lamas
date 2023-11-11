import numpy as np

# Function for calculating weighted average of column in Pandas DataFrame
def weighted_average(df, col, weight_col):
    weights = df.loc[col.index, weight_col]
    mask = ~col.isna()  # Create a mask to exclude NaN values
    col = col[mask]
    weights = weights[mask]
    print (len(col), len(weights))
    return np.average(col, weights=weights)