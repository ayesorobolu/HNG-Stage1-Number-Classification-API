HNG Stage 1 Number Classification API Task

## Description
The Number Classification API is a simple API that classifies numbers based on their properties. Given a number, it determines:

	•	If it’s prime
 
	•	If it’s perfect
 
	•	If it’s Armstrong
 
	•	If it’s even or odd
 
	•	Its digit sum
 
	•	A fun fact about the number (fetched from Numbers API)

## Technologies
It is built using

	•Node.js (Runtime environment)
 
	•Express.js (Backend framework)
 
	•CORS (Cross-Origin Resource Sharing)
 
	•Axios (fetching fun fact from Numbers API)

## Setup Instructions
Ensure you have Node.js installed on your system. You can download it from Node.js Official Website.

Clone this repository:

git clone https://github.com/your-repo/number-classification-api.git

cd number-classification-api

Install dependencies:

npm install

Start the server:

node server.js

## API Documentation
GET /api/classify-number?number=<your_number>

Example Request:

GET http://localhost:4000/api/classify-number?number=28

✅ Response Example (200 OK):
{

    "number": 28,
    
    "is_prime": false,
    
    "is_perfect": true,
    
    "properties": [
    
        "even"
    ],
    "digit_sum": 10,
    
    "fun_fact": "28 is in the Padovan sequence, preceded by the terms 12, 16, 21 (it is the sum of the first two of these)."
}

❌ Response Example (400 Bad Request):

{

  "number": "alphabet",
  
  "error": true
  
}
