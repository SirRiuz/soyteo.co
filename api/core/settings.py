# Python
import os

DEBUG = os.environ["DEBUG"]

# Cors
origins = os.getenv("ALLOWER_CORS_ORIGINS", "")
ALLOWER_CORS_ORIGINS = [origin.strip() for origin in origins.split(",") if origin]
