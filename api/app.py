from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score
import numpy as np

app = Flask(__name__)
CORS(app)

# Load the model (create a dummy model for now)
model = RandomForestClassifier(n_estimators=100, random_state=42)

# Dummy data for demonstration
dummy_data = pd.DataFrame({
    'home_team': ['Team A', 'Team B', 'Team C'] * 100,
    'away_team': ['Team B', 'Team C', 'Team A'] * 100,
    'league': ['Premier League', 'La Liga', 'Bundesliga'] * 100,
    'home_score': np.random.randint(0, 5, 300),
    'away_score': np.random.randint(0, 5, 300)
})

# Prepare features and target
X = pd.get_dummies(dummy_data[['home_team', 'away_team', 'league']])
y = (dummy_data['home_score'] > dummy_data['away_score']).astype(int)

# Split the data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train the model
model.fit(X_train, y_train)

# Calculate accuracy
accuracy = accuracy_score(y_test, model.predict(X_test))

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    home_team = data['home_team']
    away_team = data['away_team']
    league = data['league']
    
    # Prepare input data
    input_data = pd.DataFrame({
        'home_team': [home_team],
        'away_team': [away_team],
        'league': [league]
    })
    input_encoded = pd.get_dummies(input_data)
    
    # Ensure all columns from training are present
    for col in X.columns:
        if col not in input_encoded.columns:
            input_encoded[col] = 0
    
    # Reorder columns to match training data
    input_encoded = input_encoded[X.columns]
    
    # Make prediction
    prediction = model.predict_proba(input_encoded)[0]
    
    # Generate mock scores and insights
    home_score = np.random.randint(0, 4)
    away_score = np.random.randint(0, 4)
    insights = [
        "Based on recent form, the home team has a slight advantage.",
        "The away team has been strong in defense in their last 5 matches.",
        "Historical head-to-head results favor the home team."
    ]
    
    return jsonify({
        'home_score': int(home_score),
        'away_score': int(away_score),
        'win_probability': {
            'home': float(prediction[1]),
            'draw': float(prediction[0]),
            'away': float(prediction[2]) if len(prediction) > 2 else 1 - prediction[0] - prediction[1]
        },
        'insights': insights
    })

@app.route('/accuracy', methods=['GET'])
def get_accuracy():
    return jsonify({'accuracy': accuracy * 100})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)