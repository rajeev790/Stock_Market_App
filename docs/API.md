```markdown
# API Documentation

## Authentication

### POST /api/auth/signup
Registers a new user.

**Request Body:**
- `name`: User's name
- `email`: User's email
- `password`: User's password

**Response:**
- `token`: JWT token
- `user`: User details

### POST /api/auth/login
Logs in a user.

**Request Body:**
- `email`: User's email
- `password`: User's password

**Response:**
- `token`: JWT token
- `user`: User details

## Stocks

### GET /api/stocks/:symbol
Fetches stock data for the given symbol.

**Response:**
- `symbol`: Stock symbol
- `price`: Current price
- `change`: Price change

## Portfolio

### GET /api/portfolio
Fetches user's portfolio.

**Response:**
- `items`: List of stocks in the portfolio

### PUT /api/portfolio
Updates user's portfolio.

**Request Body:**
- `symbol`: Stock symbol
- `quantity`: Number of shares

**Response:**
- `updatedPortfolio`: Updated portfolio details
