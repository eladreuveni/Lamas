import numpy as np

# Function for calculating weighted average of column in Pandas DataFrame
def weighted_average(df, col, weight_col):
    """
    This function calculates the weighted average of column in Pandas DataFrame
    Parameters:
        df: Pandas DataFrame
        col: Pandas column you wish to calculate the weighted average
        weight_col: Pandas column you wish to use as weights to calculate the weighted average

    Returns:
        the weighted average of column col
    """
    weights = df.loc[col.index, weight_col]
    mask = ~col.isna()  # Create a mask to exclude NaN values
    col = col[mask]
    weights = weights[mask]
    return np.average(col, weights=weights)