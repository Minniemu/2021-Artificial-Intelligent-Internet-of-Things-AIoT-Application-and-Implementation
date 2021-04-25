import pandas as pd
import numpy as np
from sklearn import metrics 
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
df = pd.read_csv('interviewTrain.csv')
df.head()
x = df.drop('y',axis = 1)
y = df.y

print("x : ")
print(x)
print("y:")
print(y)
df_test = pd.read_csv('interviewTestOdd.csv')
df_test.head()
x_test = df_test.drop('y',axis = 1)
#y_test = df_test.y
print("x : ")
print(x_test)
print("y:")
print(y_test)
logistic_regression = LogisticRegression()
logistic_regression.fit(x, y)
y_pred = logistic_regression.predict(x_test)
print(y_pred)
y_pred.reshape(len(y_pred),1)
a = np.asarray(y_pred)
np.savetxt("result.csv", a, delimiter=",", fmt = '%.d')